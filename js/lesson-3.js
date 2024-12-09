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
    tags: ["html", "css"]
  },
  {
    id: "002",
    name: "Maria",
    gender: "female",
    likes: 17,
    tags: ["html", "js", "nodejs"]
  },
  {
    id: "003",
    name: "Borys",
    gender: "male",
    likes: 8,
    tags: ["css", "react"]
  },
  {
    id: "004",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"]
  },
  {
    id: "005",
    name: "Anna",
    gender: "female",
    likes: 0,
    tags: ["js", "nodejs", "react"]
  },
  {
    id: "006",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"]
  }
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
//   array.reduce(
//     (userName, user) =>
//       user.gender === gender ? [...userName, user.name] : userName,
//     []
//   );

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
  numberOfPosts: 4
});

// console.log(user);
// userupdateNumberOfPosts(2);
// console.log(user.getInfo());

//  2. Напиши класс Client який створює об'єкт
// із властивостями login, email
// Об'яви приватні властивості #login і #email,
// доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

class Client {
  #login;
  #email;
  constructor(login, email) {
    this.#email = email;
    this.#login = login;
  }
  get getClientData() {
    return {
      email: this.#email,
      login: this.#login
    };
  }
  set changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

// const client1 = new Client("client1", "cl1@mail.com");
// console.log("client1:", client1);
// console.log(client1.getClientData);
// client1.changeEmail = "new@mail.com";
// console.log(client1.getClientData);

// 3. Напиши класс Notes який управляє коллекцієй нотаток у
// властивості items.
// Нотатка це  об'єкт з властивостями text, priority
// Додай класу статичну властивість Priority,
// в якій буде зберігатись об'єкт з пріорітетами ("high", "middle", "low").
// Додай методи getNotes(), addNote(note), removeNote(noteText)
// updatePriority(noteText, newPriority)

class Notes {
  static Priority = { HIGH: "high", MIDDLE: "middle", LOW: "low" };
  constructor() {
    this.items = [];
  }
  getNotes() {
    return this.items;
  }
  addNote(note) {
    this.items.push(note);
  }
  removeNote(noteText) {
    this.items = this.items.filter((el) => el.text !== noteText);
  }
  updatePriority(noteText, newPriority) {
    // this.items.map((el) =>
    //   el.text === noteText ? { ...el, priority: newPriority } : el
    // );
    const findedNote = this.items.find((el) => el.text === noteText);
    if (findedNote) {
      findedNote.priority = newPriority;
    }
  }
}

// const notes = new Notes();
// console.log("notes:", notes);

// notes.addNote({ text: "sssss", priority: Notes.Priority.HIGH });
// notes.addNote({ text: "aaaa", priority: Notes.Priority.MIDDLE });
// notes.addNote({ text: "bbb", priority: Notes.Priority.LOW });

// console.table(notes.getNotes());
// notes.removeNote("sssss");
// console.table(notes.getNotes());
// notes.updatePriority("sssss", Notes.Priority.LOW);
// console.table(notes.getNotes());
// notes.updatePriority("aaaa", Notes.Priority.LOW);
// console.table(notes.getNotes());

// 4. Створити клас Worker, у якого є властивості name і salary.
// У класу Worker є метод getSalary, який повертає повідомлення
// "Worker <name> has salary <salary> dollars"
// Створити клас WorkerPosition, у якого є властивість position
// і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"

class Worker {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getSalary() {
    return `Worker ${this.name} has salary ${this.salary} dollars`;
  }
}

class WorkerPosition extends Worker {
  constructor(name, salary, position) {
    super(name, salary);
    this.position = position;
  }
  getPosition() {
    return `${this.name} works as ${this.position}`;
  }
}

const worker = new WorkerPosition("Oleg", 222, "pppp");

// console.log("worker:", worker);
// console.log(worker.getPosition());
// console.log(worker.getSalary());

// 5. Створити клас Contact для створення контакта з полями name, email і phone.
// Потім створи клас ContactBook, який буде зберігати список контактів
// і надавати методи для додавання, видалення та пошуку контактів.

class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

class ContactBook {
  constructor() {
    this.contacts = [];
  }
  addContact(contact) {
    // Тут перевірка на наявність контакта в масиві
    this.contacts.push(contact);
  }
  removeContact(name) {}
  findContact(name) {}
}

const book = new ContactBook();
const cont1 = new Contact("Oleg", "oleg@mail.com", "+22222");
book.addContact(cont1);

// console.log("book:", book);

// Використовувати масив tweets, який вище в коді
// 5. Напишіть функцію getStatisticsOfTags(array), яка приймає масив
// і повертає об'єкт статистики, який враховує скільки разів повторюється кожен тег
// в усіх користувачів разом (не для кожного окремо)
// має бути відповідь: {js: 5, nodejs: 5, html: 2, css: 2, react: 4}

// console.table(tweets);
const getStatisticsOfTags = (array) => {
  const res = {};
  array
    .flatMap((el) => el.tags)
    .forEach((element, _, arr) => {
      if (!Object.keys(res).includes(element)) {
        res[element] = arr.filter((el) => el === element).length;
      }
    });
  return res;
};
// console.log("getStatisticsOfTags:", getStatisticsOfTags(tweets));

// 7. Є масив чисел, наприклад: arr = [1,2,3,4,5]
// Напишіть функцію getSums(arr), яка повертає масив його часткових сум.
// Іншими словами, виклик getSums(arr) має повертати новий масив з такої ж
// кількості елементів, в якому на кожній позиції буде сума елементів масива
// до цієї позиції включно
// Наприклад: для arr = [1,2,3,4,5]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функція не має змінювати вхідний масив
// Використовуйте метод reduce

const getSums = (arr) =>
  arr.reduce((acc, el, idx) => {
    idx === 0 ? acc.push(el) : acc.push(acc[idx - 1] + el);
    return acc;
  }, []);

// console.log(getSums([1, 2, 3, 4, 5]));

// 8. Reverse. Напишіть функцію, яка розгортає масив у зворотньому порядку.
// Будь ласка, не використовуйте array.reverse(), щоб зробити завдання цікавішим.

const data = [10, 20, 30, 40, 50, 60];
const alphData = ["a", "b", "c", "d", "e"];

const reverseFn = (arr) => arr.map((_, idx, arr) => arr[arr.length - 1 - idx]);

// console.log(reverseFn(data));
// console.log(reverseFn(alphData));

// 10. Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)

const products = [
  { name: "Apple", category: "fruits", price: 1.2, stock: 50 },
  { name: "Banana", category: "fruits", price: 0.8, stock: 100 },
  { name: "Carrot", category: "vegetables", price: 0.5, stock: 200 },
  { name: "Beef", category: "meat", price: 7.0, stock: 25 },
  { name: "Broccoli", category: "vegetables", price: 1.0, stock: 150 },
  { name: "Milk", category: "dairy", price: 1.5, stock: 20 },
  { name: "Cheese", category: "dairy", price: 2.5, stock: 5 },
  { name: "Chicken", category: "meat", price: 5.0, stock: 30 }
];

const getMostExpensiveMeatProduct = (arr) =>
  arr.reduce((acc, el) => (acc.price < el.price ? el : acc));

// console.log(getMostExpensiveMeatProduct(products));
