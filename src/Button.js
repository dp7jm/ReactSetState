import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomnumber: 1,
            stop: false
        }
        this.randomNum = this.randomNum.bind(this);
    }
    randomNum() {
        let num = Math.floor(Math.random() * 10);
        this.setState({ randomnumber: num });
    }
    render() {
        return (
            <div>
                <div>{this.state.randomnumber}</div>
                {this.state.randomnumber === 7 ? <div>winner</div> :
                    <div>
                        <div>{this.state.randomnumber}</div>
                        <button
                            onClick={this.randomNum}>
                            Clik me
                    </button>
                    </div>
                }
            </div>
        )
    }
}

export default Button;