This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Welcome to the Training part of the Project!

### Getting Started
Clone the repository at: https://github.com/KieranLR/neural-robots-explore
checkout into the "train-test-branch" 

This is the branch you will be doing most of your work in

run "npm start" on your command terminal. This will start a node.js server which 
should open up a browser, to localhost:3000

On this browser page, it will train and run a basic neural network using random 32 x 32 images
Then, the browser will attempt to save this model to your downloads. 

## Training The Model

In model.js, there is a function called trainmodel

This function trains a neural network using 50 32x32x4 tensors
These 32x32x4 tensors represent a 32x32 pixel image with an alpha channel. 

A model trained by this function is the one currently in use on the master branch.


### Where to start

I'm gonna do my best not to just drop you off on the deep end here. Here is my recommended path
for approaching this project: 