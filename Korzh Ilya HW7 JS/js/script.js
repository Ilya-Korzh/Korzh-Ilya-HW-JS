debugger

//Temperature
//Оформіть Temperature як функцію, яку параметром передається температура в одній системі,
// а повертається до іншої. Жодних prompt та console.log у коді бути не повинно,
// якщо ви хочете надалі користуватися цією функцією будь-де в коді зручно.
// Чи потрібен блок коду функції для вирішення цього завдання?
// function temperature (fahrenheit){
//   let celsius = 5 / 9 * (fahrenheit - 32);
//   return celsius;
// }
//
// temperature(75)

// // RGB
// // Оформіть Number: RGB як функцію, яку параметрами передаються три числа (r, g, b) => .
// // Функція повинна повертати рядок у нотації #RRGGBB.
// // Використовуючи умови або тернарний оператор Досягніть що б у результаті завжди було 7 символів,
// // навіть коли значення кольору менше 15ти. Чи потрібний блок коду цієї функції?
//
// const rgb = (red, green, blue) => {
//
//   let r = red.toString(16);
//   let g = green.toString(16);
//   let b = blue.toString(16);
//
//    if (r.length < 2) {
//      r = '0' + r;
//    }
//    if( g.length < 2) {
//      g = '0' + g;
//    }
//     if( b.length < 2) {
//       b = '0' + b;
//     }
//
//   return `# ${r} ${g} ${b}`;
// };
//
// rgb(1, 66, 1);

// function flats(level, flatInLevel, flatSearch) {
//
//   let sumLevel = Math.ceil(flatSearch / flatInLevel);
//   let entrance = Math.ceil(sumLevel / level);
//   let floor = sumLevel % level;
//   let obj = { entrance, floor };
//
//   return obj;
//
// }
//
// flats(5, 3, 21);

// Запитайте у користувача ПІБ, використовуючи prompt тричі. Викиньте зайві прогалини,
// використовуючи .trim
// Використовуючи String: capitalize зробіть так, щоб кожне слово у ПІБ було з великої літери,
// а решта - маленькі
// Об'єднайте ці три рядки в один змінний fullName і виведіть кудись (alert, console.log).
// Не забудьте прогалини між словами.
//
// Credentials
// Оформіть завдання String: credentials як функцію без параметрів.
//   Використовуйте функцію capitalize із домашнього завдання з масивів.
//   Функція повинна містити виклики prompt та повертати об'єкт виду {name, surname, fatherName, fullName}

// const credentials = () => {
//
//   const name = prompt('name').trim();
//   const cName = name[0].toUpperCase() + name.slice(1).toLowerCase();
//
//   const surname = prompt('surname').trim();
//   const cSurname = surname[0].toUpperCase() + surname.slice(1).toLowerCase();
//
//   const fatherName = prompt('fatherName').trim();
//   const cFatherName = fatherName[0].toUpperCase() + fatherName.slice(1).toLowerCase();
//   const obj = {
//     cName,
//     cSurname,
//     cFatherName,
//     fullName: cName + ' ' + cSurname + ' ' + cFatherName
//   };
//   return obj
// };
//
// credentials();

// String: new line
// Попросіть користувача ввести рядок черезprompt.
// prompt не дозволяє вводити рядкові рядки.
// Дамо користувачеві таку можливість - Користувач може вводити \n як маркер нового рядка.
//   Використовуючи split та join зробіть цей рядок воістину багаторядковим і виведіть
//   в консоль або через alert.
// function line() {
//   const string = prompt('Enter string with \\n');
//   return string
// }
// line()

// //Login And Password
// //Оформіть завдання Login And Password як функцію, яка приймає два параметри - правильний логін та пароль і повертає true якщо логін та пароль введені користувачами вірні,
// // або false якщо користувач не зміг.
// // Функція повинна містити в собі виклики prompt для введення логіну та пароля користувачем.
//
// const rightLogin = 'qwerty';
// const rightPassword = '1234567890';
// const loginAndPassword = (rightLogin, rightPassword) => {
//
//   const login = prompt('login').trim();
//
//   if (login === rightLogin) {
//     const password = prompt('password');
//     return password === rightPassword;
//   }
//
//   return false
// };
//
// loginAndPassword(rightLogin, rightPassword);

// // For Table
// // Оформіть завдання For Multiply Table як функцію, яка приймає будь-який масив з масивами,
// // а повертає рядок HTML з тегом <table> і всякими tr та td.
//
//
//
// const arr = [[1, 2, 3, 4, 5, 6], [7, 8, 9], [1, 2, 3, 4, 5, 6], [7, 8, 9]];
//
// const forTable = (arr) => {
//   let str = "<table>";
//   for (let i = 0; i < arr.length; i++) {
//     str += "<tr>";
//
//     for (let j = 0; j < arr[i].length; j++) {
//       str += `<td style='border: 1px solid black;'>${arr[i][j]}</td>`;
//     }
//
//     str += "</tr>";
//   }
//   console.log(arr.length);
//   str += "</table>";
//   return str;
// };
//
//
// document.write(forTable(arr))

// //Filter Lexics
// const question = prompt('write string here')
// const fixedQuestion = question.toLowerCase().trim().split(' ')
// const badWords = ['nan', 'false', "null", "undefined"]
// function filterLexics (string, array) {
// const result = string.filter(function (value){
// if (array.includes(value)){
//   return false
// }
// return true
// })
//   console.log(result.join(' '));
// }
//
// filterLexics(fixedQuestion, badWords)

// //Form
// // Оформіть завдання Form як функцію, яка приймає будь-який об'єкт як параметр та створює форму на екрані.
// const car = {
//   "Name":"chevrolet chevelle malibu",
//   "Cylinders":8,
//   "Displacement":307,
//   "Horsepower":130,
//   "Weight_in_lbs":3504,
//   "Origin":"USA",
//   "in_production": false
// };
// function form (car) {
//   let str = '<table>';
//
//   for (let key in car) {
//     let type1 = typeof car[key];
//
//     if (type1 === 'string') {
//       type1 = 'text';
//     } else if (type1 === 'boolean') {
//       type1 = 'checkbox';
//     }
//
//     str += `<tr><td>${key} <input type='${type1}' value='${car[key]}'/></td></tr>`;
//   }
//
//   str += '</table>';
//   document.write(str);
// }
//
// form (car)

//Array of objects sort
//Зробіть узагальнену функцію сортування масиву з об'єктами
var persons = [
  { name: "а", age: 17 },
  { name: "ґб", age: 35 },
  { name: "в", age: 73 },
  { name: "г",  age: 12},
];

function sort(persons, variable, boolean) {
  if (boolean === false) {
    persons.sort((a, b) => b[variable] - (a[variable]));
  } else if (boolean === true || boolean === undefined) {
    persons.sort((a, b) => a[variable] - (b[variable]));
  }
  console.log(persons);
}

sort(persons, "name", false); //сортує на ім'я за спаданням
//sort(persons, "age", true); //сортує за віком за зростанням

// Table
// Дано будь-який масив з об'єктами
// const persons = [{
//   name: 'Марія', fatherName: 'Іванівна', surname: 'Іванова', sex: 'female'
// }, {
//   name: 'Миколай', fatherName: 'Іванович', surname: 'Іванов', age: 15
// }, {
//   name: 'Петро', fatherName: 'Іванович', surname: 'Іванов', married: true
// }];
//
// let str = '<table>'+'<tr>';
// for (let obj of persons) {
//   for (let key in obj) {
//     if (!str.includes(key)) {
//       str += `<td style="border: 1px solid crimson">${key}</td>`;
//     }
//   }
// }
// str += '</tr>'+'</table>';
//
// let str1 = '<table>';
// for (let obj of persons) {
//   str1 += '<tr>';
//   for (let key in obj) {
//     str1 += `<td>${obj[key]}</td>`;
//   }
//   str1 += '</tr>';
// }
// str1 += '</table>';
//
// document.write(`${str} ${str1} `);
//
//
//

// const persons = [{
//   name: 'Марія', fatherName: 'Іванівна', surname: 'Іванова', sex: 'female'
// }, {
//   name: 'Миколай', fatherName: 'Іванович', surname: 'Іванов', age: 15
// }, {
//   name: 'Петро', fatherName: 'Іванович', surname: 'Іванов', married: true
// }];
//
// const table = (obj, sort /*rise, fall*/) => {
//   const copyObj = [...obj];
//   let safe = [];
//   let str = '<table>' + '<tr>';
//   for (const person of copyObj) {
//     for (const key in person) {
//       if (!str.includes(key)) {
//         safe.push(key);
//         str += `<td style="border: 1px solid crimson; background-color: brown" >${key}</td>`;
//       }
//     }
//   }
//   str += '</tr>';
//
//   if (sort === 'rise') {
//     copyObj.sort((a, b) => a.name.localeCompare(b.name));
//   } else {
//     copyObj.sort((a, b) => b.name.localeCompare(a.name));
//   }
//
//   for (let i = 0; i < copyObj.length; i++) {
//     str += '<tr>';
//     for (let j = 0; j < safe.length; j++) {
//       let value = copyObj[i][safe[j]] || '';
//       str += '<td style="border: 1px solid crimson">' + value + '</td>';
//     }
//     str += '</tr>';
//   }
//   str += '</table>';
//
//   document.write(str);
// };
//
// table(persons, 'rise');

// const calcResult = (a,action,b) => {
//
//   let result = 0;
//   if (action === 'add up') {
//     result = a + b;
//   } else if (action === 'subtract') {
//     result = a - b;
//   } else if (action === 'multiply ') {
//     result = a * b;
//   } else {
//     result = Math.round(a / b);
//   }
// return result
// };
// calcResult(2,'divide',2)

// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//   .then(data => {
//     let title = [];
//     let str = '<table>';
//     str += '<tr>';
//
//     for (let key in data['rates']) {
//       title.push(key);
//       str += `<td style="border: 1px solid crimson">${key}</td>`;
//
//     }
//     str += '</tr>';
//     for (let key in data['rates']) {
//       const currency1 = data['rates'][key];
//       str += '<tr>';
//       for (let key in data['rates']) {
//         const currency2 = data['rates'][key];
//         str += `<td style="border: 1px solid crimson">${currency1}/${currency2}</td>`;
//       }
//       str += '</tr>';
//     }
//
//     str += '</table>';
//     document.write(str);
//   });

// let currencyTable = () => {
//   fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//     .then(data => {
//       let str = '<table>';
//       str += '<tr><td style="border: 1px solid crimson">Currency</td>';
//       for (let key in data['rates']) {
//
//         str += `<td style="border: 1px solid crimson">${key}</td>`;
//       }
//       str += '</tr>';
//
//       for (let key1 in data['rates']) {
//
//         const currency1 = data['rates'][key1];
//         str += `<tr><td style="border: 1px solid crimson">${key1}</td>`;
//         for (let key2 in data['rates']) {
//
//           const currency2 = data['rates'][key2];
//           str += `<td style="border: 1px solid crimson"> ${(currency1 * currency2).toFixed()}</td>`;
//         }
//         str += '</tr>';
//       }
//
//       str += '</table>';
//       document.write(str);
//     });
// }
// currencyTable()
