export default function cleanSet(set, startString) {
  const strLen = startString.length;
  const resultArr = [];
  for (const value of set) {
    if (value.startsWith(startString) && startString !== '') {
      resultArr.push(value.slice(strLen));
    }
  }
  if (resultArr.length > 0) {
    return resultArr.join('-');
  }
  return '';
}
