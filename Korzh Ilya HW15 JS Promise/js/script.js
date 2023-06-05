// function createTable(luke, parent) {
//   let table = document.createElement(`table`);
//   parent.prepend(table);
//
//   let header = document.createElement(`tr`);
//   table.append(header);
//   for (const param in luke) {
//     let td = document.createElement(`td`);
//     td.innerText = `${param}`;
//     td.style.cssText = `
//           border:1px solid crimson ;
//           padding: 0px 5px;
//         `;
//     header.append(td);
//   }
//
//   let body = document.createElement(`tr`);
//   table.append(body);
//   for (const param in luke) {
//     let td = document.createElement(`td`);
//
//     if (typeof luke[param] === 'object') {
//       for (const objElement of luke[param]) {
//         let div = document.createElement(`div`);
//         let a = document.createElement(`a`);
//         a.setAttribute(`href`, `${objElement}`);
//         a.innerText = `${objElement}`;
//         div.append(a);
//         td.append(div);
//       }
//     } else if (luke[param].startsWith('https')) {
//       let a = document.createElement(`a`);
//       a.setAttribute(`href`, `${luke[param]}`);
//       a.innerText = `${luke[param]}`;
//       td.append(a);
//
//     } else {
//       td.innerText = `${luke[param]}`;
//     }
//     td.style.cssText = `
//           border:1px solid crimson ;
//           padding: 0px 5px;
//         `;
//     body.append(td);
//   }
// }
//
// fetch('https://swapi.dev/api/people/1/')
//   .then(res => res.json())
//   .then(luke => {
//     createTable(luke, document.body);
//   });

// function createTable(luke, parent) {
//   let table = document.createElement(`table`);
//   parent.prepend(table);
//
//   let header = document.createElement(`tr`);
//   table.append(header);
//   for (const param in luke) {
//     let td = document.createElement(`td`);
//     td.innerText = `${param}`;
//     td.style.cssText = `
//           border:1px solid crimson ;
//           padding: 0px 5px;
//         `;
//     header.append(td);
//   }
//
//   let body = document.createElement(`tr`);
//   table.append(body);
//   for (const param in luke) {
//     let td = document.createElement(`td`);
//
//     if (typeof luke[param] === 'object') {
//       for (const objElement of luke[param]) {
//         let button = document.createElement(`button`);
//         button.innerText = objElement;
//         button.onmouseover = function () {
//           button.style.cursor = 'pointer';
//         };
//         button.onclick = function () {
//           fetch(objElement)
//             .then(res => res.json())
//             .then(rez => createTable(rez, td));
//         };
//         td.append(button);
//       }
//     } else if (typeof luke[param] === 'string' && luke[param].startsWith('https')) {
//       let button = document.createElement('button');
//       button.innerText = luke[param];
//       button.onmouseover = function () {
//         button.style.cursor = 'pointer';
//       };
//       button.onclick = function () {
//         fetch(luke[param])
//           .then(res => res.json())
//           .then(rez => createTable(rez, td));
//       };
//       td.append(button);
//     } else {
//       td.innerText = luke[param];
//     }
//
//     td.style.cssText = `
//       border: 1px solid crimson;
//       padding: 0px 5px;
//     `;
//     body.append(td);
//   }
// }
//
// fetch('https://swapi.dev/api/people/1/')
//   .then((res) => res.json())
//   .then((luke) => createTable(luke, document.body));

// const luke = fetch('https://swapi.dev/api/people/1/').then(res => res.json())
// const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))
// Promise.race([luke,delay(197)]).then(rez=>console.log(rez)  )

// function confirmPromise(text) {
//   function executor(resolve, reject) {
//     const result = confirm(text);
//     if (result) {
//       resolve();
//     } else {
//       reject();
//     }
//   }
//
//   return new Promise(executor);
// }
//
// confirmPromise('Проміси це складно?')
//   .then(() => console.log('не так вже й складно'))
//   .catch(() => console.log('respect за посидючість і уважність'));


function promptPromise(text){
  function executor(resolve, reject) {
    const name = prompt(text)
    if (name) {
      resolve(name);
    } else {
      reject();
    }
  }
  return new Promise(executor);
}
promptPromise("Як тебе звуть?")
  .then(name => console.log(`Тебе звуть ${name}`))
  .catch(() => console.log('Ну навіщо морозитися, нормально ж спілкувалися'))
