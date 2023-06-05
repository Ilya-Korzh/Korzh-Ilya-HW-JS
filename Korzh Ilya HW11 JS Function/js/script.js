// let createPerson = (name, surname) => {
//   let fatherName = ''
//   return {name,surname,fatherName,getFullName () {
//     return `${this.name} ${this.surname} ${this.fatherName}`;
//   } };
//
// };
//
//
//
// const a = createPerson("Вася", "Пупкін")
// const b = createPerson("Ганна", "Іванова")
// const c = createPerson("Єлизавета", "Петрова")
//
// console.log(a.getFullName()) //Вася Пупкін
// a.fatherName = 'Іванович'
// console.log(a.getFullName()) //Вася Іванович Пупкін
//
// console.log(b.getFullName()) //Ганна Іванова
// console.log(c.getFullName()) //Ганна Іванова
// let createPersonClosureDestruct = ({ name = '', surname = '',fatherName='', age = '' }) => {
//   let getName = () => name;
//   let getSurname = () => surname;
//   let getFatherName = () => fatherName;
//   let getAge = () => age;
//   let getFullName = () => `${name} ${surname} ${fatherName} ${age}`;
//
//   const setName = (newName) => {
//     if (typeof newName === 'string' && newName[0] === newName[0].toUpperCase()) {
//       name = newName;
//     }
//   };
//   const setSurname = (newSurname) => {
//     if (typeof newSurname === 'string' && newSurname[0] === newSurname[0].toUpperCase()) {
//       surname = newSurname;
//     }
//   };
//   const setFatherName = (newFatherName) => {
//     if (typeof newFatherName === 'string' && newFatherName[0] === newFatherName[0].toUpperCase()) {
//       fatherName = newFatherName;
//     }
//   };
//   const setAge = (newAge) => {
//     if (newAge > 0 && newAge < 100) {
//       age = newAge;
//     }
//   };
//   const setFullName = (newFullName) => {
//     const fio = newFullName.split(' ');
//     surname = fio[0];
//     name = fio[1];
//     fatherName = fio[2];
//   };
//   return {
//     getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setFatherName, setAge, setFullName,
//   };
// };
//
// const a = createPersonClosureDestruct({ name: 'Миколай', age: 75 });
// const b = createPersonClosureDestruct({ name: 'Вася', surname:'Пупкін' });
//
// console.log(a.getFullName());
// console.log(b.getFullName());

// let isSorted = (...rest) => {
//   let filtered = rest.filter((element, index, array) => {
//     return element <= array[index + 1] || index === array.length - 1;
//   });
//   return filtered.length === rest.length;
// };
//
// console.log(isSorted(1, 2, 3,));
// console.log(isSorted(1, 2, 1));

// let createPersonClosure = (name, surname) => {
//   let fatherName = '';
//   let age = '';
//   let getName = () => name;
//   let getSurname = () => surname;
//   let getFatherName = () => fatherName;
//   let getAge = () => age;
//   let getFullName = () => `${name} ${surname} ${fatherName} ${age}`;
//
//   const setName = (newName) => {
//     if (typeof newName === 'string' && newName[0] === newName[0].toUpperCase()) {
//       name = newName;
//
//     }
//   };
//   const setSurname = (newSurname) => {
//     if (typeof newSurname === 'string' && newSurname[0] === newSurname[0].toUpperCase()) {
//       surname = newSurname;
//     }
//   };
//   const setFatherName = (newFatherName) => {
//     if (typeof newFatherName === 'string' && newFatherName[0] === newFatherName[0].toUpperCase()) {
//       fatherName = newFatherName;
//     }
//   };
//   const setAge = (newAge) => {
//     if (newAge > 0 && newAge < 100) {
//       age = newAge;
//     }
//   };
//   const setFullName = (newFullName) => {
//     const fio = newFullName.split(' ');
//     surname = fio[0];
//     name = fio[1];
//     fatherName = fio[2];
//   };
//   return {
//     getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setFatherName, setAge, setFullName,
//   };
// };
//
// const b = createPersonClosure("Ганна", "Іванова");
// b.setAge(15);
// b.setFullName("Петрова Ганна Миколаївна");
// console.log(b.getFullName());
//
// function personForm(parent, person) {
//   let inputName = document.createElement('input');
//   let inputSurname = document.createElement('input');
//   let inputFatherName = document.createElement('input');
//   let inputAge = document.createElement('input');
//   let inputFullName = document.createElement('input');
//
//   parent.append(inputName)
//   parent.append(inputSurname)
//   parent.append(inputFatherName)
//   parent.append(inputAge)
//   parent.append(inputFullName)
//
//   inputName.setAttribute('type', 'text');
//   inputSurname.setAttribute('type', 'text');
//   inputFatherName.setAttribute('type', 'text');
//   inputAge.setAttribute('type', 'number');
//   inputFullName.setAttribute('type', 'text');
//
//   inputName.value = person.getName();
//   inputSurname.value = person.getSurname();
//   inputFatherName.value = person.getFatherName();
//   inputAge.value = person.getAge();
//   inputFullName.value = person.getFullName();
//
//   inputName.oninput = () => {
//     person.setName(inputName.value);
//     inputFullName.value = person.getFullName();
//   };
//
//   inputSurname.oninput = () => {
//     person.setSurname(inputSurname.value);
//     inputFullName.value = person.getFullName();
//   };
//
//   inputFatherName.oninput = () => {
//     person.setFatherName(inputFatherName.value);
//     inputFullName.value = person.getFullName();
//   };
//
//   inputAge.oninput = () => {
//     person.setAge(parseInt(inputAge.value));
//     inputAge.value = person.getFullName();
//   };
//
//   inputFullName.oninput = () => {
//     person.setFullName(inputFullName.value);
//     inputName.value = person.getName();
//     inputSurname.value = person.getSurname();
//     inputFatherName.value = person.getFatherName();
//     inputAge.value = person.getAge();
//   };
//
// }
// const parent = document.querySelector(`body`);
// personForm(parent, b);








интересные задачки

// // Сумма с помощью замыканий
// // важность: 4
// // Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// //
// //   Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// //
// // Например:
// let sum = a => b => a + b;
// console.log(sum(1)(2));
// console.log(sum(5)(-1));

// // У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// //
// //   Сделайте набор «готовых к употреблению» фильтров:
// //
// //   inBetween(a, b) – между a и b (включительно).
// // inArray([...]) – находится в данном массиве.
// //   Они должны использоваться таким образом:
// //
// //   arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// // arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// // Например:
//
// function inBetween(a, b) {
//   return (currentValue) => currentValue >= a && currentValue <= b;
// }
//
// function inArray(arr) {
// return  (currentValue) => arr.includes(currentValue)
// }
//
// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2



// //У нас есть массив объектов, который нужно отсортировать:
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
//
//
//
// //Обычный способ был бы таким
//
// // // по имени (Ann, John, Pete)
// // console.log(  users.sort((a, b) => a.name > b.name ? 1 : -1));
// //
// // // по возрасту (Pete, Ann, John)
// // console.log(users.sort((a, b) => a.age > b.age ? 1 : -1));
// // //Можем ли мы сделать его короче, например вот таким?
//
// let byField = (key) => (a,b) => {
//  if (a[key] > b[key]){
//    return 1
//   }
//  return -1
// } ;
//
// console.log(users.sort(byField('name')));
// console.log( users.sort(byField('age')));
//
//
//
// // //То есть чтобы вместо функции мы просто писали byField(fieldName).
// //
// // //  Напишите функцию byField, которая может быть использована для этого.

// Армия функций
// важность: 5
// Следующий код создаёт массив из стрелков (shooters).
//
//   Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…




// // Следующий код создаёт массив из стрелков (shooters).
// //
// //   Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
//
// function makeArmy() {
//   let shooters = [];
//
//   for (let i = 0; i < 10; i++) {
//     let shooter = function() { // функция shooter
//       alert( i ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//
//   }
//   return shooters;
// }
//
// let army = makeArmy();
//
// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// //Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.









