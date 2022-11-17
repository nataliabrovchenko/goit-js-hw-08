const form = document.querySelector(`.feedback-form`);
const input = document.querySelector(`.email message`);

form.addEventListener(`submit`, onFormSubmit);
input.addEventListener(`input`, onInput);

function onFormSubmit(event) {
    event.preventDefault();

    console.log(`отправка`)
}