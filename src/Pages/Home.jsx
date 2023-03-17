import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <h4>Styled componentst fogok itt használni</h4>
            <Title>Hello</Title>
        </div>
    )
}

export default Home;