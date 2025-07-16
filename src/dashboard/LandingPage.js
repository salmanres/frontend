import React, { Fragment } from 'react'
import Navbar from './navigation/Navbar'
import { Outlet } from 'react-router'

function LandingPage() {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
        </Fragment>
    )
}

export default LandingPage