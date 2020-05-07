import React from 'react';
import {increment, decrement} from "../actions/counterActions";
import {connect} from 'react-redux';

class Counter extends React.Component {
    add = () => {
        this.props.increment();
    };

    remove = () => {
        this.props.decrement();
    };

    render() {
        const {count} = this.props.count;
        return (
            <div>
                <h2>This is very simple example of how redux flow works</h2>
                <div>
                    <button onClick={this.remove}>-</button>
                    <h2>{count}</h2>
                    <button onClick={this.add}>+</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count // name given to combine reducer
    };
}

export default connect(mapStateToProps, {increment, decrement})(Counter);