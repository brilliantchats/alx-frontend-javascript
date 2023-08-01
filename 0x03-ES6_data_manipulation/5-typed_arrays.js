export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  if (position < 0 && position >= int8View.length) {
    throw new Error('Position outside range');
  } else {
    int8View[position] = value;
    const dataview = new DataView(buffer);
    return dataview;
  }
}
