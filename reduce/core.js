function sum(array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

function productAll2(array) {
  //flatten array with reduce
  var flattened = array.reduce((acc,cur)=>{
    return [...acc, ...cur];
  });

  return flattened.reduce((acc,cur) =>{
    return acc * cur;
  });
}

function productAll(array){
  return array.reduce((accumulator, currentArray) => {
    return accumulator * currentArray.reduce((acc,cur)=>{
      return acc * cur;
    });
  },1);
}

function luckyNumbers(array) {
  var initial = "Your lucky numbers are:"

  var numberString = array.reduce((acc,cur) => {
    return acc + ', ' + cur;
  });

  return initial + ' ' + numberString + '.';
  // good variable names here
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};
