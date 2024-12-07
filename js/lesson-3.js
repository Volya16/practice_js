// 1. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }
// callAction(product.showPrice.bind(product));


// 2. Функція askPassword приймає 2 колбека і викликає 1 із них в залежності від password
// Створи об 'єкт user з властивостю name і двома методами
// loginOk() і loginFail()
// ці методи виводять в консоль повідомлення у форматі
// "<name> logged in" та "<name> failed to log in" відповідно
// зроби виклик функції askPassword, прив'язавши в якості аргументів методи об'єкта

// function askPassword(ok, fail) {
//   let password = prompt("Password?");
//   if (password === "admin") ok();
//   else fail();
// }

// const user = {
//     name: "Poly",

// loginOk() {
// console.log(`${this.name} logged in`);
// },
//     loginFail() {
//     console.log(`${this.name} failed to log in`);
// }
// }

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user))



// 3.Task
// 1. Створити функцію getNames(array), яка приймає масив об'єктів
// і повертає масив імен усіх користувачів (поле name).
// *зробити функцію універсальною getRandomValues(array, prop), щоб вона повертала
// масив значень будь-якої заданої властивості
// **з перевіркою наявності такої властивості:
// якщо властивості немає - повертати 'Sory, no such property in array!'



const tweets = [
  { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
  {
    id: "001",
    name: "Kate",
    gender: "female",
    likes: 2,
    tags: ["html", "css"],
  },
  {
    id: "002",
    name: "Maria",
    gender: "female",
    likes: 17,
    tags: ["html", "js", "nodejs"],
  },
  {
    id: "003",
    name: "Borys",
    gender: "male",
    likes: 8,
    tags: ["css", "react"],
  },
  {
    id: "004",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "005",
    name: "Anna",
    gender: "female",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "006",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
];
// const getNames = array => array.map(user => user.name);
// // console.log(getNames(tweets));

// const getRandomValues = (array, prop) => {
//     if (!array[0][prop]) {
//         return "Sory, no such property in array!";
//     }
//     return array.map(user => user[prop])
// };

// console.log(getRandomValues(tweets, "id"));


// 2. Напишіть функцію getUsersWithJs(array), яка приймає масив об'єктів і повертає масив тільки тих користувачів,
// у кого є тег "js" (властивість tags)

// const getUsersWithJs = array => array.filter(user => user.tags.includes("js"));
// console.log(getUsersWithJs(tweets));


// 3. Написати функцію getUsersWithGender(array, gender), яка приймає масив і стать
// і повертає масив імен користувачів по цій статі (властивість gender)

// const getUsersWithGender = (array, gender) => array.filter(user => user.gender === gender).map(user => user.name)

// const getUsersWithGender = (array, gender) => array.reduce((userName, user) => {
//     if (user.gender === gender) {
//         userName.push(user.name)
//     }
//     return userName;
// } , []);

// const getUsersWithGender = (array, gender) =>
//   array.reduce((userName, user) =>  user.gender === gender ? [...userName, user.name] : userName, []);

// console.log(getUsersWithGender(tweets, "male"));


// 4. Написати функцію getSortedUniqueTags(array), яка приймає масив
// і повертає масив всіх тегів усіх користувачів (поле tags), при цьому не повинно бути
// повторювань тегів і вони мають бути відсортовані в алфавітному порядку.
// Використай ланцюжок методів.


// const getSortedUniqueTags = array => array.flatMap(user => user.tags).filter((tag, index, array) => array.indexOf(tag) === index).toSorted((firstTag, secondTag) => firstTag.localeCompare(secondTag));

// console.log(getSortedUniqueTags(tweets));


// 4.Task
// 1. Створи клас User для створення користувача з такими властивостями:
// a. userName - ім'я, рядок
// b. age - вік, число
// c. numberOfPosts - кількість постів, число
// d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
// Додай метод getInfo(), який повертає рядок:
// `Користувачеві <name> <age> років і в нього <posts> публікацій.`
// Додай метод updateNumberOfPosts(amount), який оновлює кількість постів юзера
// де amount - це число, кількість постів, що має додаватись до вже існуючих у властивості numbersOfPost


class User {
    constructor({ userName, age, numberOfPosts }) {
        this.name = userName;
        this.age = age;
        this.numberOfPosts = numberOfPosts;
    }
    
    getInfo() {
        return `Користувачеві ${this.name} ${this.age} років і в нього ${this.numberOfPosts} публікацій.`;
    }

    updateNumberOfPosts(amount) {
        this.numberOfPosts += amount;
    }
}

const user = new User({
    userName: "Oleg",
    age: 36,
    numberOfPosts: 4,
});

console.log(user);
userupdateNumberOfPosts(2);
console.log(user.getInfo());
