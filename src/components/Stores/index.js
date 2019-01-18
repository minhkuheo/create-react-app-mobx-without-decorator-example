import {
    configure
} from 'mobx';

import PlusMinusStore from './PlusMinusStore';

configure({ enforceActions: "observed" });
// configure({ enforceActions: "always" });

class RootStore {
    constructor() {
        // this.sessionStore = new SessionStore(this);
        this.plusMinusStore = new PlusMinusStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;