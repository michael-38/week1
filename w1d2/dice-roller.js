var args = process.argv.splice(2);

function rollDice(number) {
var diceArray = [];
for (var i = 0; i < number; i++) {
  diceArray.push(Math.ceil(Math.random() * 6));
}
console.log("Rolled " + number + " dice: " + diceArray.join(", "));
}


rollDice(args[0]);