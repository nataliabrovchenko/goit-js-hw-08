import throttle from 'lodash.throttle';

const STORAGE_KEY = `feedback-form-state`;

const form = document.querySelector(`.feedback-form`);

form.addEventListener(`input`, throttle(onInput, 500));
form.addEventListener(`submit`, onFormSubmit);
form.addEventListener(`load`, onLoad);

populateMessage();

function onInput(event) {
    event.preventDefault();
    const email = form.email.value;
    const message = form.message.value;    
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));    
  }

function onLoad (event) {
    event.preventDefault();
    const textDataForm = localStorage.getItem(STORAGE_KEY);
    const dataForm = JSON.parse(textDataForm);
    const {email, message} = dataForm;
    form.email.value = email;
    form.message.value = message;
}

function onFormSubmit(event) {
    event.preventDefault();
    const {email, message} = event.currentTarget;
    console.log({email: email.value, message: message.value})
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateMessage() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if(savedMessage) {
        form.value = savedMessage;
    }
}