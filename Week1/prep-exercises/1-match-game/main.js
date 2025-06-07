// IDs
const STICKS_ID = 'sticks'
const BUTTON_ONE_ID = 'button_one'
const BUTTON_TWO_ID = 'button_two'
const BUTTON_THREE_ID = 'button_three'
const PLAYERS_ID = 'players'
const PLAYER_ONE_ID = 'player_one'
const PLAYER_TWO_ID = 'player_two'

const ACTIVE_PLAYER_CLASS = 'active_player'
const WINNER_PLAYER_CLASS = 'winner'

const amountStartStick = 20
let amountStick = amountStartStick

const displayNSticks = amount => {
  for (let i = 0; i < amount; i++) {
    const stick = document.createElement('span');
    stick.className = 'stick';
    document.getElementById(STICKS_ID).appendChild(stick);
  }
}

const updateToTheNextPlayer = () => {
    // Clear current sticks display
    document.getElementById(STICKS_ID).innerHTML = '';
    
    // Display remaining sticks
    displayNSticks(amountStick);
    
    // Check if game is over (no sticks left)
    if (amountStick === 0) {
        // Current player wins (they took the last stick)
        const currentPlayer = document.querySelector(`.${ACTIVE_PLAYER_CLASS}`);
        endTheGame(currentPlayer.id);
        return;
    }
    
    // Switch to next player
    const playerOne = document.getElementById(PLAYER_ONE_ID);
    const playerTwo = document.getElementById(PLAYER_TWO_ID);
    
    playerOne.classList.toggle(ACTIVE_PLAYER_CLASS);
    playerTwo.classList.toggle(ACTIVE_PLAYER_CLASS);
}

const endTheGame = winnerPlayerId => {
    // Show the winner by adding winner class
    document.getElementById(winnerPlayerId).classList.add(WINNER_PLAYER_CLASS);
    
    // Disable all buttons so players can't continue playing
    document.getElementById(BUTTON_ONE_ID).disabled = true;
    document.getElementById(BUTTON_TWO_ID).disabled = true;
    document.getElementById(BUTTON_THREE_ID).disabled = true;
    
    // Optional: Add a congratulations message
    const winnerName = document.getElementById(winnerPlayerId).textContent;
    alert(`🎉 ${winnerName} wins the game! 🎉`);
}

// Button click handlers
const handleButtonClick = (sticksToRemove) => {
    // Check if we can remove the requested amount
    if (sticksToRemove > amountStick) {
        alert(`You can't remove ${sticksToRemove} sticks. Only ${amountStick} left!`);
        return;
    }
    
    // Remove the sticks
    amountStick -= sticksToRemove;
    
    // Update the game for next player
    updateToTheNextPlayer();
};

// Add event listeners to buttons
document.getElementById(BUTTON_ONE_ID).addEventListener('click', () => handleButtonClick(1));
document.getElementById(BUTTON_TWO_ID).addEventListener('click', () => handleButtonClick(2));
document.getElementById(BUTTON_THREE_ID).addEventListener('click', () => handleButtonClick(3));

// ========== Start the game
// Display the start sticks
displayNSticks(amountStartStick)

// Set the first player as the active one
document.getElementById(PLAYER_ONE_ID).classList.toggle(ACTIVE_PLAYER_CLASS)
