import * as tf from "@tensorflow/tfjs";

export const trainModel = (setDisplayText) => {
    const model = tf.sequential();

    //Input shape of a 32 x 32 image, with an alpha channel
    model.add(tf.layers.flatten({inputShape: [32, 32, 4]}));
    //hidden layer with 100 weights
    model.add(tf.layers.dense({units: 100, activation: 'relu'}));
    //Output layer, outputting 3 values:
    //Left Thruster, Forward Thruster, and Right Thruster
    model.add(tf.layers.dense({units: 3}));

    //Add loss function and optimizer
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    //Add some randomized input data
    const xs = tf.randomUniform([10, 32, 32, 4], 0, 1);

    console.log("input image: " );
    tf.print(xs);
    const ys = tf.randomUniform([10, 3], 0, 1);
    console.log("output tensor");
    tf.print(ys);

    //Train the model using the random input data
    model.fit(xs, ys, {epochs: 50}).then(() => {
        //Save the model to the users browser
        model.save('downloads://my-model').then(() => console.log("I saved the model!"));

        //Put in a test image, and get back robot instructions.
        const test = tf.randomUniform([1, 32, 32, 4], 0, 1);
        const robotInstructions = model.predict(test);
        console.log("Testing the model with some data, here's the resulting robot instructions");
        tf.print(robotInstructions);
        console.log("Trained model!");

        //Set the data displayed in the browser
        setDisplayText("The model has been trained");
    });
};