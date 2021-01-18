// store html elements as variables.
// javascript document to store my questions.
// store my questions in an object/container
// create function that retrieves the questions and options from the container 
// and then renders that into the div we created.

// the function needs to maintain an index of which question we’re on.
// while loop for the timer is above zero and increment the index of their questions
// set the class of the questions div to be unhidden while the loop is executing. 
// with every answer. have a condition with a loop break when the timer hits 0
// maintain a variable for their score. 
// a conditional that increments their score one if they are right, or subtracts from the timer variable 
// a set amount when they answer wrong.

var timerElement = document.getElementById("#timer")
var scoreElement = document.getElementById("#score")
var questionsElement = document.getElementById("#questions")
// remember to create buttons.

var timer = 120;
var score = 0;
var questionsIndex = 0;