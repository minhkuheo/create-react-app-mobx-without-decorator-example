import { observable, computed, action, decorate } from 'mobx';

class PlusMinusStore {
    sum = 0;
    aClick = 0;
    bClick = 0;
    historyAct = [];

    // ///////////////////////////////////////
    //
    //              COMPUTED
    //
    // ///////////////////////////////////////
    get clickDiffirence() {
        const diff = this.aClick - this.bClick;
        if (diff === 0 ) {
            return this.aClick === 0 ? 'let us begin !' : 'The number of clicking time is now even';
        } else {
            const compareWord = diff > 0 ? 'more' : 'less';
            const posDiff = diff > 0 ? diff: diff * -1;
            const timeWord = posDiff > 1 ? 'times' : 'time';

            return `A has clicked ${compareWord} than B: ${posDiff} ${timeWord}`;
        }
    }
    
    // ///////////////////////////////////////
    //
    //               ACTION
    //
    // ///////////////////////////////////////
    addToSum = (AorB) => {
        this.sum++;
        AorB === 'A' ? this.tickA() : this.tickB();
        this.addToHistory(AorB);
    }

    minusToSum = (AorB) => {
        this.sum--;
        AorB === 'A' ? this.tickA() : this.tickB();
        this.addToHistory(AorB);
    }

    tickA = () => { this.aClick++; }
    tickB = () => { this.bClick++; }

    addToHistory = (AorB) => {
        this.historyAct.push(AorB === 'A' ? '....A........ clicked' : '........B.... clicked');
    }


    /**
     *          HELPER FUNCTIONS
     */

    convertNegativeToPositive = () => {
        const diff = this.aClick - this.bClick;
        return diff < 0 ? diff * -1 : diff;
    }
}
decorate(PlusMinusStore, {
    sum: observable,
    aClick: observable,
    bClick: observable,
    historyAct: observable,
    clickDiffirence: computed,
    addToSum: action,
    minusToSum: action,
    tickA: action,
    tickB: action,
    addToHistory: action,
});

export default PlusMinusStore;