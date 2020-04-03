'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    if (this.length === 0) {
      return -1;
    }

    let startIndex = fromIndex;

    if (fromIndex >= this.length) {
      return -1;
    }

    if (startIndex < 0) {
      startIndex += this.length;
    }

    if (startIndex < 0) {
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length - 1; i++) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
