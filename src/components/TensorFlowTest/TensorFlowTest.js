import React, {useEffect, useState} from "react";
import * as tf from '@tensorflow/tfjs'
import {trainModel} from "../../ModelTraining/model";

//React Component, don't worry too much about this yet.
export const TensorFlowTrain = () => {
    const [text, setText] = useState("Training Model");

    //Basically, run trainModel once as soon as the page loads.
    useEffect(() => {
        trainModel(setText);
    }, []);

    //Display a message
    return <div>{text}</div>
};