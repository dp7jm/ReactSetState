import React, { Component } from 'react';
import Display from './Display';
class Counter extends Component {
    render() {
        return (
            <div>
                <h1>This is counter</h1>
                <Display />

            </div>
        )
    }
}

export default Counter;