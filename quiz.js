const questions = [
    {
        question:"What does HTML stand for?",
        answers:[
            {text:"Hyperlinks and Text Markup Language",correct:false},
            {text:"Hyper Text Markup Language",correct:true},
            {text:"Home Tool Markup Language",correct:false},
            {text:" Hyper Tool Markup Language",correct:false},
        ]
    },
    {
        question:"Which CSS property is used to change the text color of an element?",
        answers:[
            {text:"text-color",correct:false},
            {text:"font-color",correct:false},
            {text:"color",correct:true},
            {text:"background-color",correct:false},
        ]
    },
    {
        question:"In JavaScript, which method is used to select an element by its ID?",
        answers:[
            {text:"getElementById()",correct:true},
            {text:"getElementsById()",correct:false},
            {text:"getElement()",correct:false},
            {text:"querySelector()",correct:false},
        ]
    },
    {
        question:"Which JavaScript framework/library uses the $ symbol as a shorthand for selecting elements?",
        answers:[
            {text:"React.js",correct:false},
            {text:"Angular.js",correct:false},
            {text:" jQuery",correct:true},
            {text:"Vue.js",correct:false},
        ]
    },
    {
        question:"Which of the following is not a valid data type in JavaScript?",
        answers:[
            {text:"String",correct:false},
            {text:"Number",correct:false},
            {text:"Float",correct:true},
            {text:"Undefined",correct:false},
        ]
    },
    {
        question:"What does the C in CSS stand for?",
        answers:[
            {text:"Computer",correct:false},
            {text:"Cascading",correct:true},
            {text:"Creative",correct:false},
            {text:"Color",correct:false},
        ]
    },
    {
        question:"Which of the following HTTP methods is used to request data from a server?",
        answers:[
            {text:"POST",correct:false},
            {text:"GET",correct:true},
            {text:"PUT",correct:false},
            {text:"DELETE",correct:false},
        ]
    },
    {
        question:"What does DOM stand for in web development?",
        answers:[
            {text:"Data Object Model",correct:false},
            {text:"Document Object Model",correct:true},
            {text:"Document Oriented Module",correct:false},
            {text:"Data Oriented Model",correct:false},
        ]
    },
    {
        question:" What is the default display property of a <div> element in CSS?",
        answers:[
            {text:"inline",correct:false},
            {text:"block",correct:true},
            {text:"inline-block",correct:false},
            {text:"flex",correct:false},
        ]
    },
    {
        question:"What is the purpose of the alt attribute in an <img> tag?",
        answers:[
            {text:"To change the size of the image.",correct:false},
            {text:" To specify the image's URL.",correct:false},
            {text:"To provide alternative text if the image cannot be displayed.",correct:true},
            {text:"To add a caption below the image.",correct:false},
        ]
    }
    ];
    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");


    let currentQuestionIndex=0;
    let score=0;

    function startQuiz(){
        currentQuestionIndex=0;
        score=0;
        nextButton.innerHTML="Next";
        showQuestion();
    }
    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
            answerButton.appendChild(button);
        });
        nextButton.style.display = "block";
    }
    
    function selectAnswer(e) {
        const selectedButton = e.target;
        const isCorrect = selectedButton.dataset.correct === "true";
        if (isCorrect) {
            selectedButton.style.backgroundColor = "green";
            score++;
        } else {
            selectedButton.style.backgroundColor = "red";
        }
        Array.from(answerButton.children).forEach(button => {
            button.disabled = true;
            if (button.dataset.correct) {
                button.style.backgroundColor = "green";
            }
        });
    }
    

    function resetState(){
        nextButton.style.display="none";
        while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild);
        }
    }

    function showScore() {
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
    

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }
    
    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    });
    

    startQuiz();