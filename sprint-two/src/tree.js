var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;


  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var node = Object.create(treeMethods);
  node.value = value;
  node.children = [];
  this.children.push(node);
  node.parent = this;
};

treeMethods.contains = function(target){
  var check = false;
  if (this.value === target) {
      check = true;
  }
  for (var i = 0; i < this.children.length ; i ++) {
    if(check === false){
      check = this.children[i].contains(target);
    };
  };
  return check;
};

treeMethods.removeFromParent = function(){
  var index = this.parent.children.indexOf(this);
  this.parent.children[index] = undefined;
  this.parent = null;

  //whether this should return 'this'
}