function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map(student => student.id);
}

// Exporting IDs
export default getListStudentIds;

