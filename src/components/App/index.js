import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
import { 
    BrowserRouter, 
    // Route, 
    // Switch 
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import Stores from '../Stores';
import PlusMinus from '../PlusMinus';

class App extends Component {
    render() {
        return (
            <Provider {...Stores}>
                <BrowserRouter>
                    <div className="App">
                        <header className="App-header">
                            <h1>Testing case for create-react-app with mobx without decorator</h1>
                        </header>
                        <main>
                            <PlusMinus />
                        </main>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
