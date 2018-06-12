import React, {Component} from 'react';
import Pros from './containers/pros';
import Cons from './containers/cons';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="main">
                <h1>Should I eat at McDonalds?</h1>
                <div className="pros-cons-parent">
                    <div className="pros-style">
                        <p>PROS</p>
                        <Pros/>
                    </div>
                    <div className="cons-style">
                        <p>CONS</p>
                        <Cons/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;