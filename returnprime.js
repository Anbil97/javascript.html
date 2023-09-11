// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Function to return all prime numbers in an array
  function findPrimeNumbers(arr) {
    const primeNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        primeNumbers.push(arr[i]);
      }
    }
    return primeNumbers;
  }
  
  // Sample array
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  // Call the function to find prime numbers in the array
  const primeNumbers = findPrimeNumbers(numbers);
  
  // Print the prime numbers
  console.log(primeNumbers);
  