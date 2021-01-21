var questionToShowIndex = 0

var questions = [ {
    // include if else statement if they get right score and move forward, else deduct time and move forward in my functions on the main
    question: "which one of these is not a data type?",
    choices: [
    "string",
    "boolean",
    "number",
    "div"
    ],
    answer: "div"
    },
    {
    question: "an array is represented by which of these characters",
    choices: ["[]", "{}", "()", "#"],
    answer: "[]"
    },
    {
    question: "true and false represent what type of data type?",
    choices: [
    "boolean",
    "number",
    "string",
    "none of these"
    ],
    answer: "boolean"
    },]

    // console.log(questions[0].question);
    document.getElementById(`questions`).innerHTML = questions[questionToShowIndex].question

    for (let i = 0; i < questions[questionToShowIndex].choices.length; i++){
        var singleChoice = document.createElement(`button`)
        singleChoice.innerText = (questions[questionToShowIndex].choices[i])
         singleChoice.classList.add(`choice`)
         document.getElementById(`choices`).appendChild(singleChoice)
    //    console.log(singleChoice);
        // console.log(questions[questionToShowIndex].choices[i]);
    }

    // document.getElementById(`questions`).innerHTML = questions[questionsToShowIndex]