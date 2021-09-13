const daysOfTheWeeks = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Statuday"
]

console.log(daysOfTheWeeks);
console.log(daysOfTheWeeks[3]);
console.log(daysOfTheWeeks[0]);


// context
const test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
  };
  
  console.log(test.func());
  // expected output: 42


//   Array & method

const nums = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
];

console.log(nums);
console.log(nums[5]);
console.log(nums.length);
console.log(nums.join(" | "));
console.log();


// adding an array to an exiting array!!

const courses = [
    {teacher: "Dom", course: "React"},
    {teacher:"Brain", course:"Vue"},
    {teacher:"Shine", course:"HTML/CSS"}
];

console.log(courses)
console.log(courses[2]);
console.log(courses[0]);

courses.push({ teacher: "Samuel", course:"Frontend dev"});
console.log(courses);

// editing a existing array!
courses[2] = {teacher:"Gibson", course: "complete in to web dev"};

console.log(courses);

// console.log everything in a array!!

const cities = [
    "seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong",
    "LA",
    "lagos",
    "Abuja",
    "Uyo"
];

// method 1

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]); //Nigga ah don't know why this shit gives me 5.....
}

// method 2 By Lord Legend!!!
const func = function(city) {
    console.log(city);
}
cities.forEach(func);

// method 3
cities.forEach(function(city) {
    console.log(city)
});


// functions!!!!!
function addTwo(numb) {
    return numb + 2;
}

const answer = addTwo(5);
console.log(answer);

function greet(firstname, lastname, honorific,greeting) {
    return `${greeting} ${honorific} ${lastname}! I'm extremely pleased you could join us, ${firstname}! I hope you enjoy your stay, ${honorific} ${lastname}`;
}

console.log(greet("Shine", "Gibson", "Master", "salutation"));


console.log(greet("Gibby", "Shine", "Don", "what's good!!"))


const myCity = "UY";
const myState = "Aks";
const myCountry = "NIG";

function logOutMyHood(city, state, country) {
    console.log(`You from ${city}, ${state}, ${country}.`);
}

logOutMyHood(myCity,myState,myCountry);

// keep pushing the shit man
// Some scope shit we trying out!!

let friendsAtYourParty = 0;
for (let i = 0; i <= 10; i++) {
  friendsAtYourParty++;
}
console.log(friendsAtYourParty);

const someVariable = "Don't fuck with me man!!!  Better get your GUN"
function addfive(number) {
    return number + 10;
}

console.log(addfive(102));
console.log(someVariable);

// Object 

const person = {
    name: "Brian Holt",
    city: "Seattle",
    state: "WA",
    favoriteFood: "🌮",
    wantsTacosRightNow: true,
    numberOfTacosWanted: 100
};


  console.log(person["name"]); 
  console.log(person);

  console.log(person.favoriteFood, person.numberOfTacosWanted);

  console.log(person.name +" " + "you LIT bruh!!")


//object with an if statement!!


const shine1 = {
    name :"Gibby",
    age :"20"
};

const shine2 = {
    name: "Ubong",
    age: "23" 
};

function suggetMusic(shine) {
    if (shine.age === "20") {
        console.log("Yo a stupid ass nigga!!");
    }else if (shine.age === "23") {
        console.log("Nigga better get a Gun");
    }else {
        console.log("stay woke hommie");
    }
}

suggetMusic(shine1);
suggetMusic(shine2);


// objects with their functions!!

const dog = {
    name: "Dog",
    speak() {
        console.log("woof woof");
    }
}

console.log(dog)

console.log(dog.speak());

dog.speak();
// I need an explaination on this @Lord Legend!!

// nested object!!!---Object wey dey inside another object!

const me = {
    name: {
        first:"Ubong",
        last:"Gibson"
    },
    hood:{
        city:"Uyo",
        state:"AkS",
        country:"NIG"
    }
};

console.log(me.name.first);
// Nigga we now learning some context!!!!----Nigga we winning...

const mee = {
    name: {
      first: "Brian",
      last: "Holt"
    },
    location: {
      streetNumber: 500,
      street: "Fakestreet",
      city: "Seattle",
      state: "WA",
      zipCode: 55555,
      country: "USA"
    },
    getAddress() {
      return `${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`;
    }
  };

  console.log(mee.getAddress());

//   test run 2

const meet = {
    name: {
      first: "Brian",
      last: "Holt"
    },
    location: {
      streetNumber: 500,
      street: "Fakestreet",
      city: "Seattle",
      state: "WA",
      zipCode: 55555,
      country: "USA"
    },
    getAddress() {
      console.log(`${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`);
    }
  };

  meet.getAddress(); //Boss Legend!!


//   Array

// Using an array of names

const names = [
    "Blaq",
    "Shine",
    "Legend",
    "Pato",
    "Dhron",
    "Inix"
];

console.log(names);
console.log(names[3]);
console.log(names[0]);

const Pnum = [
    1, 2, 3, 5, 7, 11, 13, 17 
];

console.log(Pnum);
console.log(Pnum.length);
console.log(Pnum.join(" !! "));