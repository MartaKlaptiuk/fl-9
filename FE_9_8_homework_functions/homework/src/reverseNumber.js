const reverseInt = (num) => {
  let numLength = +String(num).length;
  let newNum = '';

  if (String(num)[0] === '-') {
    newNum += '-';
  }

  for (let i = numLength - 1; i >= 0; i -= 1) {
    if (String(num)[i] === '-') {
      break;
    } else {
      newNum += String(num)[i];
    }

  }

  return newNum;
};

console.log(reverseInt());