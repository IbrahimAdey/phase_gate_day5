const prompt = require("prompt-sync")();

let numStudents = parseInt(prompt("Enter number of students: "));
let numSubjects = parseInt(prompt("Enter number of subjects: "));

let subjects = [];
for (let j = 0; j < numSubjects; j++) {
  subjects.push(prompt(`Enter name for subject ${j + 1}: `));
}

let students = [];

for (let i = 0; i < numStudents; i++) {
  let name = prompt(`Enter student ${i + 1} name: `);
  let scores = {};
  for (let j = 0; j < numSubjects; j++) {
    let score;
    do {
      score = parseInt(prompt(`Enter score for ${name} in ${subjects[j]} (0-100): `));
    } while (score < 0 || score > 100);
    scores[subjects[j]] = score;
  }
  students.push({ name, scores });
}

let passCount = {}, failCount = {}, totalScores = {};
subjects.forEach(subject => { passCount[subject] = 0; failCount[subject] = 0; });

students.forEach(student => {
  let total = 0;
  for (let subject of subjects) {
    let score = student.scores[subject];
    total += score;
    if (score >= 50) passCount[subject]++;
    else failCount[subject]++;
  }
  totalScores[student.name] = total;
});

let bestSubject = subjects.reduce((a, b) => passCount[a] > passCount[b] ? a : b);
let worstSubject = subjects.reduce((a, b) => failCount[a] > failCount[b] ? a : b);

let bestStudent = Object.keys(totalScores).reduce((a, b) => totalScores[a] > totalScores[b] ? a : b);
let worstStudent = Object.keys(totalScores).reduce((a, b) => totalScores[a] < totalScores[b] ? a : b);

console.log("\n===== CLASS SUMMARY =====");
console.log(Best Subject: ${bestSubject});
console.log(Worst Subject: ${worstSubject});
console.log(Best Graduating Student: ${bestStudent} (Total: ${totalScores[bestStudent]}));
console.log(Worst Graduating Student: ${worstStudent} (Total: ${totalScores[worstStudent]}));

console.log("\nAll Students:");
students.forEach(s => console.log(${s.name} - Total Score: ${totalScores[s.name]}));