exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    var listOfFiles = [];
    var dirs = [];

    processDir(data);

    function processDir(dir) {
      var i, len, file;
      var files = dir.files;

      dirs.push( dir.dir );

      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    return listOfFiles;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
      if(n <= 2) {
          return 1;
        }
        else {
          return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
  },

  validParentheses: function(n) {
    if (n == 0){
      return [""];
    }
    var result = [];
    for (var i = 0; i < n; ++i) {
      var lefts = this.validParentheses(i);
      console.log(lefts);
      var rights = this.validParentheses(n - i - 1);
      console.log(rights);
      for (var j = 0; j < lefts.length; j++){
        for (var l = 0; l < rights.length; l++){
          result.push("(" + lefts[j] + ")" + rights[l]);
        }
      }
    }
    return result;
  }
};
