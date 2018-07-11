// var john = {
//   name: 'John',
//   yearOfBirth: 1996,
//   job: 'teacher'
// };

//function constructors always with capital//
// var Person = function(name, yearOfBirth, job) {
//       this.name = name;
//       this.yearOfBirth = yearOfBirth;
//       this.job = job;
//       this.calculateAge = function() {
//         console.log(2018 - this.yearOfBirth);
//       }
// }
//
// Person.prototype.calculateAge =
// function() {
//   console.log(2018 - this.yearOfBirth);
// };
//
// Person.prototype.lastName = "Smith";
//
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person ('Jane', 1969, 'designer');
// var mark = new Person ('Mark', 1948, 'retired');
//
// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
//
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// Object.create //

// var personProto = {
//     calculateAge: function() {
//       console.log(2018 - this.yearOfBirth)
//     }
// };
//
// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'Teacher';
//
// var jane = Object.create(personProto,
//   {
//       name: { value: 'Jane' },
//       yearOfBirth: { value: 1969 },
//       job: { value: 'Designer'}
//   });


// CLOSURE CLOSURE CLOSURE WTF IS CLOSURE?!!?!?!? //

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}
var retirementSP = retirement(55);
var retirementUS = retirement(66);
retirementUS(1990);
retirementSP(1990);

retirement(55)(1990);
retirement(66)(1990);


function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ', can you explain UI?');
    } else if (job === 'teacher'){
      console.log(name + ", what do you teach?");
  } else {
      console.log('Hello ' + name + "what's your deal?");
  }

}
}

interviewQuestion('teacher')('Josue');
