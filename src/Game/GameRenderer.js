import React, {useEffect, useState} from "react";
import PixiController from "./PixiController";
import objects from "./../assets/gameData"

import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {setNotes} from "../Redux/actions";

const PixiContainer = styled.div`
    display: inline-block;

`;

const GameRenderer = () => {
    const [controller, setController] = useState({});
    const notesCollected = useSelector(state => state.game.notesCollected);
    const dispatch = useDispatch();
    useEffect(() => {
        if (dispatch !== undefined) {
            setController(new PixiController(objects, dispatch));
        }
    }, [dispatch]);


    if (!controller.game || !dispatch) {
        return <p>Loading Game...</p>
    }
    return <PixiContainer ref={(element) => {controller.updatePixiController(element)}}/>
};

export default GameRenderer;