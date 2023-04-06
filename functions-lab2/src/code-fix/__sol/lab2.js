// TODO: Fix the errors in the functions below!

const functions = {
  // This function takes an array of numbers, multiplies each number by 2, and returns the sum of even numbers.
  sumDoubledEvenNumbers(numbers) {
    // filter even number... num % 2 === 0
    // double numbers
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    const doubledNumbers = evenNumbers.map((num) => num * 2);
    const sum = doubledNumbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
  },

  // This function takes an array of numbers and returns a new array with each number squared.
  squareNumbers(numbers) {
    const squaredNumbers = numbers.map((num) => num ** 2);
    return squaredNumbers;
  },

  // This function takes an array of strings and returns a new array with only the strings that contain the letter 'a'.
  filterStrings(strings) {
    const filteredStrings = strings.filter((str) => str.includes("a"));
    return filteredStrings;
  },

  // This function takes an array of numbers and returns the sum of all the numbers in the array.
  sumReduceNumbers(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
  },

  // This function takes an array of numbers and returns the sum of all the numbers in the array.
  sumEachNumbers(numbers) {
    let sum = 0;
    numbers.forEach((n) => {
      sum += n;
    });
    return sum;
  },

  // removes last element of an array and returns it
  lastOne(array) {
    return array.pop();
  },

  // add one one element to an array
  addNewElement(arr, newOne) {
    arr.push(newOne);
    return arr;
  },

  // removes first element from an array and returns a new array
  removeFirstElement(arr) {
    return arr.shift();
  },

  // add elements to the top of an array
  unshiftIt(arr, ...elements) {
    arr.unshift(...elements);
    return arr;
  },

  // add elements to the top of an array
  unshift2It(arr, ...elements) {
    return [...elements, arr];
  },

  // takes an array, a starting index, the number of elements to remove, and any number of additional items to insert into the array at the specified starting index
  spliceIt(arr, start, deleteCount, ...items) {
    return arr.splice(start, deleteCount, ...items);
  },

  // takes an array and two indices (start and end) as parameters, and returns a new array containing the elements from the original array between the start and end indices (excluding the element at the end index)
  sliceIt(array, start, end) {
    return array.slice(start, end);
  },

  // concat two arrays
  concatIt(arr1, arr2) {
    return arr1.concat(arr2);
  },

  indexOfIt(arr, element) {
    return arr.indexOf(element);
  },

  includesIt(array, value) {
    return array.includes(value);
  },

  findIt(array, callback) {
    return array.find(callback);
  },

  findIndexIt(arr, predicate) {
    return arr.findIndex(predicate);
  },

  // takes an array arr and a callback function, and returns a boolean value indicating whether every element in the array satisfies the condition specified by the callback function
  everyIt(arr, callback) {
    return arr.every(callback);
  },

  // takes an array arr and a callback function, returns true if at least one element in the array satisfies the condition specified in the callback function
  someIt(arr, func) {
    return arr.some(func);
  },

  joinIt(arr, separator) {
    return arr.join(separator);
  },
};

module.exports = functions;
