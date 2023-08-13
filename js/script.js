const questions = [{
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'In which year javaScript was launched?',
        'a': '1993',
        'b': '1995',
        'c': '1997',
        'd': '1998',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stands for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Object Notation',
        'd': 'Helicopters Terminals Motorboats',
        'correct': 'b'
    }
];
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById('question-box');
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () => {
    if (index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerHTML = ` ${index + 1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerHTML = data.a;
    optionInputs[1].nextElementSibling.innerHTML = data.b;
    optionInputs[2].nextElementSibling.innerHTML = data.c;
    optionInputs[3].nextElementSibling.innerHTML = data.d;
}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right ++;
    } 
    else{
        wrong ++;
    }
    index ++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `<h3> Thank you for playing the Quiz!</h3>
    <h2> ${right} / ${total} are correct </h2>`
}

loadQuestion();
