import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from './redux/CounterSlice';

function ReduxPage() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const [value, setvalue] = useState(100);

    return (
        <Fragment>
            <h1>my redux</h1>
            <h2>the value of counter is : </h2>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <input type='number' onInput={(event) => setvalue(Number(event.target.value))} />
            <button onClick={()=>dispatch(incrementByValue(value))} >increase by value</button>
        </Fragment>
    )
}

export default ReduxPage;