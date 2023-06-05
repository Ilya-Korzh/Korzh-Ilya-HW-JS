// debugger
// const table = {
//   tagName: 'table', attrs: {
//     border: "1",
//   }, children: [
//
//     {
//       tagName: 'tr', children: [{
//         tagName: "td", children: ["1x1"],
//       },
//
//         {
//           tagName: "td", children: ["1x2"],
//         },]
//     },
//
//     {
//       tagName: 'tr', children: [{
//         tagName: "td", children: ["2x1"],
//       }, {
//         tagName: "td", children: ["2x2"],
//       },]
//     }]
// };
//
// function htmlTree(table) {
//   let tagString = '';
//
//   if (table.tagName) {
//     tagString += `<${table.tagName}`;
//   }
//
//   if (table.attrs) {
//     for (const attr in table.attrs) {
//       tagString += `${attr}='${table.attrs[attr]}'`;
//     }
//   }
//
//   tagString += `>`;
//
//   if (table.children) {
//     for (let child of table.children) {
//       if (typeof child === 'string') {
//         tagString += child;
//       } else {
//         tagString += htmlTree(child);
//       }
//     }
//   }
//
//   if (table.tagName) {
//     tagString += `</${table.tagName}>`;
//   }
//
//   return tagString;
// }
//
// console.log(htmlTree(table));

// const table = {
//   tagName: 'table', attrs: {
//     border: "1",
//   }, children: [
//
//     {
//       tagName: 'tr', children: [{
//         tagName: "td", children: ["1x1"],
//       },
//
//         {
//           tagName: "td", children: ["1x2"],
//         },]
//     },
//
//     {
//       tagName: 'tr', children: [{
//         tagName: "td", children: ["2x1"],
//       }, {
//         tagName: "td", children: ["2x2"],
//       },]
//     }]
// };
//
// function htmlTree(table, parent) {
//
//   let tag = document.createElement(`${table.tagName}`);
//
//   if (table.attrs) {
//     for (const attr in table.attrs) {
//       tag.setAttribute(`${attr}`, `${table.attrs[attr]}`);
//     }
//   }
//   parent.append(tag);
//
//   if (table.children) {
//     for (let child of table.children) {
//       if (typeof child === 'string') {
//         tag.innerText = child;
//       } else {
//         htmlTree(child, tag);
//       }
//     }
//   }
// }
//
// htmlTree(table, document.body);

// function stringify(arr) {
//   let string = '';
//
//   if (Array.isArray(arr)) {
//     string += '[';
//     for (let element of arr) {
//
//       if (typeof element === 'object' && element !== null) {
//         string += stringify(element);
//       } else if (typeof element === 'string') {
//         string += `"${element}", `;
//       } else if (element !== undefined) {
//         string += `${element}, `;
//       }
//     }
//     string = string.slice(0, -2);
//     string += ']';
//   }
//
//   if (typeof arr === 'object' && arr !== null && !Array.isArray(arr)) {
//     string += '{';
//     for (const element in arr) {
//       if (Array.isArray(arr[element])) {
//         string += `"${element}": ${stringify(arr[element])}, `;
//       } else if (arr[element] !== undefined){
//         string += `"${element}": ${arr[element]}, `;
//       }
//     }
//     string = string.slice(0, -2);
//     string += '}, ';
//   }
//   return string;
// }
//
// const arr = [1, "string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
// const jsonString = stringify(arr);
// console.log(JSON.parse(jsonString))

// function getElementById(idToFind,parent) {
//   let data = {};
//   function walker(parent) {
//     for (const child of parent.children) {
//       try {
//         if (child.id) {
//           throw child;
//         }
//       } catch (e) {
//         data[e.id] = e.tagName;
//       }
//       walker(child);
//     }
//   }
//   walker(parent);
//   return data[idToFind];
// }
// getElementById("h1-1",document.body);


