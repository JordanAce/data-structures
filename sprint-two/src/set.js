var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  set._length = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._length++;
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  var result = false;
  if (this._storage.includes(item)) {
    result = true;
  }
  return result;
};

setPrototype.remove = function(item) {
  this._length--;
  var index = this._storage.indexOf(item);
  this._storage.splice(index, 1);
};

setPrototype.size = function() {
  return this._length;
};

/*
.add = O(1)
.contains = O(1)
.set = O(1)
 */
