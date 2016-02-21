exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {

    for(var index=0; index < arr.length; index++){

      if (arr[index] === item ){
        return index;
      }
    }

    return -1;

  },

  sum : function(arr) {

    var returnVal = 0;
    for(var index=0; index < arr.length; index++){

      returnVal += arr[index];

    }

    return returnVal;

  },

  remove : function(arr, item) {

    var returnVal = [];
    for(var index=0; index < arr.length; index++){
       if (arr[index] !== item ){
         returnVal.push(arr[index]);
      }

    }

    return returnVal;

  },

  removeWithoutCopy : function(arr, item) {

    for(var index=0; index < arr.length; index++){
       if (arr[index] === item ){
          arr.splice(index, 1);
          index -= 1;
      }

    }

    return arr;


  },

  append : function(arr, item) {

    arr.push(item);
    return arr;

  },

  truncate : function(arr) {

    arr.pop();
    return arr;

  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr; 
  },

  count : function(arr, item) {

    var returnVal = 0;
    for(var index=0; index < arr.length; index++){

      if(item === arr[index]){
        returnVal += 1; 
      }

    }

    return returnVal;

  },

  duplicates : function(arr) {

    var seen = {};
    var dupes = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }

    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        dupes.push(parseInt(item));
      }
    }

    console.log(dupes)

    return dupes;

  },

  square : function(arr) {

    var returnVal = [];
    
    for(var index=0; index < arr.length; index++){
        var squaredVal = (arr[index] * arr[index]);
         returnVal.push(squaredVal);
      }
   

    return returnVal;

  },

  findAllOccurrences : function(arr, target) {
    
    var returnVal = [];
    
    for(var index=0; index < arr.length; index++){
        if(arr[index] === target){
          returnVal.push(index);
        }
    }
   
    return returnVal;
  }
};
