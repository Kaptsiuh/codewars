const sumTwoSmallestNumbers = (numbers) =>
  numbers.sort((a, b) => a - b)[0] + numbers.sort((a, b) => a - b)[1];
