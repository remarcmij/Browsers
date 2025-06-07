# Prep Exercise - Match Game (Sticks Game)

## Overview

Complete the JavaScript code for a two-player sticks game (also known as Nim). The game starts with 20 sticks, and players take turns removing 1, 2, or 3 sticks. The player who removes the last stick wins!

## Game Rules

- The game starts with 20 sticks
- Two players take turns
- On each turn, a player must remove 1, 2, or 3 sticks
- The player who removes the last stick wins the game

## Files

- `index.html` - The game interface (complete)
- `main.css` - Styling for the game (complete)
- `main.js` - Game logic (needs completion)

## Your Task

You need to complete the JavaScript code in `main.js` by replacing the `@TODO` comments with working code. The starter code provides:

1. **Constants and variables** - All IDs and game state variables are defined
2. **`displayNSticks()`** - Function to display sticks on screen (complete)
3. **Game initialization** - Starting setup (complete)

### Functions to Complete

#### 1. `updateToTheNextPlayer()`

This function should:

- Update the visual display of sticks to match the current `amountStick` variable
- Switch the active player (toggle the `ACTIVE_PLAYER_CLASS`)
- Check if the game is over (when `amountStick` reaches 0) and call `endTheGame()` with the current player as winner

#### 2. `endTheGame(winnerPlayerId)`

This function should:

- Add the `WINNER_PLAYER_CLASS` to the winning player
- Disable all buttons so no more moves can be made

#### 3. Button Event Listeners

You need to add event listeners to the three buttons that:

- Remove the corresponding number of sticks (1, 2, or 3) from `amountStick`
- Ensure players can't remove more sticks than are available
- Call `updateToTheNextPlayer()` after each valid move

## Hints

- Use `document.getElementById()` to select elements
- Use `addEventListener()` to handle button clicks
- The `amountStick` variable tracks how many sticks remain
- Use `classList.toggle()` to switch between players
- Clear the sticks container before redisplaying: `document.getElementById(STICKS_ID).innerHTML = ''`

## Testing Your Solution

1. Open `index.html` in a browser
2. Verify that:
   - Players can click buttons to remove 1, 2, or 3 sticks
   - The visual display updates correctly
   - Players alternate turns (highlighted in purple)
   - The game ends when the last stick is removed
   - The winner is highlighted in green
   - Buttons become disabled after the game ends

## Learning Objectives

- DOM manipulation (`getElementById`, `classList`, `innerHTML`)
- Event handling (`addEventListener`)
- Conditional logic and game state management
- Function calls and parameter passing
