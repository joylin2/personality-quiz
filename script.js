//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var engineerScore = 0;
var authorScore = 0;
var artistScore = 0;
var chefScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var qa4 = document.getElementById("q3a4");

var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", chef);
q1a2.addEventListener("click", engineer);
q1a3.addEventListener("click", author);
q1a4.addEventListener("click", artist);

q2a1.addEventListener("click", chef);
q2a2.addEventListener("click", engineer);
q2a3.addEventListener("click", author);
q2a4.addEventListener("click", artist);

q3a1.addEventListener("click", chef);
q3a2.addEventListener("click", engineer);
q3a3.addEventListener("click", author);
q3a4.addEventListener("click", artist);

//#TODO: Define quiz functions here
function engineer(){
  engineerScore += 1;
  questionCount += 1;

  if (questionCount >= 3){
    updateResult();
  }
}

function author(){
  authorScore += 1;
  questionCount += 1;
  
  if (questionCount >= 3){
    updateResult();
  }
}

function artist(){
  artistScore += 1;
  questionCount += 1;
  
  if (questionCount >= 3){
    updateResult();
  }
}

function chef(){
  chefScore += 1;
  questionCount += 1;
  
  if (questionCount >= 3){
    updateResult();
  }
}

function updateResult(){
 if (engineerScore >= 2){
  result.innerHTML = "You would make a great Engineer!";
 }
 else if(authorScore >=2){
  result.innerHTML = "You are born to be an Author!";
 }
 else if(chefScore >=2){
  result.innerHTML = "You would be the best chef!"
 }
 else if (artistScore>= 2){
  result.innerHTML = "Artist!! You're going to create the next Mona Lisa!"
 }
 else{
  result.innerHTML = "You have so many opportunities ahead of you! You would be successful in any job!!"
 }
}