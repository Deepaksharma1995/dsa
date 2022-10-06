var RandomizedSet = function () {
  this.Sets = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (!this.Sets.get(val)) {
    this.Sets.set(val, val);
    return true;
  } else {
    return false;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.Sets.get(val)) {
    return false;
  } else {
    this.Sets.delete(val);
    return true;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let keys = Array.from(this.Sets.key());
  return keys[Math.floor(Math.random() * keys.length)];
};

const randomizedSet = new RandomizedSet();
