var Queue = function() {

  var queue = {};
  _.extend(queue, queueMethods);
  queue.storage = {};
  queue.length = 0;
  return queue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.storage[this.length + 1] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  var dequeuedValue = this.storage['1'];
  delete this.storage['1'];
  this.length--;
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  return dequeuedValue;
};

queueMethods.size = function() {
  if (this.length <= 0) {
    this.length = 0;
  }
  return this.length;
};


