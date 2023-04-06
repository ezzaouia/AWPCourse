// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw Error('Arguments should be 2 numbers!');
    }
    return a + b;
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    return array.map((element) => element * 2);
  },

  checkForBadWords(input) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    if (input.includes('crap')) {
      // nothing happens
      throw Error('Bad word detected');
    }
  },

  nameOfWeekDay(index) {
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sonday',
    ];
    return days[index];
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    return array.sort((a, b) => a - b);
  },

  createCounterFunction() {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    return `Hello ${name}. Are you well?`;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
    callback(1, 2);
    // callback();
  },

  combineArrays(array1, array2) {
    return [...array1, ...array2];
  },

  promiseMeMoney() {
    return new Promise((resolve, reject) => {
      resolve('money');
    });
  },
};

module.exports = functions;
