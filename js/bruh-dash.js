var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {

    return arr.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr,val) {
    for(var i = 0; i < arr.length; i++){
      
      if(arr[i] === val){
      
        return arr.indexOf(val);
     
      }else if((arr.indexOf(val))=== -1){
      
        return -1;
       }
     }
   },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr,val) {
    for(var i = arr.length-1; i>=0; i--){
     
       
       if(arr[i] === val){
         
     return arr.indexOf(val);
         
       }else if((arr.indexOf(val))=== -1){
         return -1;
       }
     }
   },
 
  

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop()
    return arr
  },

  // returns an array with all falsey values removed
  compact: function(arr) {
    for(var i = 0; i < arr.length; i++){
      return arr.filter(Boolean);
    } 
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice:  function(arr, start) {
    for(var i = 0; i<arr.length; i++){
      var last = arr.pop()
      return arr.slice(start, last)
    }
   },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr,n){
    
    for(var i = 0; i<arr.length; i++){
      if(n === 0){
        return arr
      }else if(n >= 0){
        arr.splice(0, n);
        return arr
      }else{
        arr.shift()
        return arr
      }
    }
  },

  

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr,n) {
    for(var i = 0; i<arr.length; i++){
      if(n === 0){
    return arr
  }else if(n >= 0){
    arr.splice(-n , n);
    return arr
  }else{
    arr.pop()
    return arr
  }
}
},

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr,n) {
   
    for(var i = 0;i < arr.length; i++){
      if(n === 0){
        return [];
      }else if(n > arr.length){
        return arr;
      }else if(n > 0){
        return arr.splice(0, n);
      }else{
        return arr.splice(0,1)
      }
    }

  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr,n) {
    if(n === 0){
      return [];
    }else if(n > arr.length){
      return arr;
    }else if(n > 0){
      return arr.splice(-n,n)
    }else{
      return arr.splice(-1,1)
    
    
   }
 },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr,value,start,finish) {
    if(start >= 0 && finish > 0){
      return arr.fill(value,start,finish)
    }else{
      return arr.fill(value)
    }
  },

  // removes all given values from an array
  pull: function (arr,value1,value2) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] !== value1 && arr[i] !== value2){
        newArr.push(arr[i])
      }
  }
  return newArr;
},

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr,ind) {
    for(var i = ind.length-1; i>=0; i--) {
      arr.splice(ind[i], 1);
    }
    return arr;
  },

  // creates an array excluding all the specified values
  without: function(arr,ind) {
    var newArr = []

    for (var i = 0; i < arr.length; i++) {
      if (ind.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr
  },

  // returns an array with specified values excluded
  difference: function(arr, arr2) {
    var newArr = [];
    for(var i = 0; i < arr2.length; i++){
      if(arr.indexOf(arr2[i]) === -1){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arr1,arr2) {
    var newArr = [];
    for(var i = 0; i < arr2.length; i++){
      var tempArr = [];
      
      tempArr.push(arr1[i]);
      tempArr.push(arr2[i]);
      newArr.push(tempArr);

    }
    return newArr;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    var bigBox = [];
    var newArr1 = [];
    var newArr2 = [];
    for(var i = 0; i < arr.length; i++){
      newArr1.push(arr[i][0]);
      newArr2.push(arr[i][1])

    }
  bigBox.push(newArr1,newArr2);
   
  return bigBox    
},

  // creates an array of elements into groups of length of specified size
  // chunk: function(arr,size){
  //   var chunkArr = [];
  //   if(arr.length === 0 || size === 0){
  //     return chunkArr;
  //   }else if(size >= arr.length){
  //     return arr;
  //   }else if(){

  //   }
  // },
    
      
    
    
   



  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(collection, func) {
   
    for(var i in collection){
      func(collection[i]);
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
