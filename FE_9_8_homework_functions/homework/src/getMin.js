var arr = [3, 0, -3],
  fMin;

function getMin(arr) {
  var arrLen = arr.length,
    minEl = arr[0];
  for (var i = 0; i < arrLen; i++) {
    if (minEl > arr[i]) {
      minEl = arr[i];
    }
  }
  return minEl;
}
fMin = getMin(arr);

//console.log(fMin);


