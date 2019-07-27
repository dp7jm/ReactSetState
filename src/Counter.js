import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';
class Counter extends Component {
    render() {
        return (
            <div>
                <h1>This is counter</h1>
                <Display />
                <Button />

            </div>
        )
    }
}

export default Counter;