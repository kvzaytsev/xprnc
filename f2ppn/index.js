const hasSuitableSet = (sets, targetNumber) => targetNumber >= 0 && (
  sets.reduce((can, set) => can || targetNumber % set === 0, false) || 
  sets.reduce((can, set) => hasSuitableSet(sets, targetNumber - set), false)
);

const getSetsQuantity = (sets, targetNumber) => {
  const quantityMap = sets.reduce((map, set) => (map[set] = 0, map), Object.create(null));
  const clone = map => Object.assign(Object.create(null), map);
  
  const tryNumber = (number, map) => {
    let suitableMap = null;

    if (number >= 0) {

      sets.forEach(set => {
        if (number % set === 0) {
          map[set] += number / set;
          suitableMap = map;
        }
      });

      sets.forEach(set => {
        let mapClone = clone(map);
        if (!suitableMap && set <= number) {
          mapClone[set]++;
        }
        suitableMap = suitableMap || tryNumber(number - set, mapClone);
      });
    }
    
    return suitableMap;
  };
  
  return tryNumber(targetNumber, clone(quantityMap));
};

const getAllSets = (sets, targetNumber) => {
  const maxValuesMap = sets.reduce((map, set) => (map[set] = Math.floor(targetNumber/set), map), Object.create(null));
}

module.exports.hasSuitableSet = hasSuitableSet;
module.exports.getSetsQuantity = getSetsQuantity;