export default function getStudentsByLocation(students, city) {
  const studentsOfCity = students.filter((obj) => obj.location === city);
  return studentsOfCity;
}
