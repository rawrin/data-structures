var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];


  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var node = Object.create(treeMethods);
  node.value = value;
  node.children = [];
  this.children.push(node);
};

treeMethods.contains = function(target){
  
  //check if initial value ===target;
  //if value is === target return true
  //if its not, do the same check for its children;
  //if any children contain the value, return true
  //else return false;




  // var check = false || this.value===target;



  // for (var i = 0 ; i < this.children.length; i ++ ) {
  //   console.log("Checking if: " + this.children[i].value + ", is equal to: " + target);
  //     if (!!this.value===target) {
  //       console.log("It's supposed to be true!");
  //       return true;
  //     }
  //     return this.children[i].contains(target);
  // };
  // console.log("Nothing is equal :[");
  // return check;
};



