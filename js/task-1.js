const categoriesList = document.querySelector('#categories');

// Отримуємо всі елементи li.item в ul#categories
const categoriesItems = categoriesList.querySelectorAll('.item');

// Виводимо в консоль кількість категорій
console.log(`Number of categories: ${categoriesItems.length}`);

// Проходимося по кожному елементу li.item
categoriesItems.forEach(item => {
  // Отримуємо заголовок категорії (тег <h2>)
  const categoryTitle = item.querySelector('h2').textContent;

  // Отримуємо кількість елементів у категорії (всі <li> в вкладеному списку)
  const categoryElements = item.querySelectorAll('ul li').length;

  // Виводимо в консоль назву категорії і кількість елементів у ній
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});