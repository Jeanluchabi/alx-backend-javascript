function getStudentIdsSum(students) {
  // This Uses the reduce function to sum up all the student ids
  return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
