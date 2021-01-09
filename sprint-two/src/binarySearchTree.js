var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(BinarySearchTree.prototype);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;


// bst = {value: 5, left: {value: 2, left: null, right: null}, right: null}
};

BinarySearchTree.prototype.insert = function (value) { // value = 3
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) { // {value: 2, left: null, right: {value: 3, left: null, right: {value: 7, left: null, right: null}}}
  var result = false;
  if (this.value === value) {
    return true;
  } else if (value < this.value && this.left) {
    return this.left.contains(value); //fixed by adding returns. Why?
  } else {
    if (value > this.value && this.right) {
      return this.right.contains(value);
    }
  }
  return result;
};


BinarySearchTree.prototype.depthFirstLog = function(cb) {


  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }


  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

