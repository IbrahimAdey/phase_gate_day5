const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = 0;
let question = 1;
const total = 10;

const quetion1 = What is 1 + 1 = 2 ? ;
const answer1 = (a)True, (b)false ;
const correct1 = (a)True;

const quetion2 = What is 1 + 4 = 5 ? ;
const answer2 = (a)True, (b)false ;
const correct2 = (a)True;

const quetion3 = What is 11 + 11 = 1111 ? ;
const answer3 = (a)True, (b)false ;
const correct3 = (b)false;

const quetion4 = What is 1 * 1 = 2 ? ;
const answer4 = (a)True, (b)false ;
const correct4 = (b)false;

const quetion5 = What is 1 * 0 = 10 ? ;
const answer5 = (a)True, (b)false ;
const correct5 = (b)false;

const quetion6 = What is 11 * 1 = 11 ? ;
const answer6 = (a)True, (b)false ;
const correct6 = (a)True;

const quetion7 = What is 1 / 1 = 0 ? ;
const answer7 = (a)True, (b)false ;
const correct7 = (b)false;

const quetion8 = What is 10 + 12 = 22? ;
const answer8 = (a)True, (b)false ;
const correct8 = (a)True;

const quetion9 = What is 10 + 3 = 13 ? ;
const answer9 = (a)True, (b)false ;
const correct9 = (a)True;

const quetion10 = What is 1 - 1 = 0 ? ;
const answer10 = (a)True; (b)false ;
const correct10 = (a)True;

function ask() {
  const question = Math.floor(Math.random() * 10) + 1;
  

  let tries = 0;

 function askQuestion() {
  rl.question('Enter question (1-10), or 0 to finish: ', function(input) {
    let questionNumber = parseInt(input);
    let questionAnswer = parse(input);

    if (itemNumber === 0) {
      rl.close();
    } else if (questionNumber === 1 && questionAnswer === 1) {
	if (answer === correct) {
      console.log('correct answer' + correct1);
       } else {
      console.log('incorrect  answer' + correct1);
      askQuestion();
   } else if (questionNumber === 2 && questionAnswer === 2) {
	if (answer === correct) {
      console.log('correct answer' + correct2);
       } else {
      console.log('incorrect  answer' + correct2);
      askQuestion();
   } else if (questionNumber === 3 && questionAnswer === 3) {
	if (answer === correct) {
      console.log('correct answer' + correct3);
       } else {
      console.log('incorrect  answer' + correct3);
      askQuestion();
   } else if (questionNumber === 4 && questionAnswer === 4) {
	if (answer === correct) {
      console.log('correct answer' + correct4);
       } else {
      console.log('incorrect  answer' + correct4);
      askQuestion();
   } else if (questionNumber === 5 && questionAnswer === 5) {
	if (answer === correct) {
      console.log('correct answer' + correct5);
       } else {
      console.log('incorrect  answer' + correct5);
      askQuestion();
   } else if (questionNumber === 6 && questionAnswer === 6) {
	if (answer === correct) {
      console.log('correct answer' + correct6);
       } else {
      console.log('incorrect  answer' + correct6);
      askQuestion();
   } else if (questionNumber === 7 && questionAnswer === 7) {
	if (answer === correct) {
      console.log('correct answer' + correct7);
       } else {
      console.log('incorrect  answer' + correct7);
      askQuestion();
   } else if (questionNumber === 8 && questionAnswer === 8) {
	if (answer === correct) {
      console.log('correct answer' + correct8);
       } else {
      console.log('incorrect  answer' + correct8);
      askQuestion();
   } else if (questionNumber === 9 && questionAnswer === 9) {
	if (answer === correct) {
      console.log('correct answer' + correct9);
       } else {
      console.log('incorrect  answer' + correct9);
      askQuestion();
   } else if (questionNumber === 10 && questionAnswer === 10) {
	if (answer === correct) {
      console.log('correct answer' + correct10);
       } else {
      console.log('incorrect  answer' + correct10);
      askQuestion();
    } else {
      console.log('Please enter a valid item number (1-10) or 0 to finish.');
      askQuestion();
    }
  });
}

console.log('Questionaire');
console.log('Questions:');
console.log('1: (a)True');
console.log('2: (a)True');
console.log('3: (b)false');
console.log('4: (b)false');
console.log('5: (b)false');
console.log('6: (a)True');
console.log('7: (b)false');
console.log('8: (a)True');
console.log('9: (a)True');
console.log('10: (a)True');

console.log('Enter 0 when done.\n');

askquestion();
