// *how to install a package*
// npm init
// in the directory of the file you're working on

// npm install left-pad --save
// the --save creates an entry under "dependencies" in the package.json file
// so if the package.json file is passed on to someone else, when they run "npm install", it will automatically install the right packages

// var leftPad = require('left-pad');
// check the package readMe on what parameters to take in for it to work





function isValidArray(array) {
    return array.length > 0;
}

function add(numbers) {
    if (isValidArray(numbers)) {
        var result = 0;
        for (var i = 0; i < numbers.length; i++) {
            result = result + numbers[i];
        }

        return result;
    }
    else {
        throw new Error('Input is invalid');
    }
}

function multiply(numbers) {
    if (isValidArray(numbers)) {
        var result = 1;
        for (var i = 0; i < numbers.length; i++) {
            result = result * numbers[i];
        }

        return result;
    }
    else {
        throw new Error('Input is invalid');
    }
}

module.exports = {
    add: add,
    multiply: multiply
};