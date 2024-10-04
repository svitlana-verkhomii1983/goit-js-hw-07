function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Отримуємо посилання на необхідні елементи
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

// Додаємо обробник події click до кнопки Create
createButton.addEventListener('click', () => {
  const amount = Number(input.value);

  // Перевірка, чи введене число знаходиться в межах від 1 до 100
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Очищення значення input
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

// Додаємо обробник події click до кнопки Destroy
destroyButton.addEventListener('click', destroyBoxes);

// Функція для створення колекції div елементів
function createBoxes(amount) {
  // Очищення попередньої колекції
  boxes.innerHTML = '';
  
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }

  boxes.appendChild(fragment);
}

// Функція для очищення колекції div елементів
function destroyBoxes() {
  boxes.innerHTML = '';
}