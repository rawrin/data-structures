var makeBinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryTreeMethods);

  binaryTree.value=value;
  binaryTree.left={};
  binaryTree.right={};

  return binaryTree;
};


var binaryTreeMethods = {};


binaryTreeMethods.insert = function(value){

  if (this.value < value) {
    if(!!this.right.value){
      this.right.insert(value);
    } else {
      this.right=makeBinarySearchTree(value);
    }
  }

  if (this.value >= value){
    if(!!this.left.value){
      this.left.insert(value);
    } else {
      this.left = makeBinarySearchTree(value);
    }
  }
};

binaryTreeMethods.contains = function(value){
  var check = false;

  if(this.value===value){
    check = true;
  }
  if (check === false){
    if(value > this.value) {
      check = this.right.contains(value);
    } else {
      check = this.left.contains(value);
    }
  }



  return check;
};

  //first check the initial value ==== value;
  //check if value is less than initial value;
  //go down to the left branch of the tree, and repeat the checking process
  //


binaryTreeMethods.depthFirstLog = function(callback){
  //equivalent of each

}


