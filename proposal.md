# Word Unscramble

Given a set of letters, the player will try to find as many words as possible in the alotted time.

## Functionality & MVP

Players will be able to:

- [ ] Input letters via the keyboard
- [ ] Press enter to submit words
- [ ] Correct submitted words communicated to the player via effects
- [ ] Incorrect or invalid submissions will be communicated via effects
- [ ] Start, Pause, and Continue the game via the space bar

Additionally the project will include
- [ ] Production ReadMe
- [ ] Game instructions

## Wireframes

Visual inspiration from [Bonza](https://play.google.com/store/apps/details?id=air.au.com.minimega.bonza)

Layout inspiration from [Word Unscramble]()

![Alt text](https://github.com/fafafariba/fafafariba.github.io/blob/master/assets/splash_wireframe.png?raw=true "Splash")

![Alt text](https://github.com/fafafariba/fafafariba.github.io/blob/master/assets/splash_wireframe.png?raw=true "Game")

## Architecture & Technologies

### `word.js` file 
* Select random 5 letter word
* Determine combinations
* Parse through dictionaries to find valid words

### `game.js` file
* Instantiates game
* Run and track timer
* Validates player words
* Tracks correctly guessed words
* Render to DOM

### `player.js` file
* Formats player input
* Delegates to game for validating

### `main.css` file
* Styling
  * Color scheme
  * Font
  * Letter tiles
  * Animations
  * Flashing of correct/incorrect words
  * Sound effects


## Technologies

This game will use Vanilla Javascript, Webpack for bundling, and Babel for converint ES6 to ES5 for browswers.

It will also utilize the [Scrabble word game dictionary](https://www.wordgamedictionary.com/word-lists/) as a reference.

## Implementation Timeline

### Day 1

- [ ] Format dictionaries
- [ ] word.js file 
- [ ] player.js file
  

### Day 2
- [ ] game.js file 
- [ ] keyboard controls 

### Day 3

- [ ] Animations

### Day 4

- [ ] Styling

## Bonus Features

* Scoring
* A 'shuffle' letters button
* Multi-levels featuring 6 letter and 7 letter words


