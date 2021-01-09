var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; // fix me

  // newTree = {value: 5, children: [{value: 6, children: [{value: 8, children: []}]}, {value: 7, children: []}], {addChild: function, contains: function}}

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var result = false;

  var innerFunction = function (node) {
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (child.value === target) {
        result = true;
      }
      if (child.children.length > 0) {
        innerFunction(child);
      }
    }
  };

  innerFunction(this);
  return result;
};

// newTree = {value: 5, children: [{value: 6, children: [{value: 8, children: []}]}, {value: 7, children: []}], {addChild: function, contains: function}}

treeMethods.countChildren = function(target) {
  var result = 0;

  var innerFunction = function (node) {
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      result += node.children.length;
      if (child.children.length > 0) {
        result--;
        innerFunction(child);
      }
    }
  };

  innerFunction(this);
  return result;
};

/*
.addChild = O(1)
.contains = O(n)
 */
