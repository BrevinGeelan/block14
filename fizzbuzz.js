//loop thru 1-100
for (let i = 1; i <= 100; i++) {
    //check numbers that are multiples of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      //numbers only divisible by 3
    } else if (i % 3 === 0) {
      console.log("Fizz");
      //numbers only divisible by 5
    } else if (i % 5 === 0) {
      console.log("Buzz");
      //print the rest
    } else {
      console.log(i);
    }
  }