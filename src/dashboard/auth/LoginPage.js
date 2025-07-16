import React, { Fragment } from 'react'
import { useParams } from 'react-router'

function LoginPage() {

    const {count} = useParams();
    

  return (
    <Fragment>
        <h1>{count}</h1>
    </Fragment>
  )
}

export default LoginPage