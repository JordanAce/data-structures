var Stack = function() {

  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.length = 0;
  // Hey! Rewrite in the new style.
  //Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.length++;
  this.storage[this.length] = value;

};

stackMethods.pop = function() {
  var poppedValue = this.storage[this.length];
  delete this.storage[this.length];
  this.length--;
  return poppedValue;

};

stackMethods.size = function () {
  if (this.length <= 0) {
    return 0;
  } else {
    return this.length;
}
};


