// HTML elements
const rgbDisplay = document.getElementById("rgbValue");
const optionsContainer = document.getElementById("colorOptions");
const scoreText = document.getElementById("score");
const livesText = document.getElementById("lives");
const feedback = document.getElementById("feedback");
const playAgainBtn = document.getElementById("playAgain");

// Game state
let score = 0;
let lives = 3;
let correctColor = "";

// Start game on load
generateRound();

/**
 * Generate a new round with new colors
 */
function generateRound() {
  feedback.textContent = "";
  playAgainBtn.classList.add("hidden");
  optionsContainer.innerHTML = "";

  // Generate correct RGB color
  correctColor = randomRGB();
  rgbDisplay.textContent = correctColor;

  // Generate options
  const correctRGB = parseRGB(correctColor);
  const colors = [correctColor];

  while (colors.length < 3) {
    const newColor = randomRGB();
    if (!colors.includes(newColor)) colors.push(newColor);
  }

  // Shuffle colors randomly
  colors.sort(() => Math.random() - 0.5);

  // Create option buttons
  colors.forEach(color => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.style.backgroundColor = color;
    div.addEventListener("click", () => handleGuess(color));
    optionsContainer.appendChild(div);
  });
}

/**
 * Handle the color guess
 */
function handleGuess(selected) {
  if (selected === correctColor) {
    feedback.textContent = "✅ Correct!";
    score += 1;
    scoreText.textContent = `Score: ${score}`;
    setTimeout(generateRound, 1000);
  } else {
    feedback.textContent = "❌ Wrong!";
    lives -= 1;
    livesText.textContent = `Lives: ${lives}`;
    if (lives === 0) {
      feedback.textContent = `Game Over! Final Score: ${score}`;
      playAgainBtn.classList.remove("hidden");
    }
  }
}

/**
 * Reset and play again
 */
playAgainBtn.addEventListener("click", () => {
  score = 0;
  lives = 3;
  scoreText.textContent = `Score: ${score}`;
  livesText.textContent = `Lives: ${lives}`;
  generateRound();
});

/**
 * Generate a random RGB string
 */
function randomRGB() {
  const r = rand(0, 255);
  const g = rand(0, 255);
  const b = rand(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Generate a random number between min and max
 */
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Parse rgb() string into array [r,g,b]
 */
function parseRGB(rgb) {
  return rgb.match(/\d+/g).map(Number);
}
