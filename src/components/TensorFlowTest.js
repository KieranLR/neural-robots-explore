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

    model.add(tf.layers.flatten({inputShape: [32, 32, 3]}));
    model.add(tf.layers.dense({units: 100, activation: 'relu'}));
    model.add(tf.layers.dense({units: 8}));


    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    const xs = tf.randomUniform([10, 32, 32, 3], 0, 1);
    console.log("input image: " );
    tf.print(xs);
    const ys = tf.randomUniform([10, 8], 0, 1);
    console.log("output tensor");
    tf.print(ys);
    model.fit(xs, ys, {epochs: 50}).then(() => {
        model.save('downloads://my-model').then(() => console.log("I saved the model!"));
        const prediction = tf.randomUniform([1, 32, 32, 3], 0, 1);
        const newTen = model.predict(prediction);
        tf.print(newTen);
        console.log("Trained model!");
        setTensor("The model has been trained");
    });
}


const TensorFlowTest = () => {
    const [tensor, setTensor] = useState("Training the model...");
    const [ran, setRan] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageStarted, setImageStarted] = useState(false);
    const [image, setImage] = useState(new Image());

    useEffect(() => {
        console.log("i am rendering!!! lol");
        trainModel(setTensor);
    }, []);

    return <div>{tensor}</div>
};

export default TensorFlowTest;