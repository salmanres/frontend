import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';

function ReactHookFormPage() {
    const count = useSelector((state)=> state.counter.value);

    const {
        register, handleSubmit, formState: { errors }, } = useForm();

    const onsubmit = (data) => {
        console.log(data);
    }

    return (
        <Fragment>
            <h1>{count}</h1>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-lg-4'>
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <input className='form-control mt-3 ' type='text' placeholder='enter username' {...register("username", { required: true })} />
                            {errors.username && <p>username is required</p>}
                            <input className='form-control mt-3' type='email' placeholder='enter email'  {...register("email", { required: true })}/>
                            {errors.username && <p className='text-danger'>email is required</p>}
                            <input className='form-control mt-3' type='number' placeholder='enter mobile' {...register("mobile", { required: true })} />
                            {errors.username && <p className='text-danger'>mobile is required</p>}
                            <input className='form-control mt-3' type='password' placeholder='enter password' {...register("pasword", { required: true })} />
                            {errors.username && <p className='text-danger'>password is required</p>}
                            <input type='submit' />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ReactHookFormPage