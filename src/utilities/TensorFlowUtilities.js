import React, {useEffect, useState} from "react";
import * as tf from '@tensorflow/tfjs'
import dogImage from "../assets/images/pKYvW2j.jpg"
import {ImageUtilities} from "../utilities/ImageUtilities";

export const testModel = (image) => {
    tf.loadLayersModel("./my-model.json").then(
        (model) => {
            const shape = [1, 32, 32, 4];
            const newPrediction = tf.mul(tf.tensor(image, shape), 0.003921);
            //newPrediction.mul(0.003921);

            //tf.print(newPrediction);
            //const prediction = tf.randomUniform([1, 32, 32, 4], 0, 1);
            //console.log(model);
            const newTen = model.predict(newPrediction);
            return newTen;

            //tf.print(newTen);
            //console.log("Trained model!");
        }
    );
};