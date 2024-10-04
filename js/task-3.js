// Отримуємо посилання на елементи input та span
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо обробник події input до елемента nameInput
nameInput.addEventListener('input', () => {
  // Очищаємо значення інпуту від пробілів по краях
  const trimmedValue = nameInput.value.trim();

  // Якщо інпут порожній або містить лише пробіли, встановлюємо "Anonymous"
  if (trimmedValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    // Інакше встановлюємо поточне значення інпуту
    nameOutput.textContent = trimmedValue;
  }
});