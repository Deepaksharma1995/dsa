Array.prototype.myMap = function (fn) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn(this[i]));
  }
  return newArr;
};

Array.prototype.myFilter = function (callback) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i]);
  }
};

Array.prototype.myMapping = function (fn) {
  let arr = [];
  for (let i = 0; i <= this.length; i++) {
    arr.push(fun(this[i], i, this));
  }
  return arr;
};

Array.prototype.myReduce = function (fn, startingValue) {
  let accumalator = startingValue || undefined;
  for (let index = 0; index < this.length; index++) {
    if (accumalator) {
      accumalator = fn.call(accumalator, this[index], index, this);
    } else {
      accumalator = this[index];
    }
  }
  return accumalator;
};

Array.prototype.myForEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    this[i] = fn.call(this[i], i, this);
  }
};

Function.prototype.myCall = function (context, ...args) {
  context.myFunc = this;
  context.myFunc(...args);
};

function printName(place, city) {
  console.log(`${this.name} ${this.surname} ${place} ${city}`);
}

Function.prototype.myBind = function (content) {
  let context = this;
  return function () {
    context.call(content);
  };
};

Array.prototype.flatten = function () {
  let flatArray = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(this.flatten.call(element));
    } else {
      flatArray.push(this[i]);
    }
  }
  return flatArray;
};
