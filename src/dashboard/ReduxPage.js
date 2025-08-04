import React, { Fragment, useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from './redux/CounterSlice';
import CounterContext from './context/MyContext';

function ReduxPage() {

    const count2 = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const {count} = useContext(CounterContext);

    const [value, setvalue] = useState(100);

    return (
        <Fragment>
            <h1>counter using context api is {count}</h1>
            <h1>my redux</h1>
            <h2>the value of counter is : </h2>
            <h1>{count2}</h1>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <input type='number' onInput={(event) => setvalue(Number(event.target.value))} />
            <button onClick={()=>dispatch(incrementByValue(value))} >increase by value</button>
        </Fragment>
    )
}

export default ReduxPage;