const task = prompt('Enter task ');
if (task === 'Number: odd') {

  let number = prompt('enter number');

  if (number.toUpperCase() === number.toLowerCase()) {

    if (number % 2 === 0) {
      alert('double');
    } else {
      alert('not double');
    }

  } else {
    alert('You wrote the wrong message');
  }
}
else if (task === 'String: lexics') {
const word = prompt('write word here')
  const badWorld = 'console.lox'
 if  (badWorld.includes(word)) {
   alert ('You write wrong word')
 }
}
else if (task === 'Boolean') {
  const question = confirm('yes or not ?');
  console.log(question);
}
else if (task === ' Boolean: if') {
  const sex = confirm('Your sex male or female');
  if (sex) {
    alert('Hello MAN');
  } else {
    alert('you are woman');
  }
}
else if (task === 'Comparison: sizes') {
  const size = prompt('chart of measurements from English to USA');
  let numberSize = Number(size);
  if (numberSize === 8) {
    alert(6);
  } else if (numberSize === 10) {
    alert(8);
  } else if (numberSize === 12) {
    alert(10);
  } else if (numberSize === 14) {
    alert(12);
  } else if (numberSize === 16) {
    alert(14);
  } else if (numberSize === 18) {
    alert(16);
  } else if (numberSize === 20) {
    alert(18);
  } else if (numberSize === 22) {
    alert(20);
  } else {
    alert('You wrote the wrong size');
  }
}
else if (task === 'Ternary') {
  const sex = confirm('Your sex male or female');
  sex ? alert('Hello MAN') : alert('you are woman');
}
else if (task === 'Prompt: or') {
  let age = prompt('How old are you?');
  Number(age) || alert('WRONG');
}
else if (task === 'Confirm: or this days') {
  let robot = confirm('Shopping?');
  robot || alert("ти - бяка");
}
else if (task === 'Confirm: if this days') {
  let robot = confirm('Shopping?');
  if (!robot) {
    alert("ти - бяка");
  }
}
else if (task === 'Default: or') {
  let firstName = prompt("Enter firstName");
  let averageName = prompt("Enter averageName");
  let lastName = prompt("Enter lastName");

  firstName || (firstName = 'Nikolay');
  averageName || (averageName = 'Nikolaevich');
  lastName || (lastName = 'Nikolaev');

  const fullName = `${lastName}  ${firstName} ${averageName}`;

  alert(fullName);
}
else if (task === 'Default: if') {
  let firstName = prompt("Enter firstName");
  let averageName = prompt("Enter averageName");
  let lastName = prompt("Enter lastName");

  if (!firstName) {
    firstName = 'Nikolay';
  }
  if (!averageName) {
    averageName = 'Nikolaevich';
  }
  if (!lastName) {
    lastName = 'Nikolaev';
  }

  const fullName = `${lastName}  ${firstName} ${averageName}`;

  alert(fullName);
}
else if (task === 'Login and password') {
  const login = prompt('Enter login');
  let password;

  if (login === 'admin') {
    password = prompt('Enter password');
    if (password === 'qwerty') {
      alert('Hello');
    } else {
      alert('Wrong');
    }
  } else {
    alert('Wrong');
  }
}
else if (task === 'Currency exchange') {

  const currency = prompt('enter currency USD or EUR').toLowerCase();
  const bayOrSell = confirm('what do you want to do with currency, bay or sell?');
  let changeSum;
  let rate = 0;
  if (currency === 'usd') {
    if (bayOrSell) {
      rate = 38.55;
    } else {
      rate = 38.70;
    }
  } else if (currency === 'eur') {
    if (bayOrSell) {
      rate = 40.95;
    } else {
      rate = 41.15;
    }
  }
  let sum = prompt('Which sum do you want to change');

  if (bayOrSell) {
    changeSum = sum / rate;
  } else {
    changeSum = sum * rate;
  }
  alert(changeSum.toFixed(2));

}
else if (task === 'Scissors') {

  let random = Math.floor(Math.random() * 3) + 1;
  const player = (prompt('let\'s play game \'scissor stone paper\'')).toLowerCase();
  const tool = 'scissor stone paper';
  if (!tool.includes(player)) {
    alert('WRONG');
  }

  random === 1 ? random = 'paper' : random === 2 ? random = 'scissors' : random === 3 ? random = 'stone' : null;

  if (random === player) {
    alert('Won the friendship');
  } else if ((random === 'paper' && player === 'scissors') || (random === 'scissors' && player === 'stone') || (random === 'stone' && player === 'paper')) {
    alert('You won');
  } else {
    alert('loser');
  }
}
else if (task === 'Black belt') {

  let random = Math.floor((Math.random() * 3) + 1);
  const player = (prompt('let\'s play game \'scissor stone paper\'')).toLowerCase();
  const tool = 'scissor stone paper';
  if (!tool.includes(player)) {
    alert('WRONG');
  }

  random === 1 ? random = 'paper' : random === 2 ? random = 'scissors' : random === 3 ? random = 'stone' : null;

  random === player ? alert('Won the friendship') : (random === 'paper' && player === 'scissors') || (random === 'scissors' && player === 'stone') || (random === 'stone' && player === 'paper') ? alert('You won') : alert('loser');
}
