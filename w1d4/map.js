var words = ["ground", "control", "to", "major", "tom"];


function map(array,callback) {
  var answer = [];
  array.forEach(function (word) {
    answer.push(callback(word));
})
console.log(answer);
}




map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});



//expected output
// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]


