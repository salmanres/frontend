import React, { Fragment, useContext } from "react";
import CounterContext from "./context/MyContext";

function ContextAPIPage(){

    const {count, increment, decrement} = useContext(CounterContext);

    return(
        <Fragment>
            <h1>the count is : {count}</h1>
            <button onClick={()=>increment()}>increase</button>
            <button onClick={()=>decrement()}>decrease</button>
        </Fragment>
    )
}

export default ContextAPIPage;