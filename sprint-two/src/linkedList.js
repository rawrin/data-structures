var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.tail===null){
      list.tail = makeNode(value);
      list.head=list.tail;
      list.tail.prev = list.head;
    }else{
      list.tail.next = makeNode(value);
      list.tail.next.prev = list.tail;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    list.head = list.head.next;
  };

  list.contains = function(target, node){

    var check = false;

    var node = node||list.head;
    while(check===false){
      if(target===node.value){
        check = true;
      } 
      if (node.next !== null) {
        node = node.next;
      } else {
        check = node.value===target;
        return check;
      }
    };
    return check;
  };

  list.addToHead = function (value){
    var newNode = makeNode(value);
    newNode.next = list.head;
    list.head.prev = newNode;
    list.head = newNode;
  };

  list.removeTail = function () {
    var removedValue = list.tail.value;
    list.tail = list.tail.prev;
    list.tail.next=null;


    return removedValue
  }


    //make a node -> this node points to the original head ->
    // head now points to the new node



  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
