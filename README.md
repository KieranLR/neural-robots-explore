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

1. Clone the repository. Run npm start on the master branch, and make sure everything compiles, and runs.
2. Switch to the train-test branch. Run npm start, and make sure everything compiles, and runs. 
3. Familiarize yourself with model.js, and the trainmodel function. 
4. Save the model from your browser somewhere. 
5. If you haven't, download a javascript IDE, and familiarize yourself with how it works. If it doesn't support version control by default, try to find a plugin for the IDE that provides it. You probably don't want to do all of your work in the terminal.
6. If you get this far, go ahead and try to put this randomized model into the master branch, in place of the existing myModel files. 
That's all I have ready for you to do now! You can try to make a model that finds notes with what you have now, but there really isn't too much you can do.

Here are the things I do plan on doing to make this project possible: 
* Allowing Robots to **see** the notes. I'll be adding Red to the areas nearby to the notes. This redness will fall off the further away a robot is from the note. This might allow you to train your robots with red images, and non-red images. Red images could output 0 for everything, and non-red outputs 1 for everything. This might result in robots that move really fast, until they find red somewhere.

* Allowing you to spawn Robots with a button. This one may take a little bit more work, due to performance. The game really only can support 2 or 3 robots before slowing down significantly. Right now, I have Robots reading the image from the GPU. Reading memory takes a long time, and doing it every frame, while passing it to the tensorflow model is very slow. (Tensorflow also uses the GPU to process the model, and reads more memory back). But I've got a few ideas to speed things up. I hope to sometime allow for up to 1000 Robots! But we'll see. 

* A function that simulates a robot's lifetime, and returns output based on how it did. This one will likey be the most useful to you. 
This function will allow you to specify a time, and a tensorflow model, and will run a robot (Won't display anything to the screen) for that much time, and return an object similar in structure to this: 

  `{timeAlive: Float
    
    distanceTravelled: Float
    
    notesFound: Integer
    
    colorDistribution: {red: Percent, blue: Percent, green: Percent, ...} //Has a list of the percentage of time the robot spent on these colors
  }`

  This will allow you to do all sorts of fantastic things. My recommendation is to use a genetic algorithm to evolve your neural network. 
For example, make 100 randomly weighted neural networks. Run each of them through this function, and then reproduce say only the ones who travelled the most distance. This might result in robots who just blast forwards without any thought. Or you could only reproduce the ones who spent most of their time on the color Red. Who knows. I plan on outputting more things than what is listed for this function. Let me know what kinds of things you could use from this function, and I'll see if I can give them to you. 

* In-game training. This one might take a while, but it is possible. It would allow you to train your model live as it is playing in the browser. So say you spawn in 100 robots, and watch them scramble around the screen. Given a fitness function passed in through javascript, you could have these robots reproduce, and die live while you're playing the game. You could watch them get smarter as you play. This would probably be the last thing I add to the project, but it certainly would be badass. 

## Conclusion

Regardless of how well this actually works, I hope you have a fantastic time working on it. At the very least, you'll learn a little bit about one of the most used languages in the world, and find out a little bit of what it's like being a web developer these days.
Maybe you can freshen up your machine learning skills as well. 
I am absolutely open to any suggestions you have for improving the project. If you have any features you'd like, be sure to let me know. 
I'd love to answer any questions you have, and I probably can assist you if you get stuck. 
I have not done too much testing on this project yet, so I don't even know if it's possible yet. But isn't that what makes it so appealing? Will you end up with intelligent robots that can navigate to the notes, or will you have to brute force it by spawning 1000's of robots everywhere? Good Luck to you, and Happy Birthday! 











