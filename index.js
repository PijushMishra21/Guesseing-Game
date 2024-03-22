document.addEventListener('DOMContentLoaded', function() {
 const guessInput = document.getElementById('guessInput');
 const guessButton = document.getElementById('guessButton');
 const resetButton = document.getElementById('resetButton');
 const message = document.getElementById('message');
 const attemptsDisplay = document.getElementById('attempts');

 let randomNumber = generateRandomNumber();
 let attempts = 0;
 let maxAttempts = 5;

 function generateRandomNumber() {
   return Math.floor(Math.random() * 10) + 1;
 }

 function checkGuess() {
   const guess = parseInt(guessInput.value);

   if (isNaN(guess) || guess < 1 || guess > 10) {
     message.textContent = 'Please enter a valid number between 1 and 10.';
     return;
   }

   attempts++;

   if (guess === randomNumber) {
     message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
     message.classList.add('win-animation');
     gameOver();
   } else if (guess < randomNumber) {
     message.textContent = 'Opps! Try another number.';
   } else {
     message.textContent = ' Opps! Try another number.';
   }

   attemptsDisplay.textContent = `Attempts: ${attempts}`;

   if (attempts === maxAttempts) {
     message.textContent = `Game over! The number was ${randomNumber}.`;
     gameOver();
   }
 }

 function gameOver() {
   guessInput.disabled = true;
   guessButton.disabled = true;
 }

 function resetGame() {
   randomNumber = generateRandomNumber();
   attempts = 0;
   guessInput.value = '';
   message.textContent = '';
   attemptsDisplay.textContent = '';
   guessInput.disabled = false;
   guessButton.disabled = false;
   message.classList.remove('win-animation');
 }

 guessButton.addEventListener('click', checkGuess);
 resetButton.addEventListener('click', resetGame);
});
