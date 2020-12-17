import React, { Component } from 'react';

class Time extends Component {
    state = {
        date: new Date()
    };
    interval() {
        setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }
    render() {
        return (
            <div>
                <h3>Current Local Time</h3>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
                {this.interval()}
            </div>
        );
    };
}
export default Time;
