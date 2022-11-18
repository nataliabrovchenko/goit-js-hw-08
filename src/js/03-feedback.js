import throttle from 'lodash.throttle';

const STORAGE_KEY = `feedback-form-state`;

const form = document.querySelector(`.feedback-form`);
const textarea = document.querySelector(`.feedback-form textarea`);

form.addEventListener(`submit`, onFormSubmit);
textarea.addEventListener(`input`, throttle(onInput, 500));

populateMessage();

function onInput(event) {
    const message = event.currentTarget.value;
    localStorage.setItem(STORAGE_KEY, message);
} 

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateMessage() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    
    if(savedMessage) {
        textarea.value = savedMessage;
    }
}

