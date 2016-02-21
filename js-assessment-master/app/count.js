exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {

	var timeout;
    function countFunc () {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(countFunc, 100);
      }
    }

    countFunc();

    return {
      cancel : function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
