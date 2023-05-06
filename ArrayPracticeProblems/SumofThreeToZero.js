const sumOfThreeIntegersEqualsZero = (arr) => {
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k] === 0) {
            console.log(arr[i]+ " + " +arr[j] + " + " +arr[k]+ " Equals to ZERO")
            return true;
          }
        }
      }
    }
    return false;
  };
  
  
  const integers = [2, 3, -5, -2, 6, 1, -1];
  const result = sumOfThreeIntegersEqualsZero(integers);
  console.log(result); // Output: true
  