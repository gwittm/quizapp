// Home -- Answer-Boxes Toggle
//AnswerBox 1
const answerBox1 = document.querySelector('[data-js="card__answer__toggle1"]');
const toggleModeAnswer1 = document.querySelector(
  '[data-js="card__answer__toggle__button1"]'
);

toggleModeAnswer1.addEventListener("click", () => {
  answerBox1.classList.toggle("visible"),
    answerBox1.classList.toggle("card__answer__toggle1");

  if (answerBox1.classList.contains("visible")) {
    toggleModeAnswer1.textContent = "Hide answer";
  } else {
    toggleModeAnswer1.textContent = "Show answer";
  }
});

//Answer2
const answerBox2 = document.querySelector('[data-js="card__answer__toggle2"]');
const toggleModeAnswer2 = document.querySelector(
  '[data-js="card__answer__toggle__button2"]'
);

toggleModeAnswer2.addEventListener("click", () => {
  answerBox2.classList.toggle("visible");
  answerBox2.classList.toggle("card__answer__toggle2");

  if (answerBox2.classList.contains("visible")) {
    toggleModeAnswer2.textContent = "Hide answer";
  } else {
    toggleModeAnswer2.textContent = "Show answer";
  }
});

//Answe3
const answerBox3 = document.querySelector('[data-js="card__answer__toggle3"]');
const toggleModeAnswer3 = document.querySelector(
  '[data-js="card__answer__toggle__button3"]'
);

toggleModeAnswer3.addEventListener("click", () => {
  answerBox3.classList.toggle("visible");
  answerBox3.classList.toggle("card__answer__toggle3");

  if (answerBox3.classList.contains("visible")) {
    toggleModeAnswer3.textContent = "Hide answer";
  } else {
    toggleModeAnswer3.textContent = "Show answer";
  }
});

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

/* Slider*/
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

/* if (document.body.classList.contains("dark-theme")) {
    document.getElementById("theme-btn").innerHTML="Light Mode";
  } else if (document.body.classList.contains("light-theme")) {
    document.getElementById("theme-btn").innerHTML="Dark Mode";
  } */
