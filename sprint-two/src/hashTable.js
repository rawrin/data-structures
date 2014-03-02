var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._currentsize = 0;
};
//when current size is 3/4 of this._limit, this._limitx2;
//call traverse to all the pre existing key.value;
//when current size is 1/4 of this_limit, this._limit/2;
//call travers to all the pre exisitng key.value pair;

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === null){
    this._currentsize++;
    if(this._currentsize >= this._limit*(3/4)){
      this._limit = this._limit * 2;

    }
  }
  this._storage.set(i, v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage.each(function(value, index, collection){
    if(i===index){
      collection[i]=null;
    }
  })
  if(this._storage.get(i)===undefined){
    this._currentsize--;
    if(this._currentsize <= this._limit * (1/4)){
      this._limit = (this._limit)/2;

    }
  }
};

