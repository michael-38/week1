var myObject = {
  a: 6,
  b: "abc",
  c: true,
  d: null,
};

var valueB = myObject["b"];

console.log(valueB);

var mary = {name: "Mary Sue" };
mary["name"] = "Mary Jane";
mary["age"] = 22;

console.log(mary);


var person = {
  name: "Paul",
  address: {
    street: "310 W 95th",
    city: "New York",
    zipCode: 10027
  }
};

console.log(person["address"]["city"]);

person["phoneNumbers"] = ["905-475-9898", "647-987-3838"];

person["phoneNumbers"].push("a");

console.log(person["phoneNumbers"]);
console.log(typeof person["phoneNumbers"]);

console.log(person["phoneNumbers"] instanceof Object);
console.log(person["phoneNumbers"] instanceof Array);
console.log(person["phoneNumbers"] instanceof String);

var s = "spam";
person[s] = "test";
//person["dislikes"] = {food: spam, "e-mail": "spam"};

console.log(Object.keys(person));
console.log(person[s]);
