/*
An array is a systematic arrangement of the same type of data.
But in java script Array is a variable
which contains multiple values 
may be of same type or different type since by default in java script everything is treated as a string.
An array is zero-based i.e. indexing start with 0.
*/ 

const randomNumberArray = [];

for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 900) + 100;
  randomNumberArray.push(randomNumber);
}

console.log(randomNumberArray);

let largest = -Infinity;
let secondLargest = -Infinity;
let smallest = Infinity;
let secondSmallest = Infinity;
/*
Infinity is a built-in global object that represents positive infinity.
It is a special value that is greater than any other number,
including the maximum safe integer (Number.MAX_SAFE_INTEGER).
Infinity is often used in JavaScript to represent a value that is too large to be represented by a number, 
or as a placeholder value when a calculation or comparison would otherwise result in an error.
*/

for (let i = 0; i < randomNumberArray.length; i++) {
  const currentNumber = randomNumberArray[i];

  if (currentNumber > largest) {
    secondLargest = largest;
    largest = currentNumber;
  } else if (currentNumber > secondLargest) {
    secondLargest = currentNumber;
  }

  if (currentNumber < smallest) {
    secondSmallest = smallest;
    smallest = currentNumber;
  } else if (currentNumber < secondSmallest) {
    secondSmallest = currentNumber;
  }
}

console.log(`2nd largest element: ${secondLargest}`);
console.log(`2nd smallest element: ${secondSmallest}`);

console.log("After Sorting: ")
for (let i = 0; i < randomNumberArray.length - 1; i++) {
    for (let j = i + 1; j < randomNumberArray.length; j++) {
      if (randomNumberArray[i] > randomNumberArray[j]) {
        const temp = randomNumberArray[i];
        randomNumberArray[i] = randomNumberArray[j];
        randomNumberArray[j] = temp;
      }
    }
  }
  
  console.log(randomNumberArray);
  
  const secondLargest1 = randomNumberArray[randomNumberArray.length - 2];
  const secondSmallest2 = randomNumberArray[1];
  
  console.log(`2nd largest element: ${secondLargest1}`);
  console.log(`2nd smallest element: ${secondSmallest2}`);