function getStudentsByLocation(students, city) {
  // Use the filter function to find students located in the specified city
  return students.filter((student) => student.location === city);
}

// Exporting the Students'location
export default getStudentsByLocation;
