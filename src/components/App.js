import React, { Component } from 'react';
import Convert from './Convert';

class App extends Component {
    constructor() {
        super();

        this.state = { letters: [] };
    }

    render() {
        return (
            <div>
                <h2>From Roman to Arabic</h2>
                <Convert />
            </div>
        )
    }
}

export default App;