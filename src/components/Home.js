import React from "react";
import styled from "styled-components";

const PaddedDiv = styled.div`
    padding: 10px;
`;

const Home = () => {
    return (
        <PaddedDiv>
            <h2>Home</h2>
            <p>I need to <strong>add some Home page content</strong> over here!</p>
        </PaddedDiv>
    );
}

export default Home;