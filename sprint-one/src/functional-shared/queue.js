var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;

  instance.enqueue = function(value){ // would potentially override the property
    for(var i = size ; i>0 ; i--){
      storage[i] = storage[i-1];
    }
    storage[0]=value;
    size++;
  };

  instance.dequeue = function(){
    var item = storage[size-1]
    if(size>0){        
      delete storage[size-1];
      size--;
    };
    return item;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};


  // Hey! Copy your code from src/functional/queue.js and paste it here


var queueMethods = {};