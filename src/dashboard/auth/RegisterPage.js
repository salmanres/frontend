import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';

function RegisterPage() {

    let [count, setCount] = useState(1);
    const inputref = useRef();
    const navigate = useNavigate();

    const focus = () => {
        inputref.current.focus();
    }

    const increase = () => {
        setCount(count++);
    };

    const welcomefunction = () => {
        console.log('hello this is welcome message');
    };

    const register = () => {
        alert('registered successfully');
        navigate(`/login/${count}`);
    };

    useEffect(()=>{
        welcomefunction();
        focus();
    }, [count]);

    return (
        <Fragment>

            <h1>{count}</h1>
            <button onClick={increase}>increase</button>
            <input type='text' ref={inputref} placeholder='enter username' />
            <input type='email' placeholder='enter email' />
            <input type='number' placeholder='enter mobile' />
            <input type='password' placeholder='enter password' />
            <button onClick={register}>register</button>

        </Fragment>
    )
}

export default RegisterPage