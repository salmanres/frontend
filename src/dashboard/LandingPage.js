import React, { Fragment } from 'react'
import Navbar from './navigation/Navbar'
import Sidebar from './navigation/Sidebar'

function LandingPage() {
    return (
        <Fragment>
            <Navbar />
            <Sidebar />
        </Fragment>
    )
}

export default LandingPage