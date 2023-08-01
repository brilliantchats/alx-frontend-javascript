export default function getStudentIdsSum(students) {
  const sumOfStudentIds = students.reduce((sum, currentValue) => sum + currentValue.id, 0);
  return sumOfStudentIds;
}
