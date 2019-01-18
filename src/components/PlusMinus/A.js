import React from 'react';
import { inject, observer } from 'mobx-react';

class AClick extends React.Component {

    clickPlus = () => {
        const { plusMinusStore } = this.props;
        plusMinusStore.addToSum('A');
    }
    
    clickMinus = () => {
        const { plusMinusStore } = this.props;
        plusMinusStore.minusToSum('A');
    }

    render() {
        return (
            <div>
                <h1>This is A:</h1>
                <button className="button button1" type="button" onClick={this.clickPlus}><h2>Plus +</h2></button> {' '}
                <button className="button button1" type="button" onClick={this.clickMinus}><h2>Minus - </h2></button>
            </div>
        );
    }
}

export default inject('plusMinusStore')(observer(AClick));