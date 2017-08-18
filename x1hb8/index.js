class Wagon {
    constructor(lampOn, label) {
        this.label = label;
        this.lampOn = lampOn || false;
        this.next = null;
        this.prev = null;
    }

    setNext(next) {
        this.next = next;
        next.setPrev(this);
    }

    getNext() {
        return this.next;
    }

    setLampOn(lampOn) {
        this.lampOn = lampOn;
    }

    isLampOn() {
        return this.lampOn;
    }

    setPrev(prev) {
        this.prev = prev;
    }

    getPrev() {
        return this.prev;
    }
}

const goWagonTrip = (wagon) => {
    let total, count = 1;

    wagon = wagon.getNext();
    while(!wagon.isLampOn()) {
        count++;
        wagon = wagon.getNext();
    }

    wagon.setLampOn(false);
    total = count;
    while(count--) {
        wagon = wagon.getPrev();
    }

    if(!wagon.isLampOn()) {
        return total;
    } else {
        return goWagonTrip(wagon);
    }
}

const getWagonsCount = (wagon) => {
    wagon.setLampOn(true);
    return goWagonTrip(wagon);
};

module.exports.Wagon = Wagon;
module.exports.getWagonsCount = getWagonsCount;