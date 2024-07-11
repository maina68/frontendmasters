// Initialize game state variables
let currentGuess = '';
const maxGuessLength = 5;
const maxAttempts = 6;
let attempt = 0;

// Select all key elements
const keys = document.querySelectorAll('.key');
const wordRows = document.querySelectorAll('.word-row');

// Add event listeners to keys
keys.forEach(key => {
    key.addEventListener('click', function() {
        const keyValue = this.textContent;

        if (keyValue === 'Backspace') {
            // Remove the last character from the current guess
            currentGuess = currentGuess.slice(0, -1);
        } else if (keyValue === 'Delete') {
            // Clear the current guess
            currentGuess = '';
        }
         else if (keyValue === 'Enter') {
            // Submit the current guess
            if (currentGuess.length === maxGuessLength) {
                submitGuess();
            }
        } else if (currentGuess.length < maxGuessLength) {
            // Add character to the current guess
            currentGuess += keyValue;
        }
        updateDisplay();
    });
});

function updateDisplay() {
    // Clear the current row
    const currentRow = wordRows[attempt].querySelectorAll('.letter-box');
    currentRow.forEach(box => box.textContent = '');

    // Update the current row based on the current guess
    for (let i = 0; i < currentGuess.length; i++) {
        currentRow[i].textContent = currentGuess[i];
    }
}

function submitGuess() {
    // Check if the guess is correct (placeholder logic)
    console.log(`Submitted guess: ${currentGuess}`);

    // Increment attempt counter and reset current guess
    attempt++;
    currentGuess = '';

    // Check if game is over
    if (attempt === maxAttempts) {
        console.log('Game Over');
        // Optionally, disable keyboard input here
    }
}

// Optional: Implement additional game logic, such as checking the guess against a word list