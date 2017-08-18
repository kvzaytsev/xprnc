class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
        return child;
    }

    addChildren(...children) {
        this.children.push(...children);
    }
}

const handleNode = (node, acc, result) => {
    acc.push(node.value);

    if (node.children.length) {
        node.children.forEach(child => handleNode(child, acc, result));
    } else {
        result.push(acc.join(''));
    }
    
    acc.pop();
};

const serializeTree = (root) => {
    let accumulator = [];
    let result = [];
    root.children.forEach(child => handleNode(child, accumulator, result));

    return result.join(' ');
}

const fillParent = (list, parent) => {
    const letter = list.shift();

    if (letter) {
        let possibleChild = parent.children.find(c => c.value === letter);
        
        if (!possibleChild) {
            possibleChild = parent.addChild(new Node(letter));
        }
    
        fillParent(list, possibleChild);
    }
    
}

const handleWord = (word, root) => {
    const letters = word.split('');
    fillParent(letters, root);
}

const deserializeTree = (text) => {
    const root = new Node(null);
    words = text.split(/\s+/);
    words.forEach(word => handleWord(word, root));
    return root;
}

module.exports.serializeTree = serializeTree;
module.exports.deserializeTree = deserializeTree;
module.exports.Node = Node;