function onlyEven(array) {
  return array.filter(element => element % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter(element => !element.includes(' '));
}

function positiveRowsOnly(array) {
  return array.filter(row => row.every(item => item >= 0)); //(hint: use Array.prototype.some())
}

function truthyValuesOnly(array) {
  return array.filter(element => !!element);
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
