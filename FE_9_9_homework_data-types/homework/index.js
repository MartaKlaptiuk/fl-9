function findType(parameter) {
  return typeof parameter;
}

function forEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

function map(array, func) {
  let newArray = [];
  forEach(array, function (el) {
    newArray.push(func(el));
  });
  return newArray;
}

function filter(array, func) {
  let newArray = [];
  forEach(array, function (el) {
    if (func(el)) {
      newArray.push(el);
    }
  });
  return newArray;
}

function getAdultAppleLovers(data) {
  return map(
    filter(data, function (el) {
      return el.favoriteFruit === 'apple' && el.age >= 18;
    }),
    function (el) {
      return el.name;
    }
  );
}

function keys(array) {
  let newArray = [];
  for (let key in array) {
    if (array.hasOwnProperty(key)) {
      newArray.push(key);
    }
  }
  return newArray;
}

function values(array) {
  let newArray = [];
  for (let key in newArray) {
    if (newArray.hasOwnProperty(key)) {
      newArray.push(newArray[key]);
    }
  }
  return newArray;
}

function showFormattedDate(date) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `It is ${date.getDate()} of ${date[date.getMonth()]}, ${date.getFullYear()}`;
}
