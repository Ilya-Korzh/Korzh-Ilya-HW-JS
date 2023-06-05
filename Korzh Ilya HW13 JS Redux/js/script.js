//
// function reducer(state, { type, what, HowMany, money }) {
//   if (!state) {
//     return {
//       beer: { quantity: 100, price: 1 },
//       chips: { quantity: 100, price: 2 },
//       cigarettes: { quantity: 100, price: 3 },
//
//     };
//   }
//
//   const totalPrice = state[what].price * HowMany
//
//
//
//     if (money < totalPrice) {
//       return state;
//     }
//
//
//   if (type === 'buy') {
//     const newQuantity = state[what].quantity - HowMany;
//     if (newQuantity < 0 ) {
//       return state;
//     }
//
//     return {
//       ...state,
//       [what]: {...what, quantity: newQuantity}
//     };
//   }
//   return state;
// }

// function reducer(state, { type, what, HowMany, money }) {
//   if (!state) {
//     return {
//       beer: { quantity: 100, price: 1 },
//       chips: { quantity: 100, price: 2 },
//       cigarettes: { quantity: 100, price: 3 },
//       kassa: 0
//     };
//   }
//
//
//   if (type === 'buy') {
//     if (money < state[what].price * HowMany) {
//       return state;
//     }
//     const newQuantity = state[what].quantity - HowMany;
//     if (newQuantity < 0 ) {
//       return state;
//     }
//
//     return {
//       ...state,
//       [what]: {...what, quantity: newQuantity},
//       kassa: state.kassa + money
//     };
//   }
//   return state;
// }
function reducer(state, { type, what, HowMany, money }) {
  if (!state) {
    return {
      beer: { quantity: 100, price: 1 },
      chips: { quantity: 100, price: 2 },
      cigarettes: { quantity: 100, price: 3 },
      kassa: 0
    };
  }


  if (type === 'buy') {
    if (money < state[what].price * HowMany) {
      return state;
    }
    const newQuantity = state[what].quantity - HowMany;
    if (newQuantity < 0 ) {
      return state;
    }

    return {
      ...state,
      [what]: {...state[what], quantity: newQuantity},
      kassa: state.kassa + +money
    };
  }
  return state;
}

function createStore(reducer) {
  let state = reducer(undefined, {});
  let cbs = [];

  const getState = () => state;
  const subscribe = (cb) => {
    cbs.push(cb);
    return () => {
      cbs = cbs.filter(c => c !== cb);
    };
  };



  const dispatch = action => {
    const newState = reducer(state, action);
    if (newState !== state) {
      state = newState;
      for (let cb of cbs) cb();
    }
  };

  return {
    getState, dispatch, subscribe
  };
}


const store = createStore(reducer);

const body = document.body;

const selectItem = document.createElement("select");

const inputItem = document.createElement("input");
inputItem.setAttribute("type", "number");
inputItem.setAttribute("id", "quantity");

const labelForInputItem = document.createElement(`label`);
labelForInputItem.setAttribute(`for`, `quantity`);
labelForInputItem.innerText = `quantity: `;

const inputMoney = document.createElement("input");
inputItem.setAttribute("type", "number");
inputItem.setAttribute("id", "money");

const labelForInputMoney = document.createElement(`label`);
labelForInputMoney.setAttribute(`for`, `money`);
labelForInputMoney.innerText = `customer money: `;

const buttonItem = document.createElement("button");
buttonItem.innerText = "buy";

body.append(selectItem, labelForInputItem, inputItem, labelForInputMoney, inputMoney, buttonItem);




for (const key in store.getState()) {

  const element = document.createElement('div');
  element.setAttribute('id', key);

  if (store.getState()[key].quantity) {
    element.innerText = key + ': ' + store.getState()[key].quantity + ', price ' + store.getState()[key].price;
  }else{
    element.innerText = key + ': ' + store.getState()[key]
  }

  body.append(element);

  const optionItem = document.createElement("option");
  optionItem.innerText = key;
  selectItem.append(optionItem);

}


const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  for (const key in state) {
    const element = document.getElementById(key);
    if (state[key].quantity) {
      element.innerText = `${key}: ${state[key].quantity}`;
    }else {
      element.innerText = `${key}: ${state[key]}`;
    }
  }
  document.title = `Current balance: ${state.kassa}`;
});





buttonItem.onclick = () => {

  let goods = selectItem.value;
  let quantity = inputItem.value;
  let customerMoney =inputMoney.value
  store.dispatch({ type: 'buy', what: goods, HowMany: quantity, money: customerMoney });
  console.log(goods, quantity);
  console.log(store.getState())
};


