import React from 'react';
import { inject, observer } from 'mobx-react';
import AClick from './A';
import BClick from './B';

class PlusMinus extends React.Component {
    render() {
        const { plusMinusStore } = this.props;
        const { sum, clickDiffirence, historyAct } = plusMinusStore;

        return (
            <div>
                <h1>Static: </h1>
                <ul>
                    <li><p><strong>Sum</strong>: {sum}</p></li>
                    <li><p><strong>Clicking status</strong>: {clickDiffirence}</p></li>
                    <li><p><strong>Clicking history</strong>:</p></li>
                    <ul>
                        {
                            historyAct.map((historyItem, idx) => {
                                return (
                                    <li key={idx}>{historyItem}</li>
                                );
                            })
                        }
                    </ul>
                </ul>

                <hr />
                <AClick />
                <hr />
                <BClick />
            </div>
        );
    }
}

export default inject('plusMinusStore')(observer(PlusMinus));