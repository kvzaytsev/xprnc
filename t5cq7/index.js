const buildStr = (letter, counter) => `${letter}${counter > 1 ? counter : ''}`;
const lens = prop => obj => obj[prop];
const resultLens = lens('result');
const initState = {
    prev: null,
    counter: 1,
    result: ''
};

export const rle = str => resultLens(str.split('').reduce(
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