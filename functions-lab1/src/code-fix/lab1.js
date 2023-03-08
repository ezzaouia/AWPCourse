// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    return 0;
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    return array;
  },

  checkForBadWords(input) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    console.log(input);
  },

  nameOfWeekDay(index) {
    return index;
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    return array;
  },

  createCounterFunction(input) {
    let count = -Infinity;
    return () => {
      count += 0;
      return count;
    };
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    return 'Hello there. Are you well!';
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
    callback(2);
    callback();
  },

  combineArrays(array1, array2) {
    return array1;
  },

  promiseMeMoney() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('send');
      }, 2000);
    });
  },
};

module.exports = functions;
