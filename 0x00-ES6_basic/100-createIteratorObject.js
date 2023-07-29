export default function createIteratorObject(report) {
  const allDepartments = report.allEmployees;
  const employees = [];
  for (const department in allDepartments) {
    if (department) {
      employees.push(...allDepartments[department]);
    }
  }
  const len = employees.length;
  const customIterator = {
    [Symbol.iterator]() {
      let counter = 0;
      return {
        next() {
          if (counter < len) {
            const value = employees[counter];
            counter += 1;
            return { done: false, value };
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
  return customIterator;
}
