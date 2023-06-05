// function Person (name, surname,) {
//   this.newName = name;
//   this.newSurname = surname;
//   this.fatherName = '';
//   this.getFullName = function () {
//     return `${this.newName} ${this.newSurname} ${this.fatherName}`;
//
//   };
// }
//
// const a = new Person("Вася", "Пупкін")
// const b = new Person("Ганна", "Іванова")
// const c = new Person("Єлизавета", "Петрова")
//
// console.log(a.getFullName()) // Василь Пупкін
// a.fatherName = 'Іванович' // Василь Іванович Пупкін
// console.log(a.getFullName())
// console.log(b.getFullName()) // Ганна Іванова
// console.log(c.getFullName()) // Ганна Іванова

// function Person (name, surname,) {
//   this.newName = name;
//   this.newSurname = surname;
//   this.fatherName = '';
//
// }
// Person.prototype.getFullName = function () {
//   return `${this.newName} ${this.newSurname} ${this.fatherName}`;
//
// };
// const a = new Person("Вася", "Пупкін")
// const b = new Person("Ганна", "Іванова")
// const c = new Person("Єлизавета", "Петрова")
//
//
// a.fatherName = 'Іванович'
// console.log(a.getFullName()) // Василь Іванович Пупкін
// console.log(b.getFullName()) // Ганна Іванова
// console.log(c.getFullName()) // Ганна Іванова

//Password
// function Password(parent, open) {
//
//   this.wrapper = document.createElement(`div`);
//   parent.append(this.wrapper);
//
//   this.input = document.createElement('input');
//   this.wrapper.prepend(this.input);
//
//   this.label = document.createElement('label');
//   this.wrapper.append(this.label);
//
//   this.checkbox = document.createElement('input');
//   this.checkbox.setAttribute(`type`, `checkbox`);
//   this.checkbox.setAttribute(`checked`, `${open}`);
//   this.label.append(this.checkbox);
//
//   this.setValue = function (value) {
//     this.input.value = value;
//     if (this.onChange) {
//       this.onChange(value);
//     }
//   };
//
//   this.getValue = function () {
//     return this.input.value;
//   };
//
//   this.setOpen = function () {
//     if (this.checkbox.checked) {
//       this.input.setAttribute(`type`, `password`);
//     } else {
//       this.input.setAttribute(`type`, `text`);
//     }
//     if (this.onOpenChange) {
//       this.onOpenChange(this.checkbox.checked);
//     }
//   };
//
//   this.getOpen = function () {
//     return this.checkbox.checked;
//   };
//
//   this.checkbox.onchange = () => {
//     this.setOpen(this.checkbox.checked);
//   };
//
//   this.input.oninput = () => {
//     this.setValue(this.input.value);
//   };
//
// }
//

// const password = new Password(document.body, true);
//
// password.button = document.createElement(`button`)
// password.wrapper.append(password.button)
// password.button.innerText= `SUBMIT`
//
// password.login = document.createElement(`input`)
// password.wrapper.prepend(password.login)
//
//
// password.setValueLogin = function (value) {
//   this.login.value = value;
//
//
//
//
// };
//
// password.getValueLogin = function () {
//   return this.login.value;
// };
// password.setValueLogin('login');
// console.log(password.getValueLogin());
//
// password.onChangeLogin = data => console.log(data);
// password.onChange = data => console.log(data);
// password.onOpenChange = open => console.log(open);
//
// password.setValue('Password');
// console.log(password.getValue());
//
// password.setOpen();
// console.log(password.getOpen());
//
// console.log(password);
//
//
//
//
// password.login.oninput = function () {
//   if (password.login.value.length < 1 || password.input.value.length < 1) {
//     password.button.disabled = true;
//   } else {
//     password.button.disabled = false;
//   }
// };
//
// password.input.oninput = function () {
//   if (password.login.value.length < 1 || password.input.value.length < 1) {
//     password.button.disabled = true;
//   } else {
//     password.button.disabled = false;
//   }
// };

// function Password(parent, open) {
//
//   this.wrapper = document.createElement(`div`);
//   parent.append(this.wrapper);
//
//   this.parol = document.createElement('input');
//   this.wrapper.prepend(this.parol);
//
//   this.label = document.createElement('label');
//   this.wrapper.append(this.label);
//
//   this.checkbox = document.createElement('input');
//   this.checkbox.setAttribute(`type`, `checkbox`);
//   this.checkbox.setAttribute(`checked`, `${open}`);
//   this.label.append(this.checkbox);
//
//   this.setValue = function (value) {
//     this.parol.value = value;
//     this.onChange(value);
//   };
//
//   this.parol.oninput = () => {
//     this.setValue(this.parol.value);
//   };
//
//   this.getValue = function () {
//     return this.parol.value;
//   };
//
//   this.setOpen = function () {
//     if (this.checkbox.checked) {
//       this.parol.setAttribute(`type`, `password`);
//     } else {
//       this.parol.setAttribute(`type`, `text`);
//     }
//     this.onOpenChange(this.checkbox.checked);
//   };
//
//   this.checkbox.onchange = () => {
//     this.setOpen(this.checkbox.checked);
//   };
//
//   this.getOpen = function () {
//     return this.checkbox.checked;
//   };
//
// }
//
// let loginForm = new Password(document.body, true);
//
// loginForm.button = document.createElement(`button`);
// loginForm.wrapper.append(loginForm.button);
// loginForm.button.innerText = `SUBMIT`;
//
// loginForm.login = document.createElement(`input`);
// loginForm.wrapper.prepend(loginForm.login);
//
// loginForm.setValueLogin = function (value) {
//   loginForm.login.value = value;
//   this.onChangeLogin(value);
// };
//
// loginForm.login.oninput = () => {
//   loginForm.setValueLogin(loginForm.login.value);
//   if (loginForm.login.value.length < 1) {
//     loginForm.button.disabled = true;
//   } else {
//     loginForm.button.disabled = false;
//   }
// };
//
// loginForm.getValueLogin = function () {
//   return this.login.value;
// };
//
// loginForm.onChangeLogin = data => console.log(data);
// loginForm.onOpenChangeLogin = open => console.log(open);
//
// loginForm.setValueLogin('Login');
// console.log(loginForm.getValueLogin());
//
// loginForm.onChange = data => console.log(data);
// loginForm.onOpenChange = open => console.log(open);
//
// loginForm.setValue('qwerty');
// console.log(loginForm.getValue());
//
// loginForm.setOpen(false);
// console.log(loginForm.getOpen());


// Password Verify
function Password(parent) {

    this.wrapper = document.createElement(`div`);
    parent.append(this.wrapper);
  
    this.input1 = document.createElement('input');
    this.wrapper.prepend(this.input1);
    this.input1.setAttribute(`type`, `password`);
    this.input1.setAttribute(`id`, `forCheckbox`);
  
    this.label = document.createElement('label');
    this.wrapper.prepend(this.label);
    this.label.setAttribute(`for`, `forCheckbox`);
  
    this.checkbox = document.createElement(`input`);
    this.checkbox.checked = true
    this.checkbox.setAttribute(`type`, `checkbox`);
    this.label.prepend(this.checkbox);
  
    this.input2 = document.createElement('input');
    this.wrapper.append(this.input2);
    this.input2.setAttribute(`type`, `password`);
  
    this.setValue1 = function (value) {
      this.input1.value = value;
      this.onChange1(value);
    };
  
    this.input1.oninput = () => {
      this.setValue1(this.input1.value);
      checked();
    };
  
    this.getValue1 = function () {
      return this.input1.value;
    };
  
    this.setValue2 = function (value) {
      this.input2.value = value;
      this.onChange2(value);
    };
  
    this.input2.oninput = () => {
      this.setValue2(this.input2.value);
      checked();
    };
  
    this.getValue2 = function () {
      return this.input2.value;
    };
    let checked = () => {
      if (this.input1.value !== this.input2.value) {
        this.input1.style.borderColor = `red`;
        this.input2.style.borderColor = `red`;
      } else {
        this.input1.style.borderColor = ``;
        this.input2.style.borderColor = ``;
      }
    };
  
    this.setOpen = function () {
      if (this.checkbox.checked) {
        this.input1.setAttribute(`type`, `password`);
        this.input2.style.opacity = `1`;
      } else {
        this.input1.setAttribute(`type`, `text`);
        this.input2.style.opacity = `0`;
      }
  
    };
  
    this.checkbox.onchange = () => {
      this.setOpen(this.checkbox.checked);
    };
  
  }
  
  let verify = new Password(document.body, true);
  
  verify.onChange1 = data => console.log(data);
  verify.setValue1('');
  console.log(verify.getValue1());
  
  verify.onChange2 = data => console.log(data);
  verify.setValue2('');
  console.log(verify.getValue2());
  
  verify.setOpen(false);
  
  