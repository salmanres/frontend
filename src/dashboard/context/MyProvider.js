import React, { Fragment, useState } from "react";
import CounterContext from "./MyContext";

function MyProvider({ children }) {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);


    return (
        <Fragment>
            <CounterContext.Provider value={{count, increment, decrement}}>
                {children}
            </CounterContext.Provider>
        </Fragment>
    )
}

export default MyProvider;