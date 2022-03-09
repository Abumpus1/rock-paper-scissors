![Screen Shot 2022-03-08 at 10 51 09 AM](https://user-images.githubusercontent.com/3982238/157296425-125c663d-cc10-4f3f-8e8c-b9b2ad3f118d.png)

## Wood, Water, Fire
This solo project is a website that allows the user to play a variation of rock, paper, scissors against a computer.

## Technologies
- JavaScript
- HTML
- CSS

## Features
- You are able to select either of two game modes, and after you make a selection, the outcome of the round will display briefly, showing who won, and both player's selections.

![Choose Game](https://user-images.githubusercontent.com/3982238/157298795-19b41ef7-c713-44c5-8d3f-2535940d3f19.gif)

- The wins will store locally, and there is a button to reset all wins if desired.

![reset score](https://user-images.githubusercontent.com/3982238/157299600-cbf6e85f-3724-41ae-998c-d1467ba2250e.gif)

- You are able to swap your icon between 4 options, and the one you choose will be the one displayed if you win.

![change icon](https://user-images.githubusercontent.com/3982238/157300208-a54ac251-a84e-4a64-a9e2-31db25c1f98d.gif)

## Set Up
You can either access the deploy link [here](https://abumpus1.github.io/rock-paper-scissors/), or...
1. Fork this repo
2. Clone this repo down to your local machine
3. View this project in browser by typing `open index.html` into your terminal

## Project Specs
The project spec can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html), I had a week to complete this project.

## Goals of the project
### Learning Goals
Solidify and demonstrate your understanding of:
- DRY JavaScript
- event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
### Architecture
- A player.js file that contains a Player class.
- A game.js file that contains a Game class, which instantiates two Player instances, and functions as my data model.
- A main.js file that contains all DOM related JavaScript
### Challenges and Takeaways
- My biggest challenge for this project was coming up with a way to compare the player's choice to the computer's choice without using a large amount of if statements. I feel that I ended up with a decent solution that involved comparing object properties.
- This was the first time I've tested getting full functionality of the data model before trying any DOM interaction, and while it was tricky at first, I feel this prevented a lot of challenges down the line, as the base game functionality was already there and I did not have to mess with entangled code as much as I may have otherwise needed to.
