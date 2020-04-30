import React from 'react';
import logo from './logo.svg';
import './App.css';
import PixiRenderTest from "./components/PixiRenderTest";
import TensorFlowTest from "./components/TensorFlowTest";
import styled from "styled-components";

const Header = styled.div`
    display: inline-block;
    background-color: #282c34;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;


function App() {
  return (
    <div className="App">
      <Header>
          {/*<PixiRenderTest/>*/}
          <TensorFlowTest/>
      </Header>
    </div>
  );
}

export default App;
