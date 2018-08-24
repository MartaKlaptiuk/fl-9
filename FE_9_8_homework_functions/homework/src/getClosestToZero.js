let x = 0;
let array = []; //here you can enter your numbers
let getClosestToZero = array.sort((a, b) => Math.abs(x - a) - Math.abs(x - b))[0];
console.log(getClosestToZero);
