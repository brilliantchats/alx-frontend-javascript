export default function cleanSet(set, startString) {
  const strLen = startString.length;
  const resultArr = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      resultArr.push(value.slice(strLen));
    }
  }
  return resultArr.join('-');
}
