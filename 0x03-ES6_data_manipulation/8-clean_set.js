function cleanSet(set, startString) {
  // Check if startString is a non-empty string
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  // Filtering values in the set that are strings and start with the specified string
  const filteredValues = Array.from(set).filter(
    (value) => typeof value === 'string' && value.startsWith(startString)
  );

  // Append the rest of the string after startString and join with hyphens
  return filteredValues.map((value) => value.slice(startString.length)).join('-');
}

export default cleanSet;

