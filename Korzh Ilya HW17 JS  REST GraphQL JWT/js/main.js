function delay(ms) {
  return new Promise((fulfill) => {
    setTimeout(() => fulfill(ms), ms);
  });
}

const redCircle = document.querySelector(`.red`);
const yellowCircle = document.querySelector(`.yellow`);
const greenCircle = document.querySelector(`.green`);
async function trafficLight() {

  while (true) {

    redCircle.style.cssText = `
      opacity: 100%;
      box-shadow: 2px 2px 20px red;
    `;
    await delay(3000).then(result => redCircle.style.opacity = "30%");
    yellowCircle.style.cssText = `
      opacity: 100%;
      box-shadow: 2px 2px 20px yellow;
    `;
    await delay(3000).then(result => yellowCircle.style.opacity = "30%");
    greenCircle.style.cssText = `
      opacity: 100%;
      box-shadow: 2px 2px 20px green;
    `;
    await delay(3000).then(result => greenCircle.style.opacity = "30%");
  }
}
trafficLight();

const redCirclePedestrian = document.querySelector(`.redPedestrian`);
const greenCirclePedestrian = document.querySelector(`.greenPedestrian`);
const buttonForPedestrian = document.querySelector(`.forPedestrian`);
function domEventPromise (element , event ){
  return new Promise((fulfill) => {
    element.addEventListener(event,fulfill)
  })
}
async function trafficLightPedestrian() {

  while (true) {

    redCirclePedestrian.style.cssText = `
      opacity: 100%;
      box-shadow: 2px 2px 20px red;
    `;
    greenCirclePedestrian.style.opacity = "30%"

    await delay(3000)
    await Promise.race([domEventPromise(buttonForPedestrian,`click`),delay(10000)])
    await delay(3000)

    redCirclePedestrian.style.opacity = "30%"
    greenCirclePedestrian.style.cssText = `
      opacity: 100%;
      box-shadow: 2px 2px 20px green;
    `;

    await delay(3000)

  }

}
trafficLightPedestrian();

async function speedTest(getPromise, count, parallel) {
  const startTime = performance.now();
  const arr = [];
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < parallel; j++) {
      arr.push(getPromise());
    }
    await Promise.all(arr);
  }

  const duration = performance.now() - startTime;
  const queryDuration = duration / count;
  const querySpeed = count / queryDuration;
  const parallelDuration = duration / (count * parallel);
  const parallelSpeed = (count * parallel) / duration;

  return {
    duration,
    querySpeed,
    queryDuration,
    parallelSpeed,
    parallelDuration,
  };
}

speedTest(() => delay(1000), 10, 10).then((result) => console.log(result));



function gql(endPoint, query, variables) {
  const data = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body: JSON.stringify({ query, variables }),
  };

  return fetch(endPoint, data)
    .then(response => response.json())
    .then(data => data);
}

(async () => {
  const catQuery = `
    query cats($q: String){
      CategoryFind(query: $q){
        _id
        name
      }
    }
  `;

  const cats = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", catQuery, { q: "[{}]" });
  console.log(cats);

  const loginQuery = `
    query login($login: String, $password: String) {
      login(login: $login, password: $password)
    }
  `;

  const token = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", loginQuery, {
    login: "test457", password: "123123"
  });
  console.log(token);
})();

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw";

const jwtDecode = (token) => {

  try {
    let split = token.split('.', 2);
    return JSON.parse(atob(split[1]));
  }
  catch (e){
    console.log(e);
  }
};

console.log(jwtDecode(token));


try {
  console.log(jwtDecode())         //undefined
  console.log(jwtDecode("дічь"))   //undefined
  console.log(jwtDecode("ey.ey.ey"))   //undefined

  console.log('до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором')
}  catch (e){
  console.log(e);
}
finally{
  console.log('ДЗ, мабуть, закінчено')
}
