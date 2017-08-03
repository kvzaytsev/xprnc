const getCollector = (limit, interval) => {
  const cap = Math.floor(limit/interval);
  const accumulator = [];
  let max = null;
  let min = null;
  let avg = null;

  return {
    update(value) {
      let length = accumulator.unshift(value);
      if (length > cap) {
        accumulator.pop();
      } 

      max = Math.max(...accumulator);
      min = Math.min(...accumulator);
      avg = parseFloat((accumulator.reduce((sum, el) => sum + el, 0) / accumulator.length).toFixed(2));
    },
    getStatus() {
      return {
        max,
        min,
        avg
      }
    },
    getSize() {
      return accumulator.length;
    }
  };
}

module.exports.getCollector = getCollector;