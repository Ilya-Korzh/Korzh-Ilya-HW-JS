// const makeProfileTimer = start => end => end - start;
// const start = makeProfileTimer(performance.now());
// alert('Вимiрюємо час роботи цього alert');
// alert(start(performance.now()));
//
//
// const start2 = makeProfileTimer(performance.now());
// prompt('');
// alert(`Час роботи двух аlert та одного prompt ${start(performance.now())}`);
// alert(`Час роботи prompt та попереднього alert ${start2(performance.now())}`);

// const makeSaver = (random) => {
//   let savedValue = null;
//   let isFirst = true;
//   return function () {
//     if (isFirst) {
//       savedValue = random();
//       isFirst = false;
//     }
//     return savedValue;
//   };
// };
//
// const saver = makeSaver(Math.random);
// const value1 = saver();
// const value2 = saver();
// console.log(value1 === value2);

debugger

function myBind(pow, math, arr,) {

  return function (...param) {

    let fullArr = arr.slice()
    for (let i = 0; i < arr.length; i++) {

      if (arr[i] === undefined) {
        fullArr[i] = param[0];
        param.shift()
      }
    }

    console.log(pow.apply(math, fullArr));

  };
}

let pow5 = myBind(Math.pow, Math, [, 5]);
let cube = myBind(Math.pow, Math, [, 3])

pow5(2) // => 32, викликає Math.pow(2,5), співвіднесіть з [undefined, 5]
pow5(4) // => 1024, викликає Math.pow(4,5), співвіднесіть з [undefined, 5]
cube(3) // => 27


let chessMin = myBind(Math.min, Math, [, 4, , 5,, 8,, 9])
chessMin(-1,-5,3,15) // викликає Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5

// function checkResult(original, validator) {
//   function wrapper(...params) {
//     let result;
//     do {
//       result = original.apply(this, params);
//     }
//     while (!validator(result)) {
//       console.log(result)
//     }
//   }
//
//   return wrapper;
// }
//
// // const numberPrompt = checkResult(prompt, x => !isNaN(+x));
// // let number = +numberPrompt("Введіть число", "0");
//
// const gamePrompt   = checkResult(prompt, x => ['камень', 'ножиці', 'папір'].includes(x.toLowerCase()))
// const turn         = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'")

//задачки

// // Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// //
// //   Однако, его вызов приводит к ошибке. Почему?
// //
// //   Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).
//
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password === "rockstar") ok();
//   else fail();
// }
//
// let user = {
//   name: 'Вася',
//
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
//
// };
//
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Использование частично применённой функции для логина
// важность: 5
// Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".
//
//  Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
//
//   function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password === "rockstar") ok();
//     else fail();
//   }
//
//   let user = {
//   name: 'John',
//
//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };
//
// askPassword(user.login.bind(user,true),user.login.bind(user,false)); // ?
// //Ваши изменения должны затрагивать только выделенный фрагмент кода.

//
// function info(phone, email) {
//   console.log(`Name: ${this.name} phone: ${phone} email: ${email}`);
// }
// const person = {
//   name: 'Illya',
// };
//
//
//
// //////////////////////////////////////////////////////////////////
// // function bind(fn, context, ...rest) {
// //   return function (...args) {
// //     const uniqId = Math.random();
// //
// //     context[uniqId] = fn;
// //
// //     let result = context[uniqId](...rest.concat(args));
// //     delete context[uniqId];
// //     return result
// //
// //   };
// //
// // }
// /////////////////////////////////////////////////////////////////////
// // function bind(fn, context) {
// //   const rest = Array.prototype.slice.call(arguments,2)
// //   return function () {
// //     const arg = Array.prototype.slice.call(arguments)
// //     fn.apply(context, rest.concat(arg))
// //   }
// // }
// ////////////////////////////////////////////////////////////////////////////
// function bind(fn, context, ...rest) {
//   return function (...args) {
//     fn.apply(context, rest.concat(args));
//   };
// }
//
// bind(info, person)(`12345`, `ilyakorzh95@Gmail.com`);
// bind(info, person, `12345`,)(`ilyakorzh95@Gmail.com`);
// bind(info, person, `12345`, `ilyakorzh95@Gmail.com`)();





