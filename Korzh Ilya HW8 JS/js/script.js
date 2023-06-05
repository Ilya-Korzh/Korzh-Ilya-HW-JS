// let a = 10;
// {
//   let b = 20;
//   {
//     let c = 30;
//     //які тут будуть значення змінних a, b, c, d
//     //a=10 b=20 c=30 d = 0
//     b++;
//     a *= 10;
//     //a=100 b=21 c=30 d=0
//   }
//   {
//     let c = 50;
//     //які тут будуть значення змінних a, b, c, d
//     b += 500;
//     //a=100 b=521 c=50 d=0
//   }
//   {
//     const a = 100500;
//     const d = "value";
//     //які тут будуть значення змінних a, b, c, d
//     // a =100500 b=521 c=0, d=value
//     {
//       let a = -50;
//       b = 1000;
//       //a = -50 b = 1000 c=0 d=value
//       //які тут будуть значення змінних a, b, c, d
//     }
//     //a=-50 b=1000 c=0 d= 0
//     console.log(a, b,  d);
//     //які тут будуть значення змінних a, b, c, d
//   }
//   //які тут будуть значення змінних a, b, c, d
//   // a=10 b=20 c=0 d=0
// }
// //які тут будуть значення змінних a, b, c, d
// //a=100 b=1000 c=0 d=0

// const age = +prompt("Скільки вам років?");
// if (age < 0) {
//   alert("nothing");
// }else if (age > 0 && age < 18) {
//   alert("школяр");
// } else if (age > 18 && age < 30) {
//   alert("молодь");
// } else if (age > 30 && age < 45) {
//   alert("зрілість");
// } else if (age > 45 && age < 60) {
//   alert("захід сонця");
// } else if (age > 60) {
//   alert("як пенсія?");
// } else {
//   alert("чи кіборг, чи KERNESS");
// }

// const outerwear = [8, 10, 12, 14, 16, 18, 20, 22];
//
// for (let size of outerwear) {
//   switch (size) {
//     case 8:
//       console.log(size);
//       break;
//     case 10:
//       console.log(size);
//       break;
//     case 12:
//       console.log(size);
//       break;
//     case 14:
//       console.log(size);
//       break;
//     case 16:
//       console.log(size);
//       break;
//     case 18:
//       console.log(size);
//       break;
//     case 20:
//       console.log(size);
//       break;
//     default:
//       console.log(size);
//   }
// }

// let color = prompt("Введіть колір", "");
// if (color === "red" || color === "black") {
//   document.write("<div style='background-color: red;'>червоний</div>");
//   document.write("<div style='background-color: black; color: white;'>чорний</div>");
// } else if (color === "blue" || color === "green") {
//   document.write("<div style='background-color: blue;'>синій</div>");
//   document.write("<div style='background-color: green;'>зелений</div>");
// } else {
//   document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
// }

// const noSwitch = (key, cases, defaultKey = 'default') => {
//   if (!key) {
//     key = defaultKey;
//   }
//   cases[key]();
// };
//
// const drink = prompt("Що ви любите пити");
// noSwitch(drink, {
//   "воду": () => {
//     alert('Найздоровіший вибір!');
//   }, "чай": () => {
//     alert('Смачна та корисна штука. Не перестарайтеся з цукром');
//   }, "пиво": () => {
//     alert('Добре влітку, та в міру');
//   }, "віскі": () => {
//     alert('Та ви, батечку, естет! Не забудьте лід і сигару');
//   }, default: () => {
//     alert('шото я не зрозумів');
//   }
// });

// const body = document.querySelector('body');
// body.style.backgroundColor = 'grey';
//
// const div = document.createElement(`div`);
// body.prepend(div);
//
// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//   .then(data => {
//     for (let currency in data['rates']) {
//       const button = document.createElement(`button`);
//       div.prepend(button);
//       button.style.cssText = `
//       padding: 20px;
//       background: crimson;
//       border: 1px solid black;
//       `;
//       button.innerHTML = currency;
//       let sum = 0;
//       button.onclick = () => {
//         sum = prompt('which sum do you want to change ').trim();
//         if (!isNaN(+sum)){
//           alert((sum / data['rates'][currency]).toFixed(2));
//         }else {
//           alert('WRONG');
//         }
//
//
//       };
//     }
// });

//
const body = document.querySelector('body');
body.style.backgroundColor = 'grey';

const enterCurrency = document.createElement(`select`);
enterCurrency.id = `from`;
const exitCurrency = document.createElement(`select`);
exitCurrency.id = `to`;
const crossCourse = document.createElement(`div`);
crossCourse.id = `rate`;
const sumEnterCurrency = document.createElement('input');
sumEnterCurrency.type = `number`;
sumEnterCurrency.id = `amount`;
const result = document.createElement(`div`);
result.id = `result`;

body.prepend(enterCurrency, exitCurrency, crossCourse, sumEnterCurrency, result);

fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
  .then(data => {

    let selectedCurrency = data['rates']['USD'];
    let selectedExitCurrency = data['rates']['USD'];
    let enteredAmount = 0;

    for (let currency in data['rates']) {//
      const optionEnterCurrency = document.createElement(`option`);
      const optionExitCurrency = document.createElement(`option`);
      optionEnterCurrency.innerText = currency;
      optionExitCurrency.innerText = currency;
      enterCurrency.prepend(optionEnterCurrency);
      exitCurrency.prepend(optionExitCurrency);
    }

    enterCurrency.onchange = () => {
      selectedCurrency = data['rates'][enterCurrency.value];
      updateResult();
    };
    exitCurrency.onchange = () => {
      selectedExitCurrency = data['rates'][exitCurrency.value];
      updateResult();
    };
    sumEnterCurrency.oninput = () => {
      enteredAmount = (sumEnterCurrency.value);
      updateResult();
    };

    function updateResult() {
      result.innerHTML = `result ${(enteredAmount / selectedCurrency * selectedExitCurrency).toFixed(2)}`;
      crossCourse.innerText = `cross rate ${(selectedCurrency / selectedExitCurrency).toFixed(2)}`;
    }
  });




//
// const body = document.querySelector('body');
// body.style.backgroundColor = 'grey';
//
// const country = document.createElement(`select`);
// country.setAttribute(`placeholder`, `country`);
// const cities = document.createElement(`select`);
//
// const startCountry = document.createElement(`option`);
// startCountry.innerText = "Select a country";
// country.prepend(startCountry);
//
// const startCities = document.createElement(`option`);
// startCities.innerText = "City";
// cities.prepend(startCities);
//
// body.prepend(country, cities);
// fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
//   .then(data => {
//
//     for (let key in data) {
//       const nameCountry = document.createElement(`option`);
//       nameCountry.innerText = key;
//       country.prepend(nameCountry);
//
//       country.onchange = () => {
//         updateResult();
//       };
//
//       function updateResult() {
//         cities.innerHTML = '';
//         for (key of data[country.value]) {
//           const nameCities = document.createElement(`option`);
//           nameCities.innerText = key;
//           cities.prepend(nameCities);
//         }
//       }
//     }
//   });


