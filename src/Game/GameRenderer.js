import React, {useState} from "react";
import * as PIXI from "pixi.js";
import dogImage from "../assets/images/pKYvW2j.jpg"
import wash from "../assets/images/George-Washington--129326.jpg"
import hunter from "../assets/images/HunterChillah.png"
import nebula from "../assets/images/Nebula.jpg"
import snapChat from "../assets/images/Snapchat-1217206683[1].jpg"
import squad from "../assets/images/squad picture.png"
import styled from "styled-components";

const PixiContainer = styled.div`
    display: inline-block;
`;

const GameRenderer = () => {
    const [pixiController, setPixiController] = useState({});

    const app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0x1099bb });
    // setup RAF
    var oldTime = Date.now();


    // const [avatar, setAvatar] = useState({});
    const updatePixiController = (element) => {
        // the element is the DOM object that we will use as container to add pixi stage(canvas)
        setPixiController(element);

        //now we are adding the application to the DOM element which we got from the Ref.
        if(pixiController && pixiController.children && pixiController.children.length<=0) {
            pixiController.appendChild(app.view);
            //The setup function is a custom function that we created to add the sprites. We will this below
            setup();
        }
    };

    const setup = () => {
        app.loader
            .add("dog", dogImage)
            .add("wash", wash)
            .add("hunter", hunter)
            .add("nebula", nebula)
            .add("snap", snapChat)
            .add("squad", squad)
            .load(initialize);
    };

    const initialize = () => {
        //We will create a sprite and then add it to stage and (0,0) position
        //setAvatar(new PIXI.Sprite(app.loader.resources["avatar"].texture));
        const avatar = new PIXI.Sprite(app.loader.resources["squad"].texture);

        // Setup the position of the bunny
        avatar.x = app.renderer.width / 2;
        avatar.y = app.renderer.height / 2;
        avatar.scale.x = .5;
        avatar.scale.y = .5;
        // Rotate around the center
        avatar.anchor.x = 0.5;
        avatar.anchor.y = 0.5;
        console.log(avatar);

        app.stage.addChild(avatar);

        // Listen for frame updates
        app.ticker.add(() => {
            // each frame we spin the bunny around a bit
            avatar.rotation += 0.01;
        });
    };

    return <PixiContainer ref={(element) => {updatePixiController(element)}}/>
};

export default GameRenderer;