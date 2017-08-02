const buildStr = (letter, counter) => `${letter}${counter > 1 ? counter : ''}`;
const lens = prop => obj => obj[prop];
const resultLens = lens('result');
const initState = {
    prev: null,
    counter: 1,
    result: ''
};

module.exports.rle = str => resultLens(str.split('').reduce(
    ({prev, counter, result}, letter, idx, src) => {
        if (prev === letter) {
            counter++;
        } else if (prev) {
            result += buildStr(prev, counter);
            counter = 1;
        }
        
        idx === src.length - 1 && (result += buildStr(letter, counter));
        return {prev: letter, counter, result};
    }, initState)
);

module.exports.rle2 = str => {
    const regexp = /([A-Z])\1*/g;
    let match = null,
        result = '';

    while(match = regexp.exec(str)) {
        let [sequence, letter] = match;
        result += `${letter}${sequence.length > 1 ? sequence.length : ''}`
    }

    return result;
}

module.exports.rle3 = str => str.split('').reduce(
    (accumulator, letter, idx, src) => 
        (accumulator.push(!accumulator.length || letter !== src[idx-1]
            ? letter
            : `${accumulator.pop()}${letter}`
        ), accumulator)
    , []
).map(sequence => `${sequence[0]}${sequence.length > 1 ? sequence.length : ''}`).join('');