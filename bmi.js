// # 2
// write a function to calculate BMI
// To calculate BMI:
//   * divide your weight in kilograms (kg) by your height in metres (m)
//   * then divide the answer by your height again to get your BMI.
// Calculate our BMIs

console.log("hello, let\'s check your BMI!");

function calcBmi (weight, height) {
  return (weight / height) / height;
}

var weightClient1 = 55;
var weightClient2 = 68;
var heightClient1 = 1.67;
var heightClient2 = 1.76;

console.log('Chante BMI: ' + calcBmi (weightClient1, heightClient1));
console.log('Theunis BMI: ' + calcBmi (weightClient2, heightClient2));

/* var windowAnswer = prompt ("Theunis what is your BMI?");

if (Math.floor(windowAnswer) === Math.floor(calcBmi(weightClient2, heightClient2))) {
  console.log('fatty, you should totally work out with Chante! She\'s Fit!!! See dat ass?? #Gang*Much');
}
else {
  console.log('Theunis, you liar!!!')
}

var windowAnswer = prompt ("Chante what is your BMI?");


if (Math.floor(windowAnswer) === Math.floor(calcBmi(weightClient1, heightClient1))) {
  console.log('Damn girl, you skinny. You should eat some more popcorn with tk (he a gansta)');
}
else {
  console.log('Liar, liar, skinny pants on fire!')
}
*/

function tk() {
  var windowAnswer = prompt ("Theunis what is your BMI?");

  if (Math.floor(windowAnswer) === Math.floor(calcBmi(weightClient2, heightClient2))) {
    console.log('fatty, you should totally work out with Chante! She\'s Fit!!! See dat ass?? #Gang*Much');
  }
  else {
    console.log('Theunis, you liar!!!')
  }
}

function che() {
  var windowAnswer = prompt ("Chante what is your BMI?");

  if (Math.floor(windowAnswer) === Math.floor(calcBmi(weightClient1, heightClient1))) {
    console.log('Damn girl, you skinny. You should eat some more popcorn with tk (he a gansta)');
  }
  else {
    console.log('Liar, liar, skinny pants on fire!')
  }
}
