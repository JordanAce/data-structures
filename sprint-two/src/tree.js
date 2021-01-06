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
  //console.log(this);
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


/*
 * Complexity: What is the time complexity of the above functions?
 */
