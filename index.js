// import Modal from './modal.js';

const modalDiv = document.querySelector('.modal');
console.log(modalDiv);
const btn = document.querySelector('.button-login');
console.log(btn);

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

    // addEventListener('click', async function () {
    //   let url = 'http://cards.danit.com.ua/login';
    //   let response = await fetch(url);
    //   let text = response.text();
    //   console.log(text);
    // });
  }
}

const loginModal = new LoginForm();
let counter = 0;
btn.addEventListener('click', function (e) {
  if (counter) {
    console.log('we have modal');
  } else {
    e.preventDefault();
    loginModal.createModalForm();
    loginModal.loginAreas();
    counter++;
  }
});

// 123123@gmail.com.ua
// 11111
// tocken fe87f221-bd9c-4bff-a3cb-c9098b24c339

// obj = {
//   inputEmailValue: this.inputEmail.value,
//   inputPasswordValue: this.inputPassword.value,
// };

const url = 'https://ajax.test-danit.com/api/cards/login';
const forms = () => {
  const message = {
    loading: 'Звгрузка...',
    success: 'С вами скоро свяжутся',
    failure: 'Что-то пошло не так',
  };
};
LoginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  modalDiv.appendChild('statusMessage');
});

const formData = new FormData();
const postLoginForm = async (url, formData) => {
  let res = await fetch(url, {
    method: 'POST',
    body: 'formData',
  });

  return await res.text();
};
