function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  since we are going through all the arrays once the time complexity is O(n)
*/

/* 
  Add your pseudocode here
  create an empty set
  for i of array{complement = target-i} 
  if(complement number in set)
    return true
    add the element of the array to the set
  else return false 
*/

/*
  Add written explanation of your solution here
  the solution goes through the array and find the compliment number that gives you the target
  if the complement number is in the set return true
  else return false if you get to the end of the array without getting a complementing number

*/

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
