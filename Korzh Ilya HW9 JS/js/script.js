// let a = true
// while (a){
//   a = confirm('qwerty')
// }

// let arr = [];
// let a = true;
// while (a) {
//   a = prompt('qwerty');
//   if (a !== null) { // проверяем на значение null
//     arr.push(a);
//     console.log(arr);
//   }
// }

//let arr = [];
// let a = true;
// let counter = 0;
// while (a) {
//   a = prompt('qwerty');
//   if (a !== null) { // проверяем на значение null
//     arr[counter] = a;
//     counter++;
//     console.log(arr);
//   }
// }

// let counter = 0;
// for (let i = 1; i > 0; i++) {
//   const a = Math.random();
//   if (a > 0.9) {
//     break;
//   }
//   counter++;
//   console.log(a);
// }
// console.log(counter);

// let a = false;
// while (!a) {
//   a = prompt('qwerty');
// }

// let a = (to, step) => {
//   let counter = 1
//   for ( let i = 0 ; i < to;i++) {
//     console.log(counter);
//     counter+=step
//   }
// };
//
// a(7, 3)

// let a = ( length) => {
//   let str = ''
//   for ( let i = 1 ; i <= length;i++) {
//     str+='#'
//   }
//   console.log(str);
// };
//
// a(3)

// let a = ( row) => {
//   let str = ''
//   for ( let i = 1 ; i <= row;i++) {
//     str+='0123456789\n'
//   }
//   console.log(str);
// };
//
// a(5)

// let chessBord = (x, y) => {
//
//   for (let i = 1; i <= y; i++) {
//     let str = '';
//
//     for (let j = 1+i; j <= x+i; j++) {
//       if (j % 2 === 0) {
//         str += '.';
//       } else {
//         str += '#';
//       }
//     }
//     console.log(str);
//   }
// };
//
// chessBord(8, 5);

// let count = (x) => {
// let arr =[]
//   for (let i = 0; i <= x-1; i++) {
//     arr.push(i**3)
//     }
//     console.log(arr);
//   }
//
// count(5 );

// let arr = [];
//
// for (let i = 1; i < 11; i++) {
//   let arr2 = [];
//   for (let j = 0; j < 11; j++) {
//     arr2.push(i * j);
//   }
//   arr.push(arr2);
// }
// console.log(arr);

// // //Напишіть функцію readArrayOfObjects, яка циклічно додає масив об'єкти, які ввів користувач.
// // // Користувач вводить ключі та значення (їх у кожному об'єкті може бути будь-яка кількість), використовуючи prompt.
// // // Коли користувач натискає "Скасувати" у вікні prompt, введення об'єкта закінчується і об'єкт додається до масиву.
// // // Перед введенням наступного об'єкта користувачеві задається питання (використовуючи confirm),
// // // чи хоче він продовжить цi тортури введення об'єктів.
// // // При ствердній відповіді знову працює введення будь-якої кількості ключів для створення нового об'єкту
// // // Функція має повертати створений масив із об'єктами.
// // debugger
// let readArrayOfObjects = () => {
//
//   const arr = [];
//   let obj = {};
//
//   let key = true;
//   let value = true;
//
//   while (key && value) {
//     key = prompt('enter key');
//     value = prompt('enter value');
//     obj[key] = value;
//   }
//
// if (!key || !value) {
//   arr.push(obj);
//   obj = {};
// }
// const question = confirm('enough ?');
// if (!question){
//   return false
// }
// alert(arr);
// }
// readArrayOfObjects();

// let hash = (size) => {
//   if (size % 2 === 0) {
//     return false;
//   }
//   let above = 1;
//   for (; above <= Math.ceil(size / 2); above++) {
//
//     let str = '';
//
//     for (let j = size / 2 - above; j > 0; j--) str += '*';
//
//     for (let j = 1; j <= above * 2 - 1; j++) str += '#';
//
//     for (let j = size / 2 - above; j > 0; j--) str += '*';
//
//     console.log(str);
//   }
//   const below = size - above + 1;
//   for (let i = 1; i <= below; i++) {
//
//     let str = '';
//
//     for (let j = 0; j < i; j++) str += '*';
//
//     for (let j = 1; j <= size - i * 2; j++) str += '#';
//
//     for (let j = 0; j < i; j++) str += '*';
//     console.log(str);
//    }
//
// };
// hash(9);

// let str = '<table><tr>';
//
// str += `<td style="border: 1px solid grey; background-color: crimson; padding: 5px">0</td>`;
// for (let i = 1; i < 10; i++) {
//   str += `<td style="border: 1px solid grey; background-color: crimson; padding: 5px">${i}</td>`;
// }
// str += '</tr>';
//
// for (let i = 1; i < 10; i++) {
//   str += '<tr>';
//   if (i % 2 === 0) {
//     str += `<td style="border: 1px solid grey; background-color: crimson; padding: 5px">${i}</td>`;
//   } else {
//     str += `<td style="border: 1px solid grey; background-color: grey; padding: 5px">${i}</td>`;
//   }
//   for (let j = 1; j < 10; j++) {
//     if (i % 2 === 0) {
//       str += `<td style="border: 1px solid grey; background-color: crimson; padding: 5px">${i*j}</td>`;
//     } else {
//       str += `<td style="border: 1px solid grey; background-color: grey; padding: 5px">${i*j}</td>`;
//     }
//   }
//   str += '</tr>';
// }
// str += '</table>';
//
// document.write(str);

// let str = '<table><tr>';
//
// str += `<td style="border: 1px solid grey; background-color: ; padding: 5px">0</td>`;
// for (let i = 1; i < 10; i++) {
//   str += `<td style="border: 1px solid grey; background-color: ; padding: 5px">${i}</td>`;
// }
// str += '</tr>';
//
// for (let i = 1; i < 10; i++) {
//   str += '<tr>';
//   if (i % 2 === 0) {
//     str += `<td style="border: 1px solid grey; background-color: ; padding: 5px">${i}</td>`;
//   } else {
//     str += `<td style="border: 1px solid grey; background-color: ; padding: 5px">${i}</td>`;
//   }
//   for (let j = 1; j < 10; j++) {
//     if (i % 2 === 0) {
//       str += `<td style="border: 1px solid grey; background-color: ; padding: 5px">${i * j}</td>`;
//     } else {
//       str += `<td style="border: 1px solid grey; background-color: ; padding: 5px">${i * j}</td>`;
//     }
//   }
//   str += '</tr>';
// }
// str += '</table>';
//
//
// document.write(str);
//
//let td = document.querySelectorAll('td');
// console.log(td);
// for (let item of td) {
//   item.onmouseover = (event) => event.target.style.backgroundColor = 'crimson ';
//   item.onmouseout = (event) => event.target.style.backgroundColor = 'transparent ';
// }













//
// let str = '<table><tr>';
// str += '<td style="border: 1px solid grey; background-color: ; padding: 5px">0</td>';
// for (let i = 1; i < 10; i++) {
//   str += `<td style="border: 1px solid grey; background-color: ; padding: 5px">${i}</td>`;
// }
// str += '</tr>';
//
// for (let i = 1; i < 10; i++) {
//
//   str += '<tr>';
//   str += `<td style="border: 1px solid grey; background-color: ; padding: 5px" >${i}</td>`;
//
//   for (let j = 1; j < 10; j++) {
//     str += `<td style="border: 1px solid grey; background-color: ; padding: 5px">${i * j}</td>`;
//   }
//   str += '</tr>';
// }
// str += '</table>';
//
//
// document.write(str);
//
//
//
//
//
//
// let td = document.querySelectorAll('td');
// for (let item of td) {
//   item.onmouseover = (event) => event.target.parentElement.style.backgroundColor = 'crimson ';
//   item.onmouseout = (event) => event.target.parentElement.style.backgroundColor = 'transparent ';
//
// }
//
// const colIndex = cell.cellIndex;
// const rows = table.rows;
// for (let i = 0; i < rows.length; i++) {
//   rows[i].cells[colIndex]. style.backgroundColor="crimson";
// }
