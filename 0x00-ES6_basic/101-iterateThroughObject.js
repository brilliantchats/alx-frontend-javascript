export default function iterateThroughObject(reportWithIterator) {
  const arr = [];
  for (const name of reportWithIterator) {
    arr.push(name);
  }
  return arr.join(' | ');
}
