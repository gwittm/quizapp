/* const bodyElement = document.querySelector('[data-js="body"]');


const toggleMode = document.querySelector('[data-js="toggle__button"]');
toggleMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
}); */



const answerBox1 = document.querySelector('[data-js="card__answer__toggle1"]');

const toggleModeAnswer1 = document.querySelector('[data-js="card__answer__toggle__button1"]');
toggleModeAnswer1.addEventListener("click", () => {
  answerBox1.classList.toggle("visible");
});


const answerBox2 = document.querySelector('[data-js="card__answer__toggle2"]');

const toggleModeAnswer2 = document.querySelector('[data-js="card__answer__toggle__button2"]');
toggleModeAnswer2.addEventListener("click", () => {
  answerBox2.classList.toggle("visible");
});


const answerBox3 = document.querySelector('[data-js="card__answer__toggle3"]');

const toggleModeAnswer3 = document.querySelector('[data-js="card__answer__toggle__button3"]');
toggleModeAnswer3.addEventListener("click", () => {
  answerBox3.classList.toggle("visible");
});