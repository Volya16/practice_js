// 1. Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте в кінець 'rock-n-roll'
// Заменіть значення 'blues' на 'classic'
// Напишіть функцію logItems(array), яка приймає
// масив і використовує цикл for, який для кожного елемента
// буде виводити повідомлення у форматі:
// <номер елемента> - <значення елемента>
// Нумерація має починатись з 1


// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const index = styles.indexOf("blues");
// if (index !== -1) {
//     styles.splice(index, 1, "classic");
// }

// function logItems(array) {
//     for (let i = 0; i < array.length; i += 1) {
// console.log(`${i + 1} - ${array[i]}`);
//     }
// }

// logItems(styles);


// 2. Напиши функцію checkLogin(array), яка перебирає масив логінів і перевіряє
// чи є ім'я введене в prompt у цьому масиві і у разі,
// якщо є - виводить повідомлення в alert "Welcome, <name>!"
// в іншому випадку - "User not found"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const nameCheck = prompt("What is your name?");
//     for (const name of array) {
//         if (nameCheck === name) {
//             alert(`Welcome, ${nameCheck}`);
//         }
//     }
//     alert("User not found");
// }


// function checkLogin(array) {
//     const nameCheck = prompt("What is your name?");
//     if (array.includes(nameCheck)) {
//         return alert(`Welcome, ${nameCheck}`);
//     }
//     alert("User not found");
// }


// checkLogin(logins);


// 3. Напишіть функцію, яка складатиме сусідні числа і пушитиме їх в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sum(array) {
//     const newArr = [];
//     for (let i = 0; i < array.length -1; i += 1) {
//         const currentEl = array[i];
//         const nextEl = array[i + 1];
//         newArr.push(currentEl + nextEl);
//     }
//     return newArr
// }

// console.log(sum(someArr));


// 4. Напишіть функцію calculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.


// function calculateAverage() {
//     let totalSum = 0;
//     let count = 0;
//     for (const num of arguments) {
//         if (typeof num === "number") {
//             totalSum += num;
//             count += 1;
//         }
        
//     }
//     return totalSum / count;
// }

// console.log(calculateAverage(4, 3, 6, 10, 45, "zh"));