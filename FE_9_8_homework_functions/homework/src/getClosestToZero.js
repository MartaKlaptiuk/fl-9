let x = 0;
let array = [9, 5, -4, -9];
let getClosestToZero = array.sort((a, b) => Math.abs(x - a) - Math.abs(x - b))[0];
//console.log(getClosestToZero);
