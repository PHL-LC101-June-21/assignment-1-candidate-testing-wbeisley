const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question= "";
let correctAnswer = "";
let candidateAnswer = "";
let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5 Kilometer == 5000 meters. ", "3) (5+3)/2*10=? ", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Candidate Name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  /* candidateAnswer = input.question("1. Who was the first American woman in space? ")*/
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i] + '\n' + "Your Answer: ");
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      console.log(`Correct Answer: ${correctAnswers[i]}`)
    console.log('\n')
    } else {(console.log(`Correct Answer: ${correctAnswers[i]}`));
    console.log('\n')}
    
  }

} 



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 /*  if (candidateAnswers === correctAnswers) {
    console.log(`${candidateAnswers} is correct.`);
  } else (console.log(`Incorrect. The correct is answer is ${correctAnswers}`)) */

  let grade = 0;

  for (let i = 0; i < correctAnswers.length; i++) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      grade += 1;
    }

  }
  const userGrade = (grade / correctAnswers.length) * 100;

  if (userGrade >= 80) {
    console.log(`>>> Overall Grade: ${userGrade}% (${grade} of 5 responses correct) <<<\n>>> Status: PASSED <<<`)
  } else (console.log(`>>> Overall Grade: ${userGrade}% (${grade} of 5 responses correct) <<<\n>>> Status: FAILED <<<`))

  
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  // console.log("Greetings, " + candidateName);
  askQuestion();
  gradeQuiz(candidateAnswers);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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