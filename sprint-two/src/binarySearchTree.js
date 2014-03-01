var makeBinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryTreeMethods);

  binaryTree.value=value;
  binaryTree.left = Object.create(binaryTreeMethods);
  binaryTree.right = Object.create(binaryTreeMethods);

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
      if(this.right.value!==undefined){
        check = this.right.contains(value);
      }
    } else {
      if(this.left.value!==undefined){
        check = this.left.contains(value);
      }
    }
  }
  return check;
};

binaryTreeMethods.depthFirstLog = function(callback){
  callback(this.value);
  if(this.left.value !== undefined){
    this.left.depthFirstLog(callback);
  } else if (this.right.value !== undefined){
    this.right.depthFirstLog(callback);
  }
};
