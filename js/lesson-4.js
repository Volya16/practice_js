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

// 3. Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

// const btnEl = document.querySelector("#double");
// const listItemsEls = document.querySelectorAll(".listItem");

// btnEl.addEventListener("click", () => {
//   listItemsEls.forEach((el) => (el.textContent *= 2));
// });

// 4.
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const tbodyEl = document.querySelector("#productTable tbody");
// const prodDetailEl = document.querySelector("#productDetails");

// tbodyEl.addEventListener("click", (evt) => {
//   if (evt.target.nodeName !== "TD") {
//     return;
//   }

//   const [product, price] = evt.target.parentElement.children;
//   prodDetailEl.textContent = ` Ви вибрали ${product.textContent.toLowerCase()} за ${price.textContent.toLowerCase()}.`;
// });

// 5.
// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.

// const listBtnEls = document.querySelector(".statList");
// const resBtnEl = document.querySelector("#resultButton");
// const resDivEl = document.querySelector("#resultSection");

// let result = 0;
// let objResStatistic = {};

// listBtnEls.addEventListener("click", (evt) => {
//   if (!evt.target.classList.contains("calcButton")) {
//     return;
//   }
//   result += Number(evt.target.dataset.number);

//   const key = evt.target.textContent;

//   objResStatistic[key]
//     ? (objResStatistic[key] += 1)
//     : (objResStatistic[key] = 1);
// });

// resBtnEl.addEventListener("click", () => {
//   let resRow = `Total: ${result} <br/>`;

//   const res = Object.entries(objResStatistic);

//   for (const [key, value] of res) {
//     resRow += ` ${key} - ${value} <br/>`;
//   }

//   resDivEl.innerHTML = resRow;

//   objResStatistic = {};
//   result = 0;
// });

// 6. Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)"
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const getStyles = () => {
//   randomEl.style.cssText = forms[randomither(forms.length)];
//   randomEl.style.backgroundColor = getRandomHexColor();
//   randomEl.style.position = "absolute";
//   randomEl.style.top = `${randomither(90)}%`;
//   randomEl.style.left = `${randomither(90)}%`;
// };

// const randomEl = document.createElement("div");

// getStyles();

// randomEl.addEventListener("click", getStyles);

// document.querySelector("body").appendChild(randomEl);
