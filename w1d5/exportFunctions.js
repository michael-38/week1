var array = [];

  function ascending(a, b) {
  return a - b;
};


module.exports = {

  addToArray: function (number) {
      array.push(number);
  },

  returnSortedArray: function () {
    return(array.sort(ascending));
  }


};















