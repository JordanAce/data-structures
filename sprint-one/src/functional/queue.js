var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var newKey = storage.length + 1;
    storage[newKey] = value;
    storage.length++;
  };

  someInstance.dequeue = function() {

    var dequeuedValue = storage['1'];
    delete storage['1'];
    if (storage.length <= 0) {
      storage.length = 0;
    } else {
      storage.length--;
    }
    for (var key in storage) {
      storage[key - 1] = storage[key];
    }
    return dequeuedValue;
  };

  someInstance.size = function() {
    return storage.length;
  };
  return someInstance;
};
