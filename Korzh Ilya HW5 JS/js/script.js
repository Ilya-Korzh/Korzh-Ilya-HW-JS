// //    Prompts
// //   Збережіть у масив відповіді запитаннь, задані з допомогою prompts.
// //   Використовуйте доступ до масиву за індексом та присвоєння (arr[....] = ....)
// const questionOne = prompt();
// const questionTwo = prompt();
// const questionThree = prompt();
// let arr = [];
// arr [arr.length] = questionOne;
// arr [arr.length] = questionTwo;
// arr [arr.length] = questionThree;
// console.log(arr);

// //    Item access
// //   Попросіть користувача ввести (prompt) індекс у масиві
// //   Виведіть значення елемента за цим індексом.
// //   Спробуйте також ввести індекс "length".
// const index = prompt('Enter index')
// const a = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// alert(a[index])

// //    Item change
// //   Попросіть користувача ввести (prompt) індекс у масиві,
// //   а також значення для цього індексу.
// //   Присвойте у введений індекс введене значення
// const index = prompt('Enter index');
// const value = prompt('Enter value');
// const a = [];
// a[index]=value
// alert(a);

// //    Multiply table
// //  Створіть таблицю множення 5x5,
// //  використовуючи декларативний синтаксис вкладених масивів
// //  const arr = [[....], [....], [....], .....].
// //  Числа у вкладених масивах повинні дорівнювати добутку індексу зовнішнього масиву
// //  на індекс внутрішнього масиву: arr[2][3] === 6
// const arr = [];
// const matrixLength = 5;
//
// for (let i = 0; i < matrixLength; i++) {
//   arr.push([]);
//
//   for (let j = 0; j < matrixLength; j++) {
//     arr[i].push((arr.length - 1) * j);
//   }
// }
//
// console.log(arr);

// //    Multiply table slice
// //   Використовуючи slice, створіть масив масивів (іншу таблицю/матрицю) з таблиці множення,
// //   в якій не буде нулів
// const arr = [];
// const matrixLength = 5;
//
// for (let i = 0; i < matrixLength; i++) {
//   arr.push([]);
//
//   for (let j = 0; j < matrixLength; j++) {
//     arr[i].push((arr.length - 1) * j);
//   }
// }
// let newArr = []
// newArr.push(arr[1].slice(1),arr[2].slice(1),arr[3].slice(1),arr[4].slice(1))
// console.log(newArr);

// //    IndexOf Word
// //   Запитайте у користувача рядок із кількох слів. Запитайте в нього потрібне слово.
// //   Виведіть, яким за рахунком є це слово у рядку з кількох слів. Якщо слово не знайдено,
// //   виведіть повідомлення про це (а не -1)
// const questionOne = prompt('Enter some words')
// const questionTwo = prompt('What word do you need')
// let arr = []
// arr.push(questionOne)
// console.log(arr);
// alert(arr[0].indexOf(questionTwo))

// //    Reverse
// //  Додайте до масиву п'ять введених користувачем через prompt елементів (використовуйте push).
// //  Створіть інший масив із цими ж елементами в зворотньому напрямку.
// //  Для цього витягайте елементи з першого масиву використовуючи pop,
// //  додайте їх до другого використовуючи push.
// const el1 = prompt('Enter el1');
// const el2 = prompt('Enter el2');
// const el3 = prompt('Enter el3');
// const el4 = prompt('Enter el4');
// const el5 = prompt('Enter el5');
//
// const arr = [];
// let arr2 = [];
//
// arr.push(el1,el2,el3,el4,el5);
//
// arr2.push(arr.pop());
// arr2.push(arr.pop());
// arr2.push(arr.pop());
// arr2.push(arr.pop());
// arr2.push(arr.pop());
//
// alert(arr2);

//    Reverse 2
//  Переверніть другий масив із попереднього завдання ще раз (послідовність буде як у першому масиві),
//  використовуючи shift та unshift.
//
// const el1 = prompt('Enter el1');
// const el2 = prompt('Enter el2');
// const el3 = prompt('Enter el3');
// const el4 = prompt('Enter el4');
// const el5 = prompt('Enter el5');
//
// const arr = [];
// let arr2 = [];
//
// arr.unshift(el1);
// arr.unshift(el2);
// arr.unshift(el3);
// arr.unshift(el4);
// arr.unshift(el5);
//
// arr2.unshift(arr.shift());
// arr2.unshift(arr.shift());
// arr2.unshift(arr.shift());
// arr2.unshift(arr.shift());
// arr2.unshift(arr.shift());
//
// alert(arr2);

//   Copy
//  Скопіюйте масив створений у завданні Multiply table неглибоко
// const arr = [];
// const matrixLength = 5;
//
// for (let i = 0; i < matrixLength; i++) {
//   arr.push([]);
//
//   for (let j = 0; j < matrixLength; j++) {
//     arr[i].push((arr.length - 1) * j);
//   }
// }
// const newArr = arr.slice()
//
// console.log(newArr);

// //    Deep Copy
// //  Скопіюйте масив, створений у Multiply table, включаючи вкладені масиви (глибока копія)
//
// const arr = [];
// const matrixLength = 5;
//
// for (let i = 0; i < matrixLength; i++) {
//   arr.push([]);
//
//   for (let j = 0; j < matrixLength; j++) {
//     arr[i].push((arr.length - 1) * j);
//   }
// }
// const newArr = JSON.parse(JSON.stringify(arr))
//
// console.log(newArr);
//

// //    Array Equals
// //  Створіть код, в якому буде дві змінні з масивами (arr і arr2), які рівні один одному (arr1 === arr2)
// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// console.log(arr1 === arr2);

//    Flat
//  Зберіть усі елементи всіх вкладених масивів із завдання Multiply table в один масив.
//  Його довжина повинна дорівнювати 25. Використовуйте spread-оператор
// const arr = [];
// const matrixLength = 5;
//
// for (let i = 0; i < matrixLength; i++) {
//   arr.push([]);
//
//   for (let j = 0; j < matrixLength; j++) {
//     arr[i].push((arr.length - 1) * j);
//   }
// }
// const newArr =[ ...arr[0],...arr[1],...arr[2],...arr[3],...arr[4]]
// console.log(newArr);

// //    Destruct
// //  Вийміть першу, п'яту та дев'яту літеру з рядка, введеного користувачем,
// //  використовуючи деструктуризацію. Виведіть їх
// const question = prompt();
// let [a,,,,b,,,,c]=question;
// alert(a+ +b+ +c)

// //    Destruct default
// //  Вийміть другу, четверту та п'яту літеру з рядка, введеного користувачем,
// //  використовуючи деструктуризацію.
// //  Якщо у рядку таких букв не виявиться задайте змінним значення за умовчанням ! (знак оклику).
// //  Виведіть ці змінні
// const question = prompt();
// let [, a = '2', , b = '4', c = '5'] = question;
// alert(a + ' ' +b + ' ' +c);

// //    Multiply table rest
// //  Реалізуйте завдання Multiply table slice, використовуючи оператор rest при деструктуризації.
// //  Використовуйте вкладену деструктуризацію.
// //  Після отримання чотирьох обрізаних вкладених масивів - зберіть загальний масив без нулів
//
// const arr = [];
// const matrixLength = 5;
//
// for (let i = 0; i < matrixLength; i++) {
//   arr.push([]);
//
//   for (let j = 0; j < matrixLength; j++) {
//     arr[i].push((arr.length - 1) * j);
//   }
// }
//
// const [, [, ...r], [, ...e], [, ...s], [, ...t]] = arr;
// let newArr = [];
// newArr.push(r, e, s, t);
//
// console.log(newArr);

// //    For Alert
// //  Є масив ["John", "Paul", "George", "Ringo"]. Виведіть кожне ім'я окремим alert(),
// //  використовуючи цикл for .... of
// const name = ["John", "Paul", "George", "Ringo"]
// for (let i of name){
//   alert(i)
// }

// // For Select Option
// // Використовуючи код вище, створіть список, що випадає, з валютами. Елементи списку, що випадає, створюються за допомогою тега <option>
//
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<select>";
//
// for (const currency of currencies){
//   str += `<option>${currency}</option>`
// }
//
// str += "</select>";
// document.write(str);

// // For Table Horizontal
// // Аналогічно, виконайте виведення імен в осередки таблиці по горизонталі (один рядок з чотирма осередками)
//
// const names = ["John", "Paul", "George", "Ringo"]
// let   str = "<table>"
// for (const name of names){
// str+=`<td>${name}</td>`
// }
// str+= "</table>"
// document.write(str) //document.write отобразит ваш HTML на странице

// //For Table Vertical
// const names = ["John", "Paul", "George", "Ringo"]
// let   str = "<table>"
// for (const name of names){
//   str+=`<tr><td>${name}</td></tr>`
// }
// str+= "</table>"
// document.write(str) //document.write відобразить ваш HTML на сторінці

// For Table Letters
// Використовуючи код вище, створіть таблицю 3x4. У кожному рядку три осередки з літерами, чотири рядки, так як 4 валюти в масиві.
// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let   str = "<table>"
// for (const currency of currencies){
//   str+=`<tr></tr>`
//   console.log(currency)
//   for (const letter of currency){
//     str+=`<td>${letter}</td>`
//     console.log(letter)
//   }
// }
// str+= "</table>"
// document.write(str) //document.write відобразить ваш HTML на сторінці

// // For Multiply Table
// // Виведіть таблицю множення 5x5 із завдання Multiply table в таблицю, використовуючи вкладені for.... of та document.write
// let   str = "<table>"
// for (let i = 0; i < 5; i++) {
//   str+=`<tr></tr>`
//   for (let j = 0; j < 5; j++) {
//     str+=`<td>${j*i}</td>`
//   }
// }
// str+= "</table>"
//  document.write(str) //document.write відобразить ваш HTML на сторінці

// //Function Capitalize
// const capitalize = str => {
//   const result = str.slice(0,1).toUpperCase()+str.slice(1).toLowerCase()
//   return result
// }
// console.log(capitalize("cANBerRa")) //Canberra

// //Map Capitalize
// // Нехай користувач вводить рядок. Розбийте його за пробілами.
// // Використовуючи map та capitalize створіть масив у якому кожне слово буде з великої літери.
// // Зберіть масив у рядок назад
//  const user = prompt()
// const arr = user.split(' ')
// let string = ''
// for (const str of arr){
//  string+= str.charAt(0).toUpperCase() + str.substring(1) + ' ';
// }
// console.log(string);

// //Filter Lexics
// //Нехай користувач вводить рядок.
// // Розбийте його за пробілами.
// // Використовуючи filter поверніть true якщо елемент масиву не полягає у визначеному масиві
// // неприпустимих слів. Якщо елемент масиву - неприпустиме слово, функція, передана в filter
// // повинна повертати false. Зберіть масив у рядок назад.
// const user = prompt();
// const arr = user.split(' ');
// let a = arr.filter(function (element) {
//   console.log(element !== 'кто придумует дз?')
// });

//
//   //   Beep Lexics
//   // Нехай користувач вводить рядок. Розбийте його за пробілами.
//   // Використовуючи map та тернарний оператор поверніть з функції слово без змін,
//   // якщо воно не полягає в якомусь іншому масиві заборонених слів.
//   // Якщо слово полягає в цьому списку, функція повинна повернути слово BEEP.
//   // Зберіть масив назад у рядок через пробіл. Таким чином, ви зможете реалізувати заміну кількох
//   // заборонених слів на BEEP.
// const bad = ['q','w','e']
// const user = prompt();
// const arr = user.split(' ');
// let a = arr.map(function (element,index ){
//  bad.includes(element) ? arr[index]=('BEEP'):arr[index]=element
// })
// console.log(arr.join(' '));

// // Reduce HTML
// // Реалізуйте завдання For Select Option використовуючи reduce:
// // надо додати к a <option> з b,
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<select>";
// str += currencies.reduce((a, b) => `${a}+<option>${b}</option>`);
// str += "</select>";
//
// document.write(str);

// For Brackets Hell Check
// Нехай користувач вводить рядок з будь-якими парними дужками в ньому, наприклад [[](){{{[]()}}}].
// Знайдіть місце можливої помилки (непарності) у цьому рядку. Для цього, кожну дужку, що відкриває,
// додавайте в стек. При знаходженні дужки, що закриває, вона повинна відповідати вершині стека
// (останнєй доданой дужцi). Якщо вона не відповідає, виведіть повідомлення про помилку та позицію у рядку. Якщо відповідає – приберіть дужку зі стека. Якщо рядок помилок не містить, порадуйте користувача.
//   Наприклад, рядки із проблемою: [(}], [(()()()], {() () [()()}]{{{}}}
const line = '{}[](){}()';
const bracketsStack1 = [];
const bracketsStack2 = [];
const bracketsStack3 = [];

for (const character of line) {
  //не звертайте уваги на символи, крім трьох видів дужок
  if (character === "[") {
    bracketsStack1.push('[');
  } else if (character === ']') {
    const last1 = bracketsStack1.pop();
    if (last1 === undefined) {
      console.log('WRONG1');
    }
  } else if (character === "(") {
    bracketsStack2.push('(');
  } else if (character === ')') {
    const last2 = bracketsStack2.pop();
    if (last2 === undefined) {
      console.log('WRONG2');
    }
  } else if (character === "{") {
    bracketsStack3.push('{');
  } else if (character === '}') {
    const last3 = bracketsStack3.pop();
    if (last3 === undefined) {
      console.log('WRONG3');
    }
  }

}
if (bracketsStack1.length === 0 && bracketsStack2.length === 0 && bracketsStack3.length === 0) {
  console.log('not wrong');
}else {
  console.log('WRONG');
}
































