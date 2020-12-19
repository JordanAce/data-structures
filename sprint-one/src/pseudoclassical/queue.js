var Queue = function() {
  this.storage = {};
  this.length = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value) {
  this.length++;
  this.storage[this.length] = value;

};

Queue.prototype.dequeue = function() {
  var dequeuedValue = this.storage[1];
  delete this.storage[1];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage [key];
  }
  this.length--;
  return dequeuedValue;
};

Queue.prototype.size = function () {
  if (this.length <= 0) {
    return 0;
  } else {
    return this.length;
  }
};

var queue = new Queue();
