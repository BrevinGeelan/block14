function filterOddNumbers(numbers) {
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    return oddNumbers.length === 1 ? oddNumbers[0] : oddNumbers;
  }
  
  const numbers = [2, 4, 6, 8, 11, 20, 15, 22];
  const oddNumbers = filterOddNumbers(numbers);
  console.log(oddNumbers);