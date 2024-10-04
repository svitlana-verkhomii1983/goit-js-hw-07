// Отримуємо посилання на форму
const loginForm = document.querySelector('.login-form');

// Додаємо обробник події submit до форми
loginForm.addEventListener('submit', (event) => {
  // Запобігаємо перезавантаженню сторінки при відправленні форми
  event.preventDefault();

  // Отримуємо значення полів форми
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  // Створюємо об'єкт з даними форми
  const formData = {
    email: email,
    password: password,
  };

  // Виводимо об'єкт з даними в консоль
  console.log(formData);

  // Очищуємо значення полів форми
  loginForm.reset();
});