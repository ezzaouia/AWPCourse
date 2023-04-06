// TODO: Fix the errors in the functions below!

const functions = {
  checkEventLoop() {
    console.log('this is the start');

    setTimeout(() => {
      console.log('Callback 1: this is a msg from call back');
    }); // has a default time value of 0

    console.log('this is just a message');

    setTimeout(() => {
      console.log('Callback 2: this is a msg from call back');
    }, 0);

    console.log('this is the end');
  },

  executeAfterDelay(callback, delay) {
    setTimeout(callback, delay);
  },

  executeInOrder(callback1, callback2) {
    setTimeout(callback1, 0);
    setTimeout(callback2);
  },

  stopInterval(intervalId, callback) {
    clearInterval(intervalId);
    callback();
  },

  executePromise(callback) {
    const promise = new Promise((resolve) => {
      resolve({ status: true, value: 'foo' });
    });
    setTimeout(() => {
      promise.then((result) => {
        callback(result);
      });
    });
  },

  executePromises(callback) {
    const promises = [
      new Promise((resolve) => setTimeout(() => resolve('first'), 1000)),
      new Promise((resolve) => setTimeout(() => resolve('second'), 500)),
      new Promise((resolve) => setTimeout(() => resolve('third'), 250)),
    ];
    Promise.all(promises).then(callback);
  },
};

module.exports = functions;
