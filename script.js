const wordDisplay = document.getElementById('word-display');
const wordInput = document.getElementById('word-input');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const restartButton = document.getElementById('restart-button');

const words = [
  'javascript', 'coding', 'game', 'function', 'variable', 'constant', 'html', 'css', 
  'frontend', 'backend', 'algorithm', 'debugging', 'framework', 'library', 'developer'
];

let score = 0;
let timeLeft = 60;
let currentWord = '';
let timer;

// Generate a random word
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Display a new word
function setNewWord() {
  currentWord = getRandomWord();
  wordDisplay.textContent = currentWord;
}

// Start the game
function startGame() {
  score = 0;
  timeLeft = 60;
  scoreDisplay.textContent = `Score: ${score}`;
  timerDisplay.textContent = `Time Left: ${timeLeft}`;
  wordInput.value = '';
  setNewWord();
  wordInput.focus();

  restartButton.classList.add('hidden');

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}`;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

// Handle input
function handleInput() {
  if (wordInput.value === currentWord) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    wordInput.value = '';
    setNewWord();
  }
}

// End the game
function endGame() {
  clearInterval(timer);
  wordDisplay.textContent = 'Game Over!';
  wordInput.value = '';
  wordInput.blur();
  restartButton.classList.remove('hidden');
}

// Restart the game
restartButton.addEventListener('click', startGame);

// Event listeners
wordInput.addEventListener('input', handleInput);

// Start the game on page load
startGame();
