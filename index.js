function hasTargetSum(array, target) {
  // Write your algorithm here

  // Getting all combinations
  let result = array.reduce( (acc, v, i) =>
  acc.concat(array.slice(i+1).map( w => v + w )),
[]);
  //console.log(result)

  // Checking if target in combinations
  if (result.includes(target)){
    return true
  } else {
    return false
  }
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/ //commented in code

/*
  Add written explanation of your solution here
*/ //commented in code 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
