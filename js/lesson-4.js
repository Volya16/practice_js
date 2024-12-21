// 1. Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement


// const list = document.createElement('ul');
// const addBtn = document.createElement('button');
// const removeBtn = document.createElement("button");
// const input = document.createElement("input");

// document.body.append(input, addBtn, removeBtn, list);

// addBtn.textContent = 'Add';
// removeBtn.textContent = 'Remove';

// addBtn.addEventListener('click', (event) => {
//     const inputValue = input.value.trim();
//     if (inputValue === "") {
//         return;
// }
//     const listItem = document.createElement('li');
//     listItem.textContent = inputValue;
//     list.append(listItem);

//     input.value = "";

//     if (list.children.length % 2 === 0) {
//         listItem.style.backgroundColor = 'yellow';
//     } else {
//         listItem.style.backgroundColor = "blue";
//     }
// });

// removeBtn.addEventListener("click", (event) => {
//     const lastListItem = list.lastElementChild;
//     if (!lastListItem) {
//         return ;
//     }
//     lastListItem.remove();
// });


// 2. Створити розмітку на основі масива даних, де у кожного елемента списку
// буде вказано ім'я, кількість лайків і перелічені теги
// в index.html додайте список ul.stats, в який буде рендеритись цей список
// *властивість gender використай для додавання відповідного класу елементу списка

// const tweets = [
//   { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
//   {
//     id: "001",
//     name: "Kate",
//     gender: "female",
//     likes: 2,
//     tags: ["html", "css"],
//   },
// {
//     id: "002",
//     name: "Maria",
//     gender: "female",
//     likes: 17,
//     tags: ["html", "js", "nodejs"],
//   },
//   {
//     id: "003",
//     name: "Borys",
//     gender: "male",
//     likes: 8,
//     tags: ["css", "react"],
//   },
// {
//     id: "004",
//     name: "Jhon",
//     gender: "male",
//     likes: 10,
//     tags: ["js", "nodejs", "react"],
//   },
//   {
//     id: "005",
//     name: "Anna",
//     gender: "female",
//     likes: 3,
//     tags: ["js", "nodejs", "react"],
//   },
// {
//     id: "006",
//     name: "Jhon",
//     gender: "male",
//     likes: 0,
//     tags: ["js", "nodejs", "react"],
//   },
// ];


// const list = document.querySelector(".stats");


// const listItem = tweets.map(
//   ({ name, likes, tags, gender }) => `<li class="stats-item ${gender}">
//         <p class="stats-name">${name}</p>
//         <p class="stats-likes">${likes}</p>
//         <p class="stats-stats">${tags}</p>
//       </li>`
// ).join("");

// list.innerHTML = listItem; 


