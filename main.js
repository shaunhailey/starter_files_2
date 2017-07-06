// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

// Your answer here
let num1=3
let num2=5

function max(num1, num2) {

 if (num1 > num2) {
  console.log(num1)}
}

if(num2 > num1) {
  console.log(num2)
}

else if(num1 === num2) {
    console.log(num1, num2)
  }


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.



function maxOfThree(num3, num4, num5) {
  if (num3 > num4 && num3 > num5)
  console.log (num3)
  else if (num4 > num3 && num4 > num5)
  console.log (num4)
  else if (num5 > num3 && num5 > num4)
  console.log (num5)
}

maxOfThree(10, 20, 30)

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

let char = "a"

function isVowel(char) {
    if (char = "a" || "e" || "i" || "o" || "u" || "y")
    {
      console.log ('vowel')
    }
    else {
      console.log ('consonant')
    }
}

isVowel("a")




// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(NumA, NumB) {
  console.log (NumA + NumB)
}

sum(5, 8)

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function Avg(NumC, NumD, NumE) {
  console.log ((NumC + NumD + NumE) / 3)
}

Avg(8, 11, 4)


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
var x = '123456'
var empty = ' '

function getLength(x) {
  console.log (x.length)
}
getLength(x)

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan (firstNum, secondNum) {
  if (firstNum > secondNum) {
    console.log('false')
  }
  if (firstNum < secondNum) {
    console.log('true')
  }
}
greaterThan(4, 3)

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
var name = 'Archibald'

function greet (name) {
  console.log('Hello, ' + name + '!')
}

greet(name)

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.


function madlib (verb, adjective, noun, Name1) {
  console.log(Name1 + ' ' + verb + ' ' + 'a ' + adjective + ' ' + noun + ' in the rear.')
}

madlib('boinked', 'randy', 'goat', 'Archibald')
