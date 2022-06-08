/* This assignment will give you some practice with creating arrays and using their methods. */

console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
//
//
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  "Tre",
  "Sonny",
  "Crystal",
  "Ilyas",
  "Greg",
  "Fernando",
  "Timothy",
  "Patrick",
  "Steve",
  "Jimothy",
  "Pat",
  "Arnold",
  "Andy",
];
// Challenge 1 Code
console.log("\nChallenge 1 Answer");
for (i = 0; i < students.length; i++) {
  console.log(students[i]);
}

console.log("\n");
console.log("Challenge 2");
// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
//Challenge 2 Code
console.log("\nChallenge 2 answer");
for (let g = 0; g < grades.length; g++) {
  console.log(grades.reverse()[g]);
}

console.log("\n");
console.log("Challenge 3");
// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
// Challenge 3 Code
console.log("\nChallenge 3 answer");
for (let p = 0; p < positiveNumbers.length; p++) {
  if (positiveNumbers[p] % 2 === 0) {
    console.log(positiveNumbers[p]);
  }
}  

console.log("\n");
console.log("Challenge 4");
// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

// // Challenge 4 Code
console.log("\nChallenge 4 answer");
for (let m = 0; m < mixedSignNumbers.length; m++) {
  if (mixedSignNumbers[m] % 2 === 0) {
    console.log(mixedSignNumbers[m]);
  }
}
console.log("\n");
console.log("Challenge 5");
// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ["A",  "H",  "I",  "M",  "O",  "T",  "U",  "V",
  "W",  "X",  "Y",];
// Challenge 5 Code
console.log("\nChallenge 5 answer");

console.log(
  "This is the Array before modifaction: " + "\n" + symmetricalCapitals
);

for (let s = 0; symmetricalCapitals.length >= 9; s++) {
  if (symmetricalCapitals.length === 11) {
    symmetricalCapitals.shift();
    console.log(symmetricalCapitals);
  } else if (symmetricalCapitals.length === 10) {
    symmetricalCapitals.shift();
    console.log(symmetricalCapitals);
  } else if (symmetricalCapitals.length === 9) {
    symmetricalCapitals.pop();
    console.log(symmetricalCapitals);
  }
}
console.log("This is the final array: " + "\n" + symmetricalCapitals )

console.log("\n");
console.log("Challenge 6");
// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
// Challenge 6 Code
console.log("\nChallenge 6 answer");
console.log("This is the array before modification: " + "\n" + fibonacciNumbers)

for (let f = 0; fibonacciNumbers.length <= 9; f++){
  if (fibonacciNumbers.length === 7) {
    fibonacciNumbers.unshift(0);
    console.log(fibonacciNumbers)
  } else if (fibonacciNumbers.length === 8){
    fibonacciNumbers.push(31)
    console.log(fibonacciNumbers)
  } else if (fibonacciNumbers.length === 9){
    fibonacciNumbers.push(44)
    console.log("Final Array: " + "\n" + fibonacciNumbers)
  }
}
console.log("\n");
console.log("Challenge 7");
// // Challenge 7
// // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
// const newArray = [1, 2, 3, 4, 5];
// // Challenge 7 Code
console.log("/nChallenge 7 answer")

let newArray = ["blue", "red", "black", "white", "purple"]

for(let n = 0; n< newArray.length; n++){
  console.log(newArray[n])
}

console.log("\n");
console.log("Challenge 8");
// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const emptyArray = [];

// Challenge 8 Code
console.log("\nChallenge 8 answer");
console.log("This is the array before modification: " + "\n" + emptyArray)

for (let e = 0; emptyArray.length < 5; e++){
  if (emptyArray.length === 0){
    emptyArray.unshift("Basketball")
    console.log(emptyArray)
  } else if (emptyArray.length === 1){
    emptyArray.push("Hockey")
    console.log(emptyArray)
  } else if (emptyArray.length === 2) {
    emptyArray.push("Soccer")
    console.log(emptyArray)
  } else if (emptyArray.length === 3) {
    emptyArray.unshift("Baseball")
    console.log(emptyArray)
  } else if (emptyArray.length === 4) {
    emptyArray.push("Football")
    console.log(emptyArray)
  }
}
console.log("This is the final array: " + "\n" + emptyArray)

console.log("\n");
console.log("Challenge 9");
// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
// Challenge 9 Code
console.log("\nChallenge 9 Answer")
for (i = 3; i < 11 ; i++){//The condition of the loop is if the index counter (i) is less than 11 than the loop will run at increments of 1 starting at index 3. The loop will close when the count reachs 10
  console.log(students[i])// this code logs items in each index beggingin at 3 and ending when the loop closes when it reaches index 10.
}

console.log("\n");
console.log("Challenge 10");
// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
// Do NOT use slice, you will be using that for the next challenge!
// Challenge 10 Code
console.log("\nChallenge 10 Answer")

let copyOfStudents = []
  
  for(i = 3; i < 11; i++) { // the loops STARTS at index 3 and checks UNTIL index "10 i = 3; i < 11;"
    copyOfStudents.push(students[i]) // this pushes items in index 3 thru 11 into copyOfStudents
    
  }
  for(ctr = 0; ctr < 8; ctr++) {
    console.log(copyOfStudents[ctr]) // this prints out all the items in copyOfStudents 
  
  }


console.log("\n");
console.log("Challenge 11");
// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
// Challenge 11 Code
let sliceStudents = students.slice(3,11)
console.log("\nCopy of sliced original array")
console.log(sliceStudents)
console.log("\nChallenge 11 answer");
for (let s = 0; s < sliceStudents.length; s++) {

  console.log(sliceStudents[s])

}
console.log("\nOriginal Array Individually")
for (let s = 0; s < students.length; s++){
  console.log(students[s])
}

console.log("\n");
console.log("Challenge 12");
// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
// Challenge 12 Code
console.log("/nChanllenge 12 answer")

let dinoSlice = dinosaurs.slice(4,7)

console.log(dinoSlice)

console.log("\n");
console.log("Challenge 13");
// // Challenge 13
// // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
// // Challenge 13 Code

console.log("/nChanllenge 13 answer")

let dinoJoin = dinosaurs.join("*")

console.log(dinoJoin)


console.log("\n");
console.log("Challenge 14");
// // Challenge 14
// // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
// // Challenge 14 Code
console.log("/nChanllenge 14 answer")
console.log(dinosaurs.reverse())
console.log("Original Array Permanetally Reverversed" + "\n" + dinosaurs)

console.log("\n");
console.log("Challenge 15");
// // Challenge 15
// // Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
// // Challenge 15 Code

console.log("\nChallenge 15 answer")
console.log(dinosaurs.concat(students))


