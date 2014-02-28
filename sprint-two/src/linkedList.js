var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.tail===null){
      list.tail = makeNode(value);
      list.head=list.tail;
    }else{
      list.tail.next = makeNode(value);
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

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
