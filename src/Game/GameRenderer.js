import React, {useState} from "react";
import PixiController from "./PixiController";


import styled from "styled-components";

const PixiContainer = styled.div`
    display: inline-block;
`;

const GameRenderer = () => {
    const [pixiController, setPixiController] = useState({});
    const controller = new PixiController(pixiController, setPixiController);

    return <PixiContainer ref={(element) => {controller.updatePixiController(element)}}/>
};

export default GameRenderer;