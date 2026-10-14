const score = 85;
let grade;

if (score >= 0 && score <= 100) {
  
  switch (true) {
    case (score >= 90):
      grade = "A";
      break;
    case (score >= 80):
      grade = "B";
      break;
    case (score >= 70):
      grade = "C";
      break;
    case (score >= 60):
      grade = "D";
      break;
    default:
      grade = "F";
  }

  console.log(`Score: ${score}
Grade: ${grade}
Status: ${score >= 60 ? "Passed" : "Failed"}`);

} else {
  console.log("Error: Score must be between 0 and 100.");
}