import * as React from 'react';
import { connect } from 'react-redux';
import { incrementCounterAction } from '../actions/CounterActions';

const CounterContainer = ({ dispatch, count }) => (
    <div>
        <p onClick={() => dispatch(incrementCounterAction())}>count: {count}</p>
    </div>
);

const mapStateToProps = (state) => state.counter

export default connect(mapStateToProps)(CounterContainer);