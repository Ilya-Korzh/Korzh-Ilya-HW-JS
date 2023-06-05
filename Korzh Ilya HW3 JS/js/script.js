// //String: greeting
// //Запитайте у користувача ім'я та привітайте його за допомогою alert.
// let name = prompt('What is your name ?');
// alert(`Hello ${name}`);

// // String: gopni4ek
// let stringWithComma = prompt("enter some string with comma");
// let stringWithoutComma = stringWithComma.split(",");
// let stringWithPancake = stringWithoutComma.join(" , pancake ");

// // String: capitalize
// let str = "cANBerRa";
// let firstLetter = str[0].toUpperCase();
// let endStrict = str.slice(1).toLowerCase();
// let result = `${firstLetter}${endStrict}`;
// console.log(result); //Canberra

// // Порахуйте кількість слів у рядку.
// let string = "word count";
// let arr = string.split(" ");
// console.log(arr.length);

// // String: credentials
// let firstName =  prompt("Enter first name").trim();
// let lastName = prompt("Enter last name").trim();
// let middleName = prompt("Enter middle name").trim();
// let fullName =  `${lastName[0].toUpperCase()}${lastName.slice(1)} ${firstName[0].toUpperCase()}${firstName.slice(1)} ${middleName[0].toUpperCase()}${middleName.slice(1)}`
// console.log(fullName);

//// String: beer
// let str = "Було жарко. Василь пив пиво вприкуску з креветками"
// let result = str.split("пиво").join("чай")
// console.log(result) //"Було

// // String: no tag
// let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
// let open = str.indexOf("<");
// let close = str.indexOf(">");
// let result = str.slice(0, open) + str.slice(close + 1);
// let bigTeg = str.slice(open, close +1).toUpperCase();
// let resultBigTeg = str.slice(0, open)+ bigTeg + str.slice(close + 1)
// console.log( result);
// console.log( resultBigTeg);


// let lineWithoutGApe = prompt("input string wig \n ")
// // let divideString = lineWithoutGApe.split("\\n")//// зачем эта тавтология нужна, если пользователь сам разделяет ?
// // let joinString = divideString.join("\n")
// alert(lineWithoutGApe)




 // let enter = prompt("enter string  with youtube link");
 // const regularExpression = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
 // let youtubeLink = enter.match(regularExpression)[1];
 // let iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>;`
 // document.write(iframe)