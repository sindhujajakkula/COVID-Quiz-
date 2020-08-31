
let questions = [
  {
    id: 1,
    question: "What is the major complication involved in a COVID-19 patient?",
    answer: "Breathing issues",
    options: [
      "Back pain",
      "Breathing issues",
      "Eye pain",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "When do the symptoms start appearing?",
    answer: "2-14 days",
    options: [
      "2-14 days",
      "immediately",
      "1 month",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the major complication involved in a COVID-19 patient?",
    answer: "Breathing issues",
    options: [
      "Back pain",
      "Breathing issues",
      "Eye pain",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "When do the symptoms start appearing?",
    answer: "2-14 days",
    options: [
      "2-14 days",
      "immediately",
      "1 month",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "What is the major complication involved in a COVID-19 patient?",
    answer: "Breathing issues",
    options: [
      "Back pain",
      "Breathing issues",
      "Eye pain",
      "None of these"
    ]
  },
  {
    id: 6,
    question: "When do the symptoms start appearing?",
    answer: "2-14 days",
    options: [
      "2-14 days",
      "immediately",
      "1 month",
      "None of these"
    ]
  },
  {
    id: 7,
    question: "What is the major complication involved in a COVID-19 patient?",
    answer: "Breathing issues",
    options: [
      "Back pain",
      "Breathing issues",
      "Eye pain",
      "None of these"
    ]
  },
  {
    id: 8,
    question: "When do the symptoms start appearing?",
    answer: "2-14 days",
    options: [
      "2-14 days",
      "immediately",
      "1 month",
      "None of these"
    ]
  },
  {
    id: 9,
    question: "What is the major complication involved in a COVID-19 patient?",
    answer: "Breathing issues",
    options: [
      "Back pain",
      "Breathing issues",
      "Eye pain",
      "None of these"
    ]
  },
  {
    id: 10,
    question: "When do the symptoms start appearing?",
    answer: "2-14 days",
    options: [
      "2-14 days",
      "immediately",
      "1 month",
      "None of these"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
