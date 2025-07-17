import React, { Fragment, useState } from 'react'
import { useParams } from 'react-router'

function LoginPage() {

    const {count} = useParams();
    const [data, setdata] = useState();
    
    
  return (
    <Fragment>
        <h1>{count}</h1>
    </Fragment>
  )
}

export default LoginPage