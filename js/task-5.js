// Функція для генерації випадкового кольору в hex-форматі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Отримуємо посилання на необхідні елементи
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.querySelector('body');

// Додаємо обробник події click до кнопки
changeColorButton.addEventListener('click', () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();
  
  // Змінюємо колір фону body
  body.style.backgroundColor = randomColor;
  
  // Встановлюємо значення кольору в span.color
  colorSpan.textContent = randomColor;
});