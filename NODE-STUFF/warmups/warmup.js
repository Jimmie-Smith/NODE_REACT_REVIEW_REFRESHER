let myName = "jimmie";
let age = 26;
let hobbies = ['football','basketball','knitting'];

function getUserInfo(theirName, thierAge, otherHobbies) {
  console.log(
    `His name is ${theirName} and his age is ${thierAge}, but does he have hobbies? ${otherHobbies}`
  );
}

// getUserInfo(myName, age, hasHobbies);

const user = {
  name: "Jimmie",
  age: 26,
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old, and these are my hobbies: `);
  },
  listHobbies: function () {for (let hobby of hobbies){
    console.log(hobby)
  }}
};

user.greet();
user.listHobbies();



