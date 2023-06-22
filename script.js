const quizAp =[
    {
        question: "Q1: What is  the full form of HTML?",
        a:"Hello To my Land",
        b:"Hey Text Markup language",
        c:"HyperText Markup Language",
        d:"HyperTaxt Marking lang",
        ans:"ans3"
    },
    {
        question: "Q2: What is  the full form of CSS?",
        a:"Cataloge showcase sheet",
        b:"Cascading Style Sheet",
        c:"catering style sheet",
        d:"cascading showcase sheet",
        ans:"ans2"
    },
    {
        question: "Q3: What is  the full form of JS?",
        a:"JavaScript",
        b:"Java Programming",
        c:"Just Script",
        d:"Java Sheets",
        ans:"ans1"
    },
    {
        question: "Q4: What is H tag in html?",
        a:"Horizontal",
        b:"Lining",
        c:"spanning",
        d:"Heading",
        ans:"ans4"
    },
    {
        question: "Q5: Which tag do we use to write a paragraph?",
        a:"<h>",
        b:"<a>",
        c:"<p>",
        d:"<span>",
        ans:"ans3"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{

    const questionList = quizAp[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizAp[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizAp.length){
        loadQuestion();
    }else{

        showscore.innerHTML = `<h3>You Scored ${score}/${quizAp.length}</h3>
        <button class="btn" onclick="Location.reload()">Play Again</button>`;
        showscore.classList.remove('scoreArea');
    }
});