exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  	var arr = str.split('')
	var seen = {};
    var dupes = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }

    for (var key in seen) {
      if (seen.hasOwnProperty(key) && seen[key] <= amount) {
        dupes.push(key);
      }else if (seen.hasOwnProperty(key)){
      	for (var i=0; i< amount; i++){
      		dupes.push(key);
      	}
      }
    }

    console.log(seen);
    console.log(dupes.join(''))

    return dupes.join('');


  },
  wordWrap: function(str, cols) {

   
  },

  reverseString: function(str) {
	return str.split("").reverse().join("");
  }
};
