// 0, 1, 1, 2, 3, 5, 8
function fibonacci(num) {
  if (num < 2) {
    return num
  }

  let tot = 0;
  let num1 = 0;
  let num2 = 1;
  let newNum;
  for(let i = 0; i < num-1; i++){
    newNum = num1 +num2;
    if (i >= num-2){
      tot +=newNum
      num1 = num2;
      num2 = newNum;
    } else {
      num1 = num2;
      num2 = newNum;
    }
}
  return tot
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
