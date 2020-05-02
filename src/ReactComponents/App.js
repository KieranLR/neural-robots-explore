import React from 'react';
import './App.css';
import styled from "styled-components";
import GameRenderer from "./../Game/GameRenderer"

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
          <GameRenderer/>
      </Header>
    </div>
  );
}

export default App;
