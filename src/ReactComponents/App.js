import React from 'react';
import './App.css';
import styled from "styled-components";
import GameRenderer from "./../Game/GameRenderer"
import {TensorFlowTrain} from "../legacyCode/TensorFlowTest";
import rootReducer from "./../Redux/Reducers/reducers"
import {createStore} from "redux";
import {Provider} from "react-redux"

const store = createStore(rootReducer);

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
  padding: 10px 0;
  overflow: hidden;
`;

const AppContainer = styled.div`
    text-align: center;
`;


function App() {
  return (
      <Provider store = {store}>
          <div className="App">
              <Header>
                  <GameRenderer/>
                  {/*<TensorFlowTrain/>*/}
              </Header>
          </div>
      </Provider>
  );
}

export default App;
