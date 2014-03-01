var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
   this._storage.push(item);
};

setPrototype.contains = function(item){
  var check = false;
  for(var i = 0; i < this._storage.length ; i ++ ) {
    if(this._storage[i]===item){
      return true;
    }
  };
  return check;
};

setPrototype.remove = function(item){
  var index = this._storage.indexOf(item);
  if(index !== -1){
    this._storage.splice(index, 1);
  };
};
