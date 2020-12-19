class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  enqueue(value) {
    this.length++;
    this.storage[this.length] = value;
  }

  dequeue() {
    var dequeuedValue = this.storage[1];
    delete this.storage[1];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    this.length--;
    return dequeuedValue;
  }

  size() {
    if (this.length < 0) {
      return 0;
    } else {
      return this.length;
    }
  }

}

var MyQueue = new Queue();
