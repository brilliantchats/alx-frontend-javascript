export default function guardrail(mathFunction) {
  const arr = [];
  try {
    const result = mathFunction();
    arr[0] = result;
    arr[1] = 'Guardrail was processed';
  } catch (err) {
    arr[0] = `Error: ${err.message}`;
    arr[1] = 'Guardrail was processed';
  }

  return arr;
}
