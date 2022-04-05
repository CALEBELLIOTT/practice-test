const ageToVote = 18

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]
// YOUR JS CODE
let currentYear = 2022
let jsReleaseYear = 1995
let jsAge = currentYear - jsReleaseYear

console.log("current age of JavaScript is " + jsAge);
if(jsAge >= ageToVote){
  console.log("JavaScript is old enough to vote.");
}
  else{
    console.log("JavaScript is not old enough to vote");
  }

  console.log("Starting");
for (let i = 0; i < 101; i++) {
  if(i % 10 == 0){
    console.log(i);
  }
  if(i == 50){
    console.log("halfway!");
  }
}
console.log("Finished!");


console.log(user.name + " lives at " + user.address.street + " in " + user.address.city);

for (let i = 0; i < cases.length; i++) {
  const element = cases[i];
  console.log(element.title + " " + element.releaseYear);
}

for (let i = 0; i < cases.length; i++) {
  const element = cases[i];
  if (element.releaseYear == 1903) {
    console.log(element.title);
  }
  
}
