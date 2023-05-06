const findRepeatedDigits = () => {
    const repeatedDigits = [];
  
    for (let i = 10; i < 100; i++) {
      const digit1 = i % 10;  //Adding the remainder or 2nd number to the digit1 variable
      const digit2 = Math.floor(i / 10); // adding 1st number or digit to the digit2 variable
  
      if (digit1 === digit2) { // comparing those two varables values
        repeatedDigits.push(i); //If condition true it will get added to the array
      }
    }
  
    return repeatedDigits; // returning the array
  };
  

  const result = findRepeatedDigits();
  console.log(result);
  