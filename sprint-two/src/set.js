var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
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
  var index = this._storage.indexOf(item);
  this._storage.splice(index, 1);
};

/*
.add = O(1)
.contains = O(1)
.set = O(1)
 */
