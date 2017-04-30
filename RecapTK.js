console.log("Hello, Che!");
var str = "I'm a string!";
var num = 15;
var bool = true;

var is5BiggerThan7 = 5 > 7; // :: Boolean
//console.log("is5BiggerThan7: " + is5BiggerThan7);

var is5NotEqualTo7 = 5 != 7;

var exprs = 
 { // comparisons
   is5BiggerThan7: 5 > 7
 , is5NotEqualTo7: 5 != 7
 , is5EqTo7: 5 == 7
 // boolean logic
 , is5BiggerThan3AndLessThan10: (5>3) && (5<10)
 , is5BiggerThan10OrLessThan7: (5>10) || (5 < 3)  
 // math
 , fiveTimes7: 5*7
 , fiveDiv7: 5 / 7
 };

console.log("--------------------------------");
console.log("Expressions")
console.log(exprs);

var che = {name: "Chantetjie", age: 28};
var tk = {name: "Theunis", age: 30};

var human = che;
    
console.log("--------------------------------");
console.log("If statements")
console.log("Hello " + human.name + ".");
if (human.age >= 20 && human.age < 30) {
  console.log("You are a Senior(ita) =)");
} else if (human.age >= 30) {
  console.log("You are a dead man walking, lols")
}

console.log("--------------------------------");
console.log("Functions")
function greet(human) {
  console.log("Hello " + human.name + ".");
  if (human.age >= 20 && human.age < 30) {
    console.log("You are a Senior(ita) =)");
  } else if (human.age >= 30) {
    console.log("You are a dead man walking, lols");
  }
}

greet(che);
greet(tk);

console.log("--------------------------------");
console.log("Arrays");

var humans = [che, tk];
greet(humans[0]);
greet(humans[1]);

console.log("--------------------------------");
console.log("Loops");

for (var i=0; i < humans.length; i = i + 1) {
  console.log("In the for loop at index " + i)
  greet(humans[i]);
}

var i = 0;
while (i < humans.length)
{
  console.log("In the while loop at index " + i)
  greet(humans[i]);
  // at the end increment the counter
  i = i + 1;
}

console.log("--------------------------------");
console.log("Strings as arrays");

for (var i=0; i < humans.length; i = i + 1) {
  console.log("Iterating over humans: In the for loop at index " + i);
  var currentHuman = humans[i];
  var currentHumanName = humans[i].name;
  var newName = "";
  for (var j=0; j < currentHumanName.length; j++) {
    var newChar = toLeetChar(currentHumanName[j]);
    newName = newName + newChar;
  }
  console.log("Your name in leetscript: " + newName);
}


function toLeetChar(chr) {
  switch (chr.toLowerCase()) {
    case 'a': return '4'; break;
    case 'c': return '<'; break;
    case 'e': return '3'; break;
    case 't': return '7'; break;
    case 'i': return '1'; break;
    default: return chr;
  }
}




