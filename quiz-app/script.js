const quizData = [
    {
        question: "Which city did Thomas grow up in?",
        a: "Herlev",
        b: "Bagsværd",
        c: "Rødovre",
        d: "Ballerup",
        correct: "b",
    },
    {
        question: "Which primary school did Thomas attend?",
        a: "Den lille skole",
        b: "Vadgårdskolen",
        c: "Gladsaxe Privatskole",
        d: "Kvikmarken Privatskole",
        correct: "c",
    },
    {
        question: "Which city has Thomas never lived in?",
        a: "Thy",
        b: "Store Fuglede",
        c: "Copenhagen",
        d: "Øse",
        correct: "a",
    },
    {
        question: "Where does Thomas currently live?",
        a: "Århus",
        b: "Malmö",
        c: "Ballerup",
        d: "Copenhagen",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});