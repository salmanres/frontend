import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

function RegisterPage() {
    
    const [data, setdata] = useState();

    const getdata = (event) => {
        setdata({
            ...data,
            [event.target.name]: event.target.value
        });
        console.log(data);
    };

    const handleregister = () => {
        if (data && data.username && data && data.email) {
            localStorage.setItem('userdata', JSON.stringify(data));
            // alert('registration successful');
            toast.success('registration successful!');
        }else{
            toast.error('all fields are required!');
        };
    }
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-lg-4'>
                        <input className='form-control mt-3 ' type='text' placeholder='enter username' name='username' onInput={getdata} />
                        <input className='form-control mt-3' type='email' placeholder='enter email' name='email' onInput={getdata} />
                        <input className='form-control mt-3' type='number' placeholder='enter mobile' name='mobile' onInput={getdata} />
                        <input className='form-control mt-3' type='password' placeholder='enter password' name='password' onInput={getdata} />
                        <button className='btn btn-warning w-100 mt-3' onClick={handleregister}>register</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Fragment>
    )
}
export default RegisterPage