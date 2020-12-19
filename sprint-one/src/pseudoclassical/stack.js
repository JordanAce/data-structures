var Stack = function() {
  this.storage = {};
  this.length = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(value) {
  this.length++;
  this.storage[this.length] = value;

};

Stack.prototype.pop = function() {
  var poppedValue = this.storage[this.length];
  delete this.storage[this.length];
  this.length--;
  return poppedValue;
};

Stack.prototype.size = function () {
  if (this.length <= 0) {
    return 0;
  } else {
    return this.length;
  }

};

var stack = new Stack();

