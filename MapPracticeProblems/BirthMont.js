const birthMonths = [];

for (let i = 0; i < 50; i++) {
  // Generate a random birth month between January (0) and December (11)
  const birthMonth = Math.floor(Math.random() * 12);

  // Generate a random birth year between 1992 and 1993
  const birthYear = Math.floor(Math.random() * 2) + 1992;

  // Add the birth month and year to the array
  birthMonths.push({ month: birthMonth, year: birthYear });
}

console.log(birthMonths);

const groupedBirthMonths = {};

birthMonths.forEach((person) => {
  const month = person.month;
  if (!groupedBirthMonths[month]) {
    groupedBirthMonths[month] = [];
  }
  groupedBirthMonths[month].push(person);
});

console.log(groupedBirthMonths);