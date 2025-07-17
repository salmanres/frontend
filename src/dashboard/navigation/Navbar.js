import React, { Fragment } from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className='m-3'>REGISTER</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className='m-3'>LOGIN</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className='m-3'>PRODUCTS</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar