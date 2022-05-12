import React from "react";
import styled from "styled-components";

const axios = require("axios");

const API_KEY = "(hidden for security reasons)";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";

const PaddedDiv = styled.div`
    padding: 10px;
`;

const StyledInput = styled.input`
    width: 20%;
    padding: 10px;
    display: block;
    border: none;
    border-radius: 0px 0px 10px 10px;
    margin-top: -10px;

    background-color: rgb(224, 255, 255);
    color: black;
    font-weight: bold;
    font-size: 15px;

    ::placeholder {
        color: darkcyan;
    }
`;

const SubmitButton = styled.button`
    padding: 10px;
    border: none;
    margin-top: 5px;

    background-color: rgba(224, 255, 255, 0.6);
    color: darkcyan;
    font-size: 12px;
    font-weight: bold;

    transition: 0.3s;

    &:hover {
        background-color: darkcyan;
        color: white;
        font-size: 13px;
    }
`;

const WeatherStyledDiv = styled.div`
    padding: 5px;
    width: 18%;
    border-radius: 5px;
    margin-top: 30px;

    background-color: lightskyblue;
    
    color: midnightblue;
    text-align: center;

    & > h2 {
        font-size: 30px;
    };

    & > h3 {
        width: 45%;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 0 auto;
    };

`;

class CityWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cityname: "", weather: "" };
        this.handleInput = this.handleInput.bind(this);
        this.getCityWeather = this.getCityWeather.bind(this);
        this.toDisplayMax = this.toDisplayMax.bind(this);
        this.toDisplayMin = this.toDisplayMin.bind(this);
        this.toDisplayTemp = this.toDisplayTemp.bind(this);
    }

    handleInput(event) {
        this.setState({ cityname: event.target.value });
    }

    getCityWeather(event) {
        event.preventDefault();
        axios.get(API_BASE_URL + "weather?q=" + this.state.cityname + "&units=metric&APPID=" + API_KEY).then((w) => {
            this.setState({ cityname: "" });
            console.log(w);

            this.setState({ weather: { 
                city: w.data.name,
                temp: w.data.main.temp,
                max: w.data.main.temp_max,
                min: w.data.main.temp_min,
                description: w.data.weather[0].description
            } });

            // let ret = "";
            // for (const i of this.state.weather) {
            //     ret += i;
            // }
            // this.setState({ weather: ret });
        });
    };

    toDisplayMax() {
        if (this.state.weather !== "") {
            return "Max temp: ";
        }
    }

    toDisplayMin() {
        if (this.state.weather !== "") {
            return "Min temp: ";
        }
    }

    toDisplayTemp() {
        if (this.state.weather !== "") {
            return "ºC";
        }
    }

    componentDidMount() {
        console.log("CityWeather component has just been mounted");
    }

    render() {
        return (
            <PaddedDiv>
                <React.Fragment>
                    <center>
                        <form>
                            <label htmlFor="cityname"></label>
                            <StyledInput
                                type="text"
                                name="cityname"
                                value={this.state.cityname}
                                onChange={this.handleInput}
                                placeholder="Search for a city..."
                            />
                            {/* <SubmitInput type="submit" value="Submit" onChange={this.getCityWeather}/> */}
                        </form>
                        <SubmitButton onClick={this.getCityWeather}>Submit</SubmitButton>
                    </center>
                </React.Fragment>
                <center>
                    <WeatherStyledDiv>
                        <h2>{this.state.weather.city}</h2>
                        <h3>{this.state.weather.temp} {this.toDisplayTemp()}</h3>
                        <h4>{this.toDisplayMax()} {this.state.weather.max} {this.toDisplayTemp()}</h4>
                        <h4>{this.toDisplayMin()} {this.state.weather.min} {this.toDisplayTemp()}</h4>
                        <h4>{this.state.weather.description}</h4>
                    </WeatherStyledDiv>
                </center>
            </PaddedDiv>
        );
    }
}

// const CityWeather = () => {
//     return (
//         <PaddedDiv>
//             <h2>This is the City Weather page!</h2>
//         </PaddedDiv>
//     );
// }

export default CityWeather;