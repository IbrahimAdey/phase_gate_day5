const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
     "A. Expand energy, enjoy groups\nB. Conserve energy, enjoy one-on-one",
     "A. Interpret literally\nB. Look for meaning and possibilities",
     "A. Logical, thinking, questioning\nB. Empathetic, feeling, accomodating",
     "A. Organized, orderly\nB. Flexible, adaptable",
     "A. More outgoing\nB. More reserved",
     "A. Focus on the now\nB. Focus on the future",
     "A. Value justice\nB. Value compassion",
     "A. Prefer a plan\nB. Go with the flow",
     "A. Enjoy crowds\nB. Enjoy solitude",
     "A. Trust experience\nB. Trust intuition",
     "A. Firm\nB.  Gentle",
     "A. Regulated, structured\nB. easy-going, live and let live",
     "A. External, communicative\nB. Internal, keep to youself",
     "A. Focus on here-and-now\nB. Look to the future",
     "A. Tough-minded, just\nB. Tender-hearted, merciful",
     "A. Preparation, plan ahead\nB. Go with the flow, adapt as you go",
     "A. Active, initiate\nB.Reflective, delibrate",
     "A. Facts, things\nB. Ideas, dreams, philosophical",
     "A. Matter of fact, issue-oriented\nB. Sensitive, people-oriented",
     "A. Control, govern\nB. Latitude, freedom"
];

let index = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function askNext() {
  if (index >= questions.length) {
    let mbti = "";
    mbti += scores.E >= scores.I ? "E" : "I";
    mbti += scores.S >= scores.N ? "S" : "N";
    mbti += scores.T >= scores.F ? "T" : "F";
    mbti += scores.J >= scores.P ? "J" : "P";
    console.log(\nYour MBTI type is: ${mbti});
    rl.close();
    return;
  }

  console.log(\nQuestion ${index + 1});
  console.log(questions[index]);
  rl.question("Choose A or B: ", (answer) => {
    answer = answer.trim().toUpperCase();
    if (answer === "A" || answer === "B") {
      switch (index % 4) {
        case 0: answer === "A" ? scores.E++ : scores.I++; break;
        case 1: answer === "A" ? scores.S++ : scores.N++; break;
        case 2: answer === "A" ? scores.T++ : scores.F++; break;
        case 3: answer === "A" ? scores.J++ : scores.P++; break;
      }
      index++;
      askNext();
    } else {
      console.log("Invalid. Choose only A or B.");
      askNext();
    }
  });
}

askNext();