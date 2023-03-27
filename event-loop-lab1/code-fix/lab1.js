// TODO: Fix the errors in the functions below!

const functions = {
  checkEventLoop() {
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
    // use setTimeout
    callback(delay);
  },

  executeInOrder(callback1, callback2) {
    setTimeout(callback1, 10);
    setTimeout(callback2);
  },

  stopInterval(intervalId, callback) {
    // use clearInterval
    callback();
  },

  executePromise(callback) {
    const promise = new Promise((resolve) => {
      resolve({ status: false, value: 'bar' });
    });
    setTimeout(() => {
      promise.then((result) => {
        callback(result);
      });
    });
  },

  executePromises(callback) {
    const promises = [
      new Promise((resolve) => setTimeout(() => resolve(), 1000)),
      new Promise((resolve) => setTimeout(() => resolve(), 500)),
      new Promise((resolve) => setTimeout(() => resolve(), 250)),
    ];
    Promise.all(promises).then(callback);
  },
};

module.exports = functions;
