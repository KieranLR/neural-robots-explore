import React, {useEffect, useState} from "react";
import * as tf from '@tensorflow/tfjs'
import dogImage from "../assets/images/pKYvW2j.jpg"
import {ImageUtilities} from "../utilities/ImageUtilities";

const images = [
    "../assets/images/pKYvW2j.jpg",
    "../assets/images/rooww.PNG",
    "../assets/images/Row.PNG",
    "../assets/images/Seed Error.PNG",
    "../assets/images/The Stupid Triangle.PNG",
    "../assets/images/Websitelooksweird.PNG"
];


const trainModel = (setTensor) => {
    const model = tf.sequential();

    model.add(tf.layers.flatten({inputShape: [32, 32, 4]}));
    model.add(tf.layers.dense({units: 100, activation: 'relu'}));
    model.add(tf.layers.dense({units: 3}));


    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    const xs = tf.randomUniform([10, 32, 32, 4], 0, 1);
    console.log("input image: " );
    tf.print(xs);
    const ys = tf.randomUniform([10, 3], 0, 1);
    console.log("output tensor");
    tf.print(ys);
    model.fit(xs, ys, {epochs: 50}).then(() => {
        model.save('downloads://my-model').then(() => console.log("I saved the model!"));
        const prediction = tf.randomUniform([1, 32, 32, 4], 0, 1);
        const newTen = model.predict(prediction);
        tf.print(newTen);
        console.log("Trained model!");
        setTensor("The model has been trained");
    });
};

const loadModel = (setTensor) => {
    console.log(dogImage);
    //tf.loadLayersModel("")
}


export const TensorFlowTrain = () => {
    const [out, setOut] = useState("Training Model");

    useEffect(() => {
        trainModel(setOut);
    }, []);

    return <div>{out}</div>
}

export const TensorFlowTest = () => {
    const [tensor, setTensor] = useState("Training the model...");

    useEffect(() => {
        const uploadJSONInput = document.getElementById('upload-json');
        const uploadWeightsInput = document.getElementById('upload-weights');
        console.log(uploadJSONInput.files);
        console.log(uploadWeightsInput.files);
        if (uploadJSONInput.files.length && uploadWeightsInput.files.length) {
            console.log("loading model!");
            console.log(uploadJSONInput);
            tf.loadLayersModel(tf.io.browserFiles(
                [uploadJSONInput.files[0], uploadWeightsInput.files[0]])).then(
                (model) => {
                    const prediction = tf.randomUniform([1, 32, 32, 3], 0, 1);
                    console.log(model);
                    const newTen = model.predict(prediction);
                    tf.print(newTen);
                    console.log("Trained model!");
                    setTensor("The model has been trained");
                }
            );
        }

        console.log("i am rendering!!! lol");
        //loadModel(setTensor);
        //trainModel(setTensor);
    }, [tensor]);
    return <div>
        <input type={"file"} id = "upload-json" onChange={() => setTensor("Loaded Json")}/>
        <input type = "file" id = "upload-weights" onChange={() => setTensor("Loaded Weights")}/>
        <div>{tensor}</div>
    </div>;
};