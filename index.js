var index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 00];
var element = index[2];
console.log(element);

index[10] = [10];
index[11] = [10];
console.log(index)

var positionIndex = index.indexOf(00)
console.log(positionIndex)

let myArray = [2, 3, 4, 5];
myArray.push(6);
myArray.pop()
myArray.unshift(1);
console.log(myArray); // Output: [1, 2, 3, 4, 5]

let mYArray = [1, 2, 3, 4, 5];
let removedElement = mYArray.shift();
console.log(mYArray); // Output: [2, 3, 4, 5]
// console.log(removedElement); // Output: 1
var ami = 85;
var tom = 65;
var jane = 95;
var petter = 56;
var jhon = 40;

if (80 <= ami) {
  console.log("pash");
}
var now = 1;
while (now <= 101) {
  console.log("now");
  now++;
};

var numbers = [12, 23, 45, 6, 7, 76, 545, 66, 44, 768, 86, 346, 452, 346, ]
for (var index = 0; index < numbers.length; index++) {
  var number = numbers[index];
  console.log(number)

}
for (let index = 0; index <= 100; index++) {
  console.log(index)
  if (index > 50) {
    break
  }
}
var numbers = [12, 23, 34, 45, 56, 67, 78, 89, 90, 00, ]
for (var index = 0; index < numbers.length; index++) {
  var number = numbers[index];
  console.log(number)
  if (number > 50) {
    continue
  }

}
var index = 10;
while (index >= 1) {
  console.log(index);
  index--;
}
for (var index = 11; index >= 1; index--) {
  console.log(index)

}

var firstString = "I am going to be ";
var secondString = "an awsome web developer ";
var finalReport = firstString + secondString;
console.log(finalReport)

// Define a function to calculate grades
function calculateGrade(score) {
  if (score >= 80) {
    return 'A';
  } else if (score >= 60) {
    return 'B';
  } else if (score >= 50) {
    return 'C';
  } else if (score >= 40) {
    return 'D';
  } else {
    return 'F';
  }
}

// Define scores for you and your friends
const scores = {
  'You': 85,
  'Tom': 66,
  'Jane': 95,
  'Peter': 56,
  'John': 40
};

// Calculate and print grades for each person
for (const person in scores) {
  const score = scores[person];
  const grade = calculateGrade(score);
  console.log(`${person}'s grade is ${grade}`);
}

function bringSingara(money) {
  var singaraPrice = 20;
  var contity = money / singaraPrice;
  return contity;
}
var singaras = bringSingara(500);
console.log(singaras)
var student = {
  name: "Arman Shahriar",
  Roll: 960,
  class: "Nine",
  Section: "Ikra",
  Shift: "Day"
};
console.log(student.Roll);
var properties = Object.keys(student);
console.log(properties);
var value = Object.values(student);
console.log(value);
student.Roll = 1010;
console.log(student)

function make_avg() {
  var num1 = 10;
  var num2 = 20;
  var num3 = 30;
  var sum = num1 + num2 + num3;
  var avg = sum / 3;
  return avg
}
console.log(make_avg())

function foo() {
  console.log("foo")
  bar()
}
function bar() {
  console.log("bar")
}
foo();
function odd_even(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Example usage:
console.log(odd_even(4)); // Output: Even
console.log(odd_even(7)); // Output: Odd
var color = "red";
if (color === "red") {
  console.log("Stop!")
} else if (color === "yellow") {
console.log("Stop")
} else {
console.log("Go Now")
};
function inchesToFeet(inches) {
  const feet = inches / 12;
  return feet;
}
const ami = 126;
const aniFeet = inchesToFeet(ami);
console.log(aniFeet);
const aai = 1234567890;
const aaiFeet = inchesToFeet(aai);
console.log(aaiFeet);
function isEven(numbers) {
  const reminder = numbers % 2;
  if (reminder === 0) {
    return true;
  }
  else{
    return false;
  };
}
var myNumberIsEven = isEven(102837);
console.log(myNumberIsEven);
var herNumberIsEven = isEven(32982198)
console.log(herNumberIsEven);
const check = 34;
const out = isEven(check);
console.log(out);
function arrayOfNumbers(receve) {
  let sum = 0
  for (let i = 0; i < receve.length; i++) {
    const index = i;
    const element = receve[index];
    if (element % 2 !== 0) {
      sum = sum + element;
      console.log(index, element, sum)
    }
  }
}
const numberOf = [12, 23, 1, 3, 1, 22, 343, 44, 56, 677, 54, ]
arrayOfNumbers(numberOf)