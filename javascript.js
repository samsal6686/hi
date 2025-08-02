


var place = "first";

if(place == "first") {
    console.log("Gold");
}
else if(place == "second") {
    console.log("Silver");
} else if(place == "third") {
    console.log("Bronze");
}
else {
    console.log("No medal");
}

switch(place) {
    case "first":
        console.log("Gold");
        break;
    case "second":
        console.log("Silver");
        break;
    case "third":
        console.log("Bronze");
        break;
    default:
        console.log("No medal");
        break;
}

for(var i = 0; i < 10; i++){
    console.log("Number: " + i);
}
var i = 0;
while(i < 10) {
    console.log("Number: " + i);
    i++;
}

function myFunction(){
    console.log("Working");
}
myFunction();

var train1 = ["a", "b", "c"];
// listArrayItems(train1);

var character = {};
character.name = "deez";
character.age = 67;
character.job = "programmer";

var character2 = {
    name: "deez",
    age: 67,
    job: "programmer"
};

train1.push("d");

const expert = true; //immutable
let YOE = 5; //mutable

let combinedMessage = "My coding experience is: " + YOE + " years of experience. Some people say I am an expert, and I think they are: " + expert + ".";
console.log(combinedMessage);

function greetUser(userName){
    return `Hello, ${userName}! Welcome back.`;
}
console.log(greetUser("deez"));

const calculateArea = (length, width) => {
    return length * width;
}
console.log(calculateArea(5, 10));

const car = {
    make: "Honda",
    model: "Civic",
    year: 2020,

    getDescription: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

let greet = "Hello, World!";
let length = greet.length;
let letter = greet.charAt(0);
let world = "Wo".concat("rl").concat("d");
let index = "deez".indexOf("e");
greet.toUpperCase();
greet.toLowerCase();






