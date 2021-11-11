const question = document.getElementById("Question");
const Timer = document.getElementById("timer");
const HSC = document.getElementById("Highscorecont");
const answerA =  document.getElementById("A");
const answerB =  document.getElementById("B");
const answerC =  document.getElementById("C");
const answerD =  document.getElementById("D");

var questions = [
    {
        question: "Which Data Type is not a primitive? ",
        answerA: "Boolean",
        answerB: "Number",
        answerC: "String",
        answerD: "Int",
        Correct: "D"
    },
    {
        question: "What is the method for capitilizing every letter in this string 'javascript' ?",
        answerA: "'javascript'.toCaps();",
        answerB: "'javascript'.toUpperCase;",
        answerC: "'javascript'.toUpperCase();",
        answerD: "'javascript'.touppercase();",
        Correct: "C"
    },
    {
        question: "What is string interpolation? ",
        answerA: "When you change a variable's value.",
        answerB: "When you assign a string to a variable.",
        answerC: "When you insert the value of a variable into a string.",
        answerD: "When you insert a string into a string.",
        Correct: "C"
    },
    {
        question: "What is the correct way to generate a random number? ",
        answerA: "Math.random()",
        answerB: "Number.random()",
        answerC: "math.Random()",
        answerD: "math.random()",
        Correct: "A"
    },
    {
        question: "Which is not a built in method? ",
        answerA: "length()",
        answerB: "poof()",
        answerC: "pop()",
        answerD: "push()",
        Correct: "B"
    },
    {
        question: "How do you add comments in javascript? ",
        answerA: "*text-text-text*",
        answerB: "//text-text-text//",
        answerC: "/*text-text-text*/",
        answerD: "Both B and C",
        Correct: "D"
    },
    {
        question: "What is the correct syntax for making an array? ",
        answerA: "{item, item, item}",
        answerB: "[item, item, item]",
        answerC: "(item, item, item)",
        answerD: "{[item, item, item]}",
        Correct: "B"
    },
    {
        question: "What is the differnece between var and let? ",
        answerA: "var is function scoped and let is block scoped",
        answerB: "let is function scoped and var is block scoped",
        answerC: "var is page scoped and let is block scoped",
        answerD: "none of the above",
        Correct: "A"
    },
    {
        question: "Which of these is not a type of loop within javascript? ",
        answerA: "for",
        answerB: "for/up",
        answerC: "for/in",
        answerD: "for/of",
        Correct: "B"
    },
    {
        question: "Which of these is not a conditional statement within javascript? ",
        answerA: "if",
        answerB: "else",
        answerC: "switch",
        answerD: "or",
        Correct: "D"
    }
];

const lastQ = questions.length -1;
let currentQ = 0;

function renderQ(){

    let q = questions[currentQ];

    question.innerHTML = "<h1>"+q.question+"<h1>";
    answerA.innerHTML = q.answerA;
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
    answerD.innerHTML = q.answerD;
};

var Score = 0;
console.log(Score);

function Validate(answer){
    if(questions[currentQ].Correct == answer){
        announceCorrect();
        endscore();
    }else{
        announceWrong();
    }
    if (currentQ < lastQ){
        currentQ++;
        renderQ();
    }else{
        renderScorebtn();
        displayScore();
    }
};

var sec = 100;

function timer(){
    var timer = setInterval(function(){
        Timer.innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            window.location.href = "HighScores.html";
        }
    }, 1000);
};

function announceCorrect(){
    alert("That is correct!!!");
    Score++;
};

function announceWrong(){
    sec -= 10;
    alert("That is wrong minus 10 seconds.");
};

function renderScorebtn(){
    let btn = document.createElement("button");
    btn.innerHTML = "go to scores"
    document.body.appendChild(btn);
    btn.onclick = function(){
        location.href = "Highscores.html";
    }
}

function endscore(){
    totalS = Score + "/10";
    localStorage.setItem("totalS", totalS );
}

function displayScore(){
    HSC.innerHTML = "<p> Your score is " + localStorage.getItem('totalS') + "<p>";
}

function startTest(){
    renderQ();
    timer();
}