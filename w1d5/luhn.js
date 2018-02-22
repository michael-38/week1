var check = function (number) {

//check if the number is valid (accroding to the Luhn Algorithm)

  // convert number to array of integers
  var numberToArray = Array.from(number);
  // console.log(numberToArray);

  var arrayOfNumbers = numberToArray.map(Number)

  // reverse array numberToArray
  var reversedArray = arrayOfNumbers.reverse();
  // console.log(reversedArray);

  var doubleArray = [];
  for (i = 0; i < reversedArray.length; i++) {
    if (i === 0) {
      doubleArray.push(reversedArray[i]);
    } else if (i % 2 !== 0) {
      if ((reversedArray[i] * 2) > 9) {
        var sum = reversedArray[i] * 2 - 9;
        doubleArray.push(sum)
      } else {
        doubleArray.push(reversedArray[i] * 2);
      }
    } else {
      doubleArray.push(reversedArray[i]);
    // multiplying by 1 to convert to number
      }
  }

// console.log(doubleArray);

  var sumDigitsOfArray = 0;
  for (number of doubleArray) {
    sumDigitsOfArray += number;
  }
// console.log(sumDigitsOfArray);

  if (sumDigitsOfArray % 10 === 0) {
    return "valid";
  } else {
    return "invalid";
  }
}


console.log(check("123459878"));


