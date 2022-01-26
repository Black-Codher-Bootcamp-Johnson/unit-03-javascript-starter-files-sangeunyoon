// function getGrade(total){
//   let grade;
//   switch (true){
//     case
//       grade = "A+";
//       break;
//       case 80:
//       grade= "A";
//       break;
//       default:
//         grade="Fail";
//   }
// }

function getGrade(total) {
  let grade;

  switch (true) {
    case total > 90:
      grade = "A+";
      break;
    case total > 80:
      grade = "A";
      break;
    case total > 70:
      grade = "B";
      break;
    case total > 60:
      grade = "c";
      break;
    case total > 50:
      grade = "D";
      break;
    case total > 40:
      grade = "E";
      break;
    case total > 30:
      grade = "F";
      break;

    default:
      grade = "Fail";
  }
  return grade;
}
console.log(getGrade(60));

// function getGrade(total) {
//   if (total > 90) {
//     return "A+";
//   } else if (total > 80 && total <= 90) {
//     return "A";
//   } else if (total > 70 && total <= 80) {
//     return "B";
//   } else if (total > 60 && total <= 70) {
//     return "C";
//   } else if (total > 50 && total <= 60) {
//     return "D";
//   } else if (total > 40 && total <= 50) {
//     return "E";
//   } else if (total > 30 && total <= 40) {
//     return "F";
//   } else {
//     return "fail";
//   }
// }

// console.log(getGrade(40));

// A+ if total is greater than 90.
// ○ A if total is greater than 80 and less than or equal to 90.
// ○ B if total is greater than 70 and less than or equal to 80.
// ○ C if total is greater than 60 and less than or equal to 70.
// ○ D if total is greater than 50 and less than or equal to 60.
// ○ E if total is greater than 40 and less than or equal to 50.
// ○ F if total is greater than 30 and less than or equal to 40.
// ○ “Fail” is total is less than 30-
