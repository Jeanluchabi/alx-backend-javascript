function hasValuesFromArray(set, array) {
  // Check if every element in the array exists in the set
  return array.every((element) => set.has(element));
}

// Exporting a has function
export default hasValuesFromArray;
