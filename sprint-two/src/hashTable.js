//[ ,[[cat, feisty], [fox, quick]], , , ,[[dog, happy], []], , ]

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // this._storage = {},
  // var limitedarray = {get: func, set: func, each: func} // point to storage = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(index)) {
    this._storage.set(index, [k, v]);
  }

  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i ++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }

  bucket.push([k, v]);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};

HashTable.prototype.howManyCollisions = function() {
  var counter = 0;
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i].length > 1) {
      counter++;
    }
  }
  return counter;
};



// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);

//   this._storage.each( function (bucket, bucketIndex, storage) {
//     if (index === bucketIndex && Array.isArray(bucket)) {
//       for (var j = 0; j < bucket.length; j++) {
//         bucket[j][1] = undefined;
//       }
//     }
//   });
// };


/*
 .insert = O(1)
 .retrieve = O(1)
 .remove = O(1)
 */


