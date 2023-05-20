function findDistinctSum(set1, set2) {
  // Combine the two sets into a single array
  const combinedSet = set1.concat(set2);

  // Create an empty array to store distinct elements
  const distinctElements = [];

  // Iterate over the combined set
  for (let i = 0; i < combinedSet.length; i++) {
    const element = combinedSet[i];

    // Check if the element is not already present in the distinctElements array
    if (!distinctElements.includes(element)) {
      distinctElements.push(element);
    }
  }

  // Calculate the sum of all distinct elements
  let sum = 0;
  for (let i = 0; i < distinctElements.length; i++) {
    sum += distinctElements[i];
  }

  return sum;
}

//using the set given in the example
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const distinctSum = findDistinctSum(set1, set2);
console.log(distinctSum);
