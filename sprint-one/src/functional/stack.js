var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};


  // Implement the methods below
  someInstance.push = function(value) {
    var newKey = 0;
    for (var key in storage) {
      newKey++;
    }
    storage[newKey + 1] = value;
  };

  someInstance.pop = function() {
    var objLength = 0;
    for (var key in storage) {
      objLength++;
    }
    var poppedValue = storage[objLength];
    delete storage[objLength];
    return poppedValue;

  };

  someInstance.size = function() {
    var counter = 0;
    for (var key in storage) {
      counter ++;
    }
    return counter;
  };

  return someInstance;
};
