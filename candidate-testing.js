const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer =  "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let comparedAnswers = "";
//TODO: Variables for Part 2

 
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");
  
 
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  //candidateAnswer = input.question(questions);

for (let i = 0; i < questions.length; i++) {
  candidateAnswer = input.question(questions[i]);
  candidateAnswers.push(candidateAnswer);  
  console.log(candidateAnswers[i]); 
 }

 }
 

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = [];  //TODO 3.2 use this variable to calculate the candidates score.
  let sum = 0;
  for (let i = 0; i < questions.length; i++) {
   
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);
    
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
      grade.push(1/ questions.length * 100);
      console.log("Correct!" + "\n");
    } else {
      console.log("That's incorrect" + "\n");
    }
  } 

  for (i = 0; i < grade.length; i++) {
    sum += grade[i];
  }
  
  
  
  if (sum >= 80) {
    console.log(sum);
    console.log("You Passed!");
  } else { 
    console.log(sum);
    console.log("You Failed.");
  }
 
  return sum;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Well, Hello there, " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};