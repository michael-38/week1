var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};





function summarize (userData) {
 summary = {};
  for (var id in userData) {
    //output name as key in object
    summary[userData[id].name] = {follows: returnNamesfromArray(userData, returnFollowing(userData, id))};
  }
  return summary;
}

console.log(summarize(data));
// console.log(summarize(data));

function returnFollowing(userData, id) {
 return userData[id].follows;
}

function returnName(userData, id) {
 return userData[id].name;
}

function returnNamesfromArray(userData, array) {
  var names = [];
  for (var id of array) {
    names.push(userData[id].name);
  }
  return names;
}

//console.log(data["f02"].name)
//console.log(returnNamesfromArray(data, ["f02", "f03"]));

function returnAge(userData, id) {
  return userData[id].age;
}

function test(userData) {
  return returnFollowing(userData, "f02");
}

//console.log(test(data));



// console.log(convertIdToName("f02"));

// List everyone and for each of them, list the names of who they follow and who follows them

// desired output
// {
//  Alice:
//    {
//     follows: f02, f03, f04,
//     followed by: f03, f04
//    }
//  Bob:
//    {
//     follows: f05, f06,
//     followed by: f01, f04}
//     }
// }


// Identify who follows the most people
// Identify who has the most followers
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)



