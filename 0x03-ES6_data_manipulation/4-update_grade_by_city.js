export default function updateStudentGradeByCity(students, city, newGrades) {
  const filterStudents = students.filter((obj) => obj.location === city);
  const finalStudents = filterStudents.map((student) => {
    const studentCopy = JSON.parse(JSON.stringify(student));
    for (const obj of newGrades) {
      if (studentCopy.id === obj.studentId) {
        studentCopy.grade = obj.grade;
        return studentCopy;
      }
    }
    studentCopy.grade = 'N/A';
    return studentCopy;
  });
  return finalStudents;
}
