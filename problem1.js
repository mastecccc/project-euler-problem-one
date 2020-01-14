// PROJECT EULER: PROBLEM ONE
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

// PROJECT EULER: SOLUTION
// STEP ONE: We need to have a number to increment when finding all multiples below 1000
// STEP TWO: We need to loop through all numbers from 1-1000 (e.g. all natural numbers less than 1000)
// STEP THREE: If i in the loop is divisble by 5 or 3 with a remanider of 0 then we increment the sum, this results in total sum of natural numbers divisible by 3 or 5 under 1000

var sum = 0;

for(var i = 1; i < 1000; i++) {
  if(i % 3 == 0 || i % 5 == 0) {
    sum += i;
  }
}

console.log(sum);