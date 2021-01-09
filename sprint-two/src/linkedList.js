var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // var list = {{head : {value : 4, next : {value: 5, next: null}}}, {tail: {value: 5, next: null}}}

  list.addToTail = function(value) {
    var lastnode = list.head;

    if (!list.head) {
      list.head = Node(value);
      list.tail = Node(value);
    } else {
      while (lastnode.next) {
        lastnode = lastnode.next;
      }
      lastnode.next = Node(value);
      list.tail = lastnode.next;
    }
  };

  list.removeHead = function() {
    var storedHead = list.head.value;
    list.head = list.head.next;
    return storedHead;
  };

  list.contains = function(target) {
    var result = false;
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        result = true;
      }
      currentNode = currentNode.next;
    }
    return result;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
.addToTail = O(n)
.removeHead = O(1)
.contains = O(n)
 */
