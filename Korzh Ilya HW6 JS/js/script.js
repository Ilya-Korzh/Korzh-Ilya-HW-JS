// // Literals
// // Знайдіть кілька навколишніх об'єктів реального світу та створіть відповідні об'єкти Javascript.
// const person1 = {
//   name: 'Petya',
//   age: 32,
//   gender: 'male',
// };
// const person2 = {
//   name: 'Igor',
//   age: 12,
//   gender: 'male',
// };

// // ## Literals expand
// // Дайте можливість користувачеві додати будь-які дві властивості до цих об'єктів з будь-якими значеннями.' +
// // ' Забезпечте введення назви ключа
// // і значення через `prompt` прямо в літералі об'єкта `{}`
// person1[prompt('key person1')]=prompt('value person1')
// person2[prompt('key person2')]=prompt('value person2')

// // ## Literals copy
// // Нехай користувач введе ще одну властивість змінну.
// // Вставте цю змінну в новий об'єкт.
// const value = prompt('new value')
// const newObj = {
//   key: 'change'
// }
// newObj.key=value
// // Скопіюйте об'єкт із попереднього завдання на новий об'єкт.
// const copyObj= structuredClone(newObj)
// console.log(copyObj);

// // Html tree
// const body = {
//
//   tagName: 'body',
//   children: [
//
//     {
//       tagName: 'div',
//       children: [
//
//         {
//           tagName: 'span',
//           children: ['Enter a data please']
//         },
//
//         {
//           tagName: 'input',
//           attrs: {
//             type: 'text',
//             id: 'name'
//           }
//         },
//
//         {
//           tagName: 'input',
//           attrs: {
//             type: 'text',
//             id: 'surname',
//           }
//         },
//       ],
//     },
//
//     {
//       tagName: 'div', children: [
//       {
//         tagName: 'button',
//         attrs: {
//           id: 'ok'
//         },
//         children: ['ok']
//       },
//       {
//         tagName: 'button',
//         attrs: {
//           id: 'cancel'
//         },
//         children: ['cancel'],
//       }
//       ]
//
//     }]
// };

// // Виведіть значення тексту в другій кнопці, використовуючи . та [].
// console.log(body.children[1].children[1].attrs.id);
// //   Виведіть значення атрибуту id у другому input, використовуючи . та [].
// console.log(body.children[0].children[2].attrs.id);

//   //   Parent
//   // Додайте кожному об'єкту тега з попереднього завдання зв'язок з батьком,
//   // використовуючи властивість parent та присвоєння
// body.children[0].father = body;
// body.children[0].children[0].father = body.children[0];
// body.children[0].children[1].father = body.children[0];
// body.children[0].children[2].father = body.children[0];
// body.children[1].father = body;
// body.children[1].children[0].father = body.children[1];
// body.children[1].children[1].father = body.children[1];
// body.children[1].children[2].father = body.children[1];

// //     Change OK
// //   Додайте (або змініть) будь-який введений користувачем атрибут тега <button id='ok'> із завдання HTML Tree.
// //   Також користувач вводить значення цього атрибута.
// body.children[1].children[0][prompt('key')]=prompt('value');
// console.log(body.children[1].children[0]);

// //   Destruct array
// // напишіть код, який використовуючи деструктуризацію покладе:
// // парні числа в змінні even1, even2,
// // непарні в odd1, odd2, odd3,
// // Букви в окремий масив
// let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
// let [odd1, even1, odd2,  even2, odd3, ...apart] = arr

// //   Destruct string
// // let arr = [1, "abc"]
// // напишіть код, який використовуючи деструктуризацію покладе:
// // Число в змінну number
// // літеру a в змінну s1
// // літеру b у змінну s2
// // літеру c у змінну s3
//
// let arr = [1, "abc"];
// let [s1, s2, s3] = arr[1];

//   //   Destruct 2
//   // вийміть використовуючи деструктуризацію імена дітей у змінні name1 та name2
// let obj = {name: 'Ivan',
//   surname: 'Petrov',
//   children: [
//     {name: 'Maria'},
//     {name: 'Nikolay'}
//   ]
// }
// const { children: [ { name: name1 }, { name: name2 } ] } = obj;
// console.log(name1,name2);

// // Destruct 3
// // вийміть використовуючи деструктуризацію об'єктів два перші елементи та довжину масиву в змінні a, b та length
//
// let arr = [1,2,3,4,5,6,7,10]
// const {0:a,1:b,length}=arr
// console.log(length,a,b);

// // Copy delete
// //   Зробіть копію одного з об'єктів із завдання Literals без ключа,
// //   який введе користувач, з використанням деструктурiзацiї та rest.
// const {name, ...copyObj } = person1
// copyObj[prompt('key')] = prompt('value')
// console.log(copyObj);

// //    Currency real rate
// // Реалізуйте калькулятор обміну валют таким чином:
// // Користувач вводить вхідну валюту
// // Користувач вводить валюту, в яку відбувається конвертація
// // Користувач вводить суму у вхідній валюті
// // Користувач бачить результат конвертації
// // Врахуйте, що користувач може ввести якусь дичину або назву валют у неправильному регістрі

// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//   .then(data => {
//     //ця функція запускається коли дані завантажуються.
//     //Інший код працює РАНIШЕ.
//     //тільки тут є змінна data з завантаженими
//     const currency1 = prompt('What is your currency').toUpperCase().trim();
//     const sum = prompt('enter sum').trim();
//     const toDoll = (sum * data['rates']['USD'] / data['rates'][currency1]);
//     const currency2 = prompt('What currency do you want to change').toUpperCase().trim();
//     const finalSum = (toDoll * data['rates'][currency2]).toFixed(2);
//
//     alert(finalSum);
//
//   });

// // Currency drop down
// // Зробіть список, що випадає, з назвами всіх валют, використовуючи код з минулого завдання і накопичення HTML-тегів у рядковій змінній.
// //   Для списків, що випадають, в HTML передбачені теги <select> і <option>
//
// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//   .then(data => {
//     const currencies = Object.keys(data['rates']);
//     let str = '<select>'
//     for (const currency of currencies) {
//       str += '<option>' + currency + '</option>';
//     }
//     str += '</select>'
//     document.write(str)
//   });


// Currency table
// незнаю как сделать

//  const car = {
//   "Name":"chevrolet chevelle malibu",
//   "Cylinders":8,
//   "Displacement":307,
//    "Weight_in_lbs":3504,
//   "Horsepower":130,
//   "Origin":"USA",
//   "in_production": false
// }
//  function shoZa(dich){
//   let str = '<form>';
//
//   for (const diches in dich) {
//
//     let type = typeof (car[diches])
//     const value = (car[diches])
//     if (type === 'string'){
//       type = 'text'
//     }
//     if (type === 'boolean'){
//       type = 'checkbox'
//       str += `<label>  ${diches}  <input type="${type}" checked="checked"/> </label> `
//     }else {
//       str += `<label>  ${diches}  <input type="${type}" value="${value}"/> </label> `;
//     }
//   }
//   str += '</form>';
//   document.write(str);
// }
//
// shoZa(car)

// const persons = [{
//   name: 'Марія',
//   fatherName: 'Іванівна',
//   surname: 'Іванова',
//   sex: 'female'
// }, {
//   name: 'Миколай',
//   fatherName: 'Іванович',
//   surname: 'Іванов',
//   age: 15
// }, {
//   name: 'Петро',
//   fatherName: 'Іванович',
//   surname: 'Іванов',
//   married: true
// },];
//
// let arrColumn = [];
// let rows = '';
//
// let str = "<tr>";
// for (const person of persons) {
//
//   for (const key in person) {
//
//     if (!arrColumn.includes(key)) {
//       arrColumn.push(key);
//       str += `<th> ${key} </th>`;
//     }
//
//   }
//
//   let values = arrColumn.map(key => person[key] || '');
//   let row = '<tr>';
//   row += values.map(value => `<td>${value}</td>`).join('');
//   row += '</tr>';
//   rows += row;
// }
//
// str += "</tr>";
//
//
//
// let table = `<table>${str}${rows}</table>`;
// document.write(table);







