const rollDie = () => {
    const min = 1;
    const max = 6;
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  };
  
const results = {};
for (let i = 1; i <= 10; i++) {
  const dieRoll = rollDie();
  results[`Roll ${i}`] = dieRoll; // Ading key and values to the dictionary or map
}

// Printing the dictionary of results
console.log(results);