// import Modal from './modal.js';

const modalDiv = document.querySelector('.modal');
console.log(modalDiv);
const btn = document.querySelector('.button-login');
console.log(btn);
// let form;

class Modal {
  createModalForm() {
    this.form = document.createElement('form');
    this.form.classList.add('form');
    modalDiv.appendChild(this.form);
  }
}
class LoginForm extends Modal {
  loginAreas() {
    const inputEmail = document.createElement('input');
    inputEmail.classList.add('input-login');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('placeholder', 'email');
    inputEmail.setAttribute('value', '');
    this.form.appendChild(inputEmail);
    console.log(inputEmail.getAttribute('value'));
    const inputPassword = document.createElement('input');
    inputPassword.classList.add('input-login');
    inputPassword.setAttribute('type', 'password');
    inputPassword.setAttribute('placeholder', 'password');
    inputPassword.setAttribute('value', '');
    this.form.appendChild(inputPassword);
    const inputSubmit = document.createElement('input');
    inputSubmit.classList.add('input-submit');
    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('value', 'Submit');
    this.form.appendChild(inputSubmit);
    // inputSubmit.addEventListener('click', async function () {
    //   let url = 'http://cards.danit.com.ua/login';
    //   let response = await fetch(url);
    //   let text = response.text();
    //   console.log(text);
    // });
  }
}

const loginModal = new LoginForm();

btn.addEventListener('click', function (e) {
  e.preventDefault();
  loginModal.createModalForm();
  loginModal.loginAreas();
});

//   // checkInputs() {
//   //   if (form === '') {
//   //     console.log(form);
//   //     const spanEnter = document.createElement('span');
//   //     spanEnter.textContent = 'Enter email and password';
//   //     form.appendChild(spanEnter);
//   //   }
//   // }
// }
