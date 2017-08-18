const sum = array => array.reduce((res, el) => res += el, 0);
const getSetForSum = (inputArray, targetSum) => {
  let accumulators = []; 

  inputArray
    .sort((a,b) => a - b)
    .forEach( el => {
      accumulators = accumulators.filter(acc => sum(acc) <= targetSum);
      accumulators = accumulators.concat(accumulators.map(acc => acc.concat(el)).concat([[el]]));
    });

  accumulators = accumulators.filter(acc => sum(acc) === targetSum);
  return accumulators;
};

module.exports.getSetForSum = getSetForSum;