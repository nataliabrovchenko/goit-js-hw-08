import throttle from 'lodash.throttle';

const STORAGE_KEY = `feedback-form-state`;

const form = document.querySelector(`.feedback-form`);

form.addEventListener(`input`, throttle(onInput, 500));
form.addEventListener(`submit`, onFormSubmit);
window.addEventListener(`load`, onLoad);

function onInput(event) {
    event.preventDefault();
    const email = form.elements.email.value;
    const message = form.elements.message.value;    
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));    
};

function onLoad (event) {
    event.preventDefault();
    const savedData = localStorage.getItem(STORAGE_KEY);
        savedDataForm = JSON.parse(savedData);
        Object.entries(savedDataForm).forEach(([name, value]) => {
          form.elements[name].value = value;
        });
};

function onFormSubmit(event) {
    event.preventDefault();
    const {email, message} = event.currentTarget;
    console.log({email: email.value, message: message.value})
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};