'use strict';

const arrayDifference = (firstArray, lastArray) => {
  return firstArray.filter(element => lastArray.indexOf(element) === -1);
}

const removeDuplicates = (data, key_name) => {
  for (let index = 0; index < data.length; index++) {
    let key_value = data[index][key_name];
    let lastIndexFounded = data.map(element => element[key_name]).lastIndexOf(key_value);
    while (lastIndexFounded !== index) {
      data.splice(lastIndexFounded, 1);
      lastIndexFounded = data.map(element => element[key_name]).lastIndexOf(key_value);
    }
  }

  return data;
}

const chunk = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
}

module.exports = {
  arrayDifference,
  removeDuplicates,
  chunk
}
