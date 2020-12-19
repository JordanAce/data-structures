class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value) {
    this.length++;
    this.storage[this.length] = value;
  }

  pop() {
    var poppedValue = this.storage[this.length];
    this.length--;
    return poppedValue;

  }

  size() {
    if (this.length <= 0) {
      return 0;
    } else {
      return this.length;
    }

  }
}

var MyStack = new Stack ();