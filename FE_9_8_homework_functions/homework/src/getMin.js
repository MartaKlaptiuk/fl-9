let arr = [], //here you can enter your numbers
  fMin;

function getMin(arr) {
  let arrLen = arr.length,
    minEl = arr[0];
  for (let i = 0; i < arrLen; i++) {
    if (minEl > arr[i]) {
      minEl = arr[i];
    }
  }
  return minEl;
}
fMin = getMin(arr);

console.log(fMin);


