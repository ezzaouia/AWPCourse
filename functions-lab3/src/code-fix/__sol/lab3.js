// TODO: Fix the errors in the functions below!

const functions = {
  orderTotal(order) {
    const totalNormalItems = order.items
      .filter((x) => !x.shipping)
      .reduce((prev, cur) => prev + cur.quantity * cur.price, 0);

    const shippingItem = order.items.find((x) => !!x.shipping);
    const shipping = totalNormalItems > 1000 ? 0 : shippingItem.price;
    return totalNormalItems + shipping;
  },

  addPositive(array) {
    let sum = 0;
    array.forEach((number) => {
      if (number > 0) {
        sum += Number(number);
      }
    });
    return sum;
  },

  /** Takes a string, find the first consecutively repeating character in it and return it's index. If there are no repeating characters, return -1. This function should ignore any spaces and should be case insensitive - treat 'a' as eqivalent to 'A'. */
  repeatingChar(string) {
    for (let i = 0; i < string.length - 1; i++) {
      if (
        string[i] !== " " &&
        string[i].toUpperCase() === string[i + 1].toUpperCase()
      ) {
        return i + 1;
      }
    }
    return -1;
  },

  // Takes an array of 1's and 0's, find the maximum number of consecutive 1's in this array. If there is any value other than 1 or 0 in the array, this is an error, return -1. The 1's and 0's may be either string or integer values, both are acceptable and should be considered equivalent. */
  maxOnes(array) {
    let maxCount = -1;
    let currentCount = -1;
    array.forEach((number) => {
      if (number != 1 && number != 0) {
        currentCount = -1;
        maxCount = -1;
        return false;
      } else if (number == 1) {
        currentCount += 1;
      } else if (number == 0) {
        maxCount = Math.max(currentCount, maxCount);
        currentCount = 0;
      }
    });

    return Math.max(currentCount, maxCount);
  },
};

module.exports = functions;
