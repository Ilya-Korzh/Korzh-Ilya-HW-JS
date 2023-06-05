////assign: evaluation
// let a = 5;   //создание переменной а и присвоение значения 5
// let b, c;     //создание переменной b и c
//
// b = a * 5;    //присвоение значения переменной b через выражение а = 25
// b = c = b / 2;  // присвоение значения переменной с = 12,5 через выражение, замена  значения переменной b = 12,2

////Number: age
// let birthday = prompt('enter your birthday in format  mm-dd-yy');
// let birthDate = new Date(birthday);
// let today = new Date();
//
// let age = today.getFullYear() - birthDate.getFullYear();
// let monthDiff = today.getMonth() - birthDate.getMonth();
//
// if (monthDiff < 0 ) {
//   age--;
// }
// alert('Your age is '+age + ' ' + 'years')

////Number: temperature
// let tempInCel = prompt('what is the temperature in your room in degrees Celsius ?');
// let tempInFar = (tempInCel * 9/5) + 32;
// alert('Temperature in your room '+ tempInFar + ' degrees Fahrenheit');

//// Number: divide
// let a = prompt('a / b = x enter a ' )
// let b = prompt('a / b = x enter b ' )
// let x = a/b
// alert('x = ' + Math.round(x))

// // Number: currency
// const rate = 36.85;
// let currency = prompt('Which currency do you want to change UAH or USD');
// let sum = prompt('Which sum do you want to change ? ');
// let changeMoney;
// if (currency === 'UAN') {
//   changeMoney = sum / rate;
// alert('You get ' + changeMoney.toFixed(2) + ' USD')
// }
// else {
//   changeMoney = sum * rate;
//   alert('You get ' + changeMoney.toFixed(2) + ' UAN')
// }

// // Number: RGB
// let red = prompt('red  enter number from 0 to 255')
// let green = prompt('green  enter number from 0 to 255')
// let blue = prompt('blue  enter number from 0 to 255')
// let red16 = Number(red).toString(16);
// let green16 = Number(green).toString(16);
// let blue16 =  Number(blue).toString(16);
// alert('HEX color #' + red16 + green16 + blue16)

// // Number: flats
// let level = prompt('how many level in a entrance?');
// let flat = prompt('how many flat in a level?');
// let flatSearch = prompt('What flat need to find?');
// let sumLevel = Math.ceil(flatSearch / flat);
// let sumEntrance = Math.ceil(sumLevel / level);
// let levelFind = sumLevel % level;
// alert('Flat is located in ' + sumEntrance + '  entrance on 3 level');