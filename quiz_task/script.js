let allQuestions= [];

async function fetchQuestions() {
    const numberInput = document.getElementById("numberInput");
    const number = numberInput.value;

    if(number < 1 || number > 50 ){
        const inputMsg= document.querySelector("#inputMsg");
        inputMsg.style.display= "block";
        document.querySelector("#numberInput").focus();
        numberInput.value="";

        return;
    }

    inputMsg.style.display= "none";

    numberInput.value="";

    const loadMsg= document.querySelector("#loadMsg");
    loadMsg.style.display= "block";
    
    const res = await fetch(`https://opentdb.com/api.php?amount=${number}`);
    const data = await res.json();

    loadMsg.style.display= "none";

    const allResults = data.results;
    allQuestions= allResults;

    let quizBox = document.querySelector("#quizBox");
    quizBox.innerHTML = ""; 
    quizBox.style.display = "block";

    allResults.forEach((result, index) => {

        const card = document.createElement("div");
        card.className = "question";

        card.innerHTML = `<h3>${index + 1}. ${result.question}</h3>`;
   
        let options = result.incorrect_answers.concat([result.correct_answer]);

        options.sort(() => Math.random() - 0.5);

        const optionsDiv = document.createElement("div");
        optionsDiv.className = "options";

    
        options.forEach((opt, i) => {
            const optionItem = document.createElement("div");
            optionItem.className = "option-item";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `${index}`;   
            radio.value = opt;

            const label = document.createElement("label");
            label.innerHTML = opt;

            optionItem.addEventListener("click", () => {
                radio.click();
            });

            optionItem.appendChild(radio);
            optionItem.appendChild(label);
            optionsDiv.appendChild(optionItem);
        });

        card.appendChild(optionsDiv);
        quizBox.appendChild(card);
    });


    const submit= document.createElement('button');
    submit.id= "submitBtn";
    submit.innerText= "Submit";
    quizBox.appendChild(submit);

    submit.addEventListener("click", () => {
        submitQuiz();
    })
}

function submitQuiz() {
    //Validation
    for(let i=0; i<allQuestions.length; i++){
        const select= document.querySelector(`input[name="${i}"]:checked`);
        if(!select){
            showMsg();
            return;
        }
    }

    const headingRes= document.querySelector("h2");
    headingRes.style.display= "block";

    const resultsBox = document.getElementById("resultsBox");
    resultsBox.innerHTML = "";
    resultsBox.style.display = "block";

    const header= document.createElement("div");
    header.className= "header-row result-row";
    header.innerHTML= `
        <div>Question</div>
        <div>Result</div>
        <div>Your Answer</div>
        <div>Correct Answer</div>
    `;
    resultsBox.appendChild(header);

    let correctCount= 0;
    let incorrectCount= 0;

    allQuestions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="${index}"]:checked`);

        let userAnswer = selected.value;
        let correctAnswer = question.correct_answer;
        const isCorrect = userAnswer === correctAnswer;

        if(isCorrect){
            correctCount++;
        }
        else{
            incorrectCount++;
        }

        const row= document.createElement("div");
        row.className= "result-row";
        row.innerHTML= `
            <div>${question.question}</div>
            <div>${isCorrect ? "Correct" : "Incorrect"}</div>
            <div>${userAnswer}</div>
            <div>${correctAnswer}</div>
        `;
        resultsBox.appendChild(row);  
    });

    const score= document.createElement("div");
    score.className= "score";
    score.innerHTML= `
        <div>
            <p><b>Total Correct:</b> ${correctCount}</p>
            <p><b>Total Incorrect:</b> ${incorrectCount}</p>
        </div>    
        <button id="tryAgainBtn">Try Again</button>
    `;
    
    resultsBox.appendChild(score);
    
    const tryAgainBtn= document.getElementById("tryAgainBtn");
    tryAgainBtn.addEventListener("click", () => {
        window.location.reload();
    })
    
}

function showMsg() {
    const box = document.querySelector("#msgBox");
    box.innerText = "Please answer all questions!";
    box.style.display = "block";
}

document.addEventListener("change", (e) => {
    if(e.target.type === "radio"){
        document.querySelector("#msgBox").style.display= "none";
    }
});

window.onload= () => {
    document.querySelector("#numberInput").focus();
}

const numberInput = document.querySelector("#numberInput");
numberInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter")
        fetchQuestions();
});


