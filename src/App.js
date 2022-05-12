import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/Home";
import About from "./components/About";
import CityWeather from "./components/CityWeather";

const MainHeader = styled.h1`
  color: darkcyan;
  background-color: lightcyan;
  text-align: center;
  padding: 10px;
`;

const NavbarButton = styled.button`
  color: darkcyan;
  background-color: lightcyan;
  font-size: 20px;
  border: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: white;
    background-color: darkcyan;
    font-size: 21px;
  }
`;

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: lightcyan;
  color: white;
  overflow: hidden;
  text-align: left;
  padding: 2px;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainHeader><h1>Weather App</h1></MainHeader>
        <NavbarDiv>
          <Link to="/"><NavbarButton>Home</NavbarButton></Link>
          <Link to="/about"><NavbarButton>About</NavbarButton></Link>
          <Link to="/cityweather"><NavbarButton>City Weather</NavbarButton></Link>
        </NavbarDiv>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/cityweather" element={<CityWeather/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
