export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    const arrayOfIds = students.map((obj) => obj.id);
    return arrayOfIds;
  }
  return [];
}
