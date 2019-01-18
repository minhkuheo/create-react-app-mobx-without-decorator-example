import React from 'react';
import { inject, observer } from 'mobx-react';

class BClick extends React.Component {

    clickPlus = () => {
        const { plusMinusStore } = this.props;
        plusMinusStore.addToSum('B');
    }
    
    clickMinus = () => {
        const { plusMinusStore } = this.props;
        plusMinusStore.minusToSum('B');
    }

    render() {
        return (
            <div>
                <h1>This is B:</h1>
                <button className="button button1" type="button" onClick={this.clickPlus}><h2>Plus +</h2></button>
                <button className="button button1" type="button" onClick={this.clickMinus}><h2>Minus -</h2></button>
            </div>
        );
    }
}

export default inject('plusMinusStore')(observer(BClick));