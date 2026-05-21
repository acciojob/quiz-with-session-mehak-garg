//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
	let questionsElement=document.querySelector("#questions");
let score=document.querySelector("#score");
	let userAnswers=new Array(5);
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
	questionsElement.innerHTML="";
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);

		if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
		sessionStorage.setItem("progress",JSON.stringify(userAnswers));
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}
renderQuestions();
let btn=document.querySelector("#submit");
btn.addEventListener("click",()=>{
	for(let i=0;i<questions.length;i++)
		{
const selected = document.querySelector(`input[name="question-${i}"]:checked`);
if(selected)
			userAnswers[i]=selected.value;
		}
renderQuestions();
	let score_value=0;
	for(let i=0;i<5;i++)
		{
			if(userAnswers[i]===questions[i].answer)
			{
				score_value++;
			}
		}
	score.innerHTML=`Your score is ${score_value} out of 5.`;
})









