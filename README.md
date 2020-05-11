This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Welcome to the Neural Robots Project!

Thanks for showing up! Here's a basic rundown of what you'll be doing: 
This is the Javascript game repository. 

### Getting Started

clone the repository at: https://github.com/KieranLR/neural-robots-explore

run "npm start" on your command line. 

This will host a Node.js web server. A browser window to localhost:3000 should show up,
and it should take you to a display of a colorful pixelated plainish background. 

You may see robots moving around, and by moving your cursor, you may be able to uncover some of the
sample notes that I have added in. 

To get started on the training neural network stuff, go ahead and switch over to the "train-test" branch
https://github.com/KieranLR/neural-robots-explore/blob/train-test/README.md
I may move this to it's own branch soon.

### Updates

I will be updating this quite frequently these next few days. There is a lot to improve, and 
I haven't even added in the win condition yet! If you have any suggestions, questions, comments, etc..
Please feel free to let me know. You can dm me on discord if you'd like (Discord tag: KieranL#0016)

### Important Notes

You will want to die if you don't have a reasonable IDE if you do any work in Javascript for this project
If you still have access to a .edu email, you can get access to JetBrains WebStorm, which is probably the best option for 
Javascript IDE's these day. 

If you don't, there is no need to worry. 
Visual Studio Code is free, and is a completely reasonable option for working in Javascript. 
Atom, is a nice open source free IDE you may have used before, that also can work with Javascript. 

## Game Details
This game was made using React js, and Pixi js. 

#### React
React is a js library used for making user interfaces. It was developed by facebook, and is used by thousands of companies today. 
React breaks things down into components. Each component has a render function. If you want to learn more about it, the documentation is pretty good: https://reactjs.org/docs/getting-started.html

Almost every component used in the project willb be stored in src/ReactComponents
https://github.com/KieranLR/neural-robots-explore/tree/master/src/ReactComponents

Checking out those components would be a good place to start if you are interested in changing the interface of the project. 

### Pixi
Pixi is a js library used for making web graphics. It is a little bit more difficult to learn than React, but still reasonable to learn. 
https://github.com/kittykatattack/learningPixi

The bulk of this project is made using Pixi. 
You can find the pixi stuff in src/Game
https://github.com/KieranLR/neural-robots-explore/tree/master/src/Game

### Version Control
If you would like, I can give you permissions to make push to the repository. I may prevent you from pushing to master though. 
Alternatively, you can fork the repository, and merge in updates as I make them. It really depends on what you're most comfortable with.

### Winning
So far, there aren't any of the real notes added in yet. There are 13 placeholders, some of which are absurd to find. Don't worry about finding these.
When you hover over them, they will become visible, and when you click them, it will add them to your list of collected notes. 
This list is stored in localstorage. 
Localstorage is a dictionary of key-values stored in your browser. Try not to clear browser history too while working on the project, as it may reset your progress. 

### Playing the Game
You can move yourself around by dragging. This moves the camera, and you can move it quite fast. Don't get too used to it. I'll be nerfing how fast the camera can move in the future. I might even make you into a character that has to move using the arrow keys or something. 

## Adding Your Neural Network to the robots. 
In my next update to the project, I'll be adding a Button that you can click to add your own model to the project. 
To prevent you having to do this every time you refresh the page, I will be saving the model in localstorage.

If you want to try adding your own model before I make that update, the process is a little bit more finnicky (meaning I hard coded it in a random file haha).
First, make sure your model is saved as .weights.bin, and .json files. This is done by default on the train-test branch. 

Place these files in the public/ folder. You'll see another model called myModel there. 

Go to src/Game/GameObjects/Sprites/RoboDisplay.js
Then, in the init() function, replace ./myModel.json with your .json file. It should automatically will load your weights file. 


 ` tf.loadLayersModel("your-file.json").then(
            (model) => {
                this.model = model;
            }
        );`

## Cheating!
It totally is possible to cheat this project. I don't care too much if you do, since the point of the project is just for you to have fun. I know you won't be satisfied with cheating anyways. 
I'll try to make it kinda difficult to just directly access the file that stores where the notes are stored. Maybe I'll store the file online somewhere, and fetch it in. Right now it's just stored in objects.json. So go ahead and take a sneak peak and see if you can find the notes really far away by cheating. Maybe I'll leave one of the true notes in the same spot!

As for directly editing the javascript game, go ahead! I recommend you at least try to make a few tensorflow models before trying to change the way the game works though. 
I won't be documenting much of the game, so if say you want to modify the robot's base speed, you'd have to figure out how the code works first. 

Editing the game files also will inevitably cause merge conflicts when I update the game. So modify at your own risk.
I can help a little bit if you mess something up. Maybe. 

## Getting Started

More details on getting started can be found at the train-test branch. I wish you the best of luck. 
https://github.com/KieranLR/neural-robots-explore/blob/train-test/README.md
