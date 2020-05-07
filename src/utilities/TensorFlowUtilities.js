import React, {useEffect, useState} from "react";
import * as tf from '@tensorflow/tfjs'
import dogImage from "../assets/images/pKYvW2j.jpg"
import {ImageUtilities} from "../utilities/ImageUtilities";

export const testModel = (image) => {
    tf.loadLayersModel("./my-model.json").then(
        (model) => {
            console.log(image.length);
            console.log(image);
            const shape = [1, 32, 32, 3];
            const newPredictino = tf.tensor(image, shape);
            const prediction = tf.randomUniform([1, 32, 32, 3], 0, 1);
            console.log(model);
            const newTen = model.predict(prediction);
            tf.print(newTen);
            console.log("Trained model!");
        }
    );
};