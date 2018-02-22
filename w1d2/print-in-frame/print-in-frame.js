function printInFrame(list) {
 var list = list.split(' ');

 var longest = longestStr(list).length;

 // Longest is now the number of the longest string

 var border = repeat('*', longest + (3));

 console.log(border);
 for (word of list) {
   console.log('* ' + word + repeat(' ', longest - word.length) + '*');
 }
 console.log(border);
}


function repeat(str, times) {
 var result = str;

 for (var i = 0; i < times; i++) {
   result += str;
 }

 return result;
}

function longestStr(list) {
 var longest = list[0];

 for (var str of list) {

   if ( longest.length < str.length){
     longest = str;
   }
 }

 // for ( i=0; i < list.length; i++){
 //   // console.log("We compare "+longest+" to "+list[i]);
 //   if( longest.length < list[i].length ){
 //     longest = list[i];
 //   }
 // }

 return longest;

}


// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
printInFrame('Romain and Michael')