export const weakMap = new WeakMap();
export function queryAPI(obj) {
  if (weakMap.get(obj) >= 5) {
    weakMap.set(obj, (weakMap.get(obj) || 0) + 1);
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(obj, (weakMap.get(obj) || 0) + 1);
  }
}
