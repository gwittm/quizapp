// Home -- Answer-Boxes Toggle
//AnswerBox 1
/* const answerBox1 = document.querySelector('[data-js="card__answer__toggle1"]');
const toggleModeAnswer1 = document.querySelector(
  '[data-js="card__answer__toggle__button1"]'
);

toggleModeAnswer1.addEventListener("click", () =>
  answerBox1.classList.toggle("visible")
); */

/* if (document.body.classList.contains("dark-theme")) {
    document.getElementById("theme-btn").innerHTML="Light Mode";
  } else if (document.body.classList.contains("light-theme")) {
    document.getElementById("theme-btn").innerHTML="Dark Mode";
  } */

/* const answerBox2 = document.querySelector('[data-js="card__answer__toggle2"]');
const toggleModeAnswer2 = document.querySelector(
  '/* [data-js="card__answer__toggle__button2"]'
);

toggleModeAnswer2.addEventListener("click", () => {
  answerBox2.classList.toggle("visible");
});

const answerBox3 = document.querySelector('[data-js="card__answer__toggle3"]');
const toggleModeAnswer3 = document.querySelector(
  '[data-js="card__answer__toggle__button3"]'
);

toggleModeAnswer3.addEventListener("click", () => {
  answerBox3.classList.toggle("visible"); */

//Home Bookmarks Toggle
const bookmarkButton1 = document.querySelector('[data-js="card__bookmark_1"]');
const bookmarkIcon1 = document.querySelector('[data-js="ribbon1"]');

const bookmarkButton2 = document.querySelector('[data-js="card__bookmark_2"]');
const bookmarkIcon2 = document.querySelector('[data-js="ribbon2"]');

const bookmarkButton3 = document.querySelector('[data-js="card__bookmark_3"]');
const bookmarkIcon3 = document.querySelector('[data-js="ribbon3"]');

bookmarkButton1.addEventListener("click", () => {
  bookmarkIcon1.classList.toggle("choose");
});

bookmarkButton2.addEventListener("click", () => {
  bookmarkIcon2.classList.toggle("choose");
});

bookmarkButton3.addEventListener("click", () => {
  bookmarkIcon3.classList.toggle("choose");
});
