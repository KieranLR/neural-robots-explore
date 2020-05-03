import React, {useState} from "react";
import * as PIXI from "pixi.js";
import dogImage from "../assets/images/pKYvW2j.jpg"
import wash from "../assets/images/George-Washington--129326.jpg"
import hunter from "../assets/images/HunterChillah.png"
import nebula from "../assets/images/Nebula.jpg"
import snapChat from "../assets/images/Snapchat-1217206683[1].jpg"
import squad from "../assets/images/squad picture.png"
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