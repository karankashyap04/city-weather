import React from "react";
import styled from "styled-components";

const PaddedDiv = styled.div`
    padding: 10px;
`;

const About = () => {
    return (
        <PaddedDiv>
            <h2>About</h2>
            <p>This is a weather web-app designed by Karan Kashyap.
                <br></br><br></br>
                The 'City Weather' page of the web-app fetches weather data
                for a city of the user's choice.
                <br></br><br></br>
                This web-app was designed as a beginner starter project as
                Karan was beginning to learn how to use React.
                <br></br><br></br>
                I <strong>need to add some proper About page content</strong> over here.
            </p>
        </PaddedDiv>
    );
}

export default About;