import React, { Fragment } from 'react'
import Navbar from './navigation/Navbar'
import Slider from './Slider'

function LandingPage() {
    return (
        <Fragment>
            <Navbar />
            <Slider />
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-dark">Dark</button>
            <button type="button" className="btn btn-outline-secondary">Secondary</button>
            <button type="button" className="btn btn-outline-warning">Warning</button>
            <div className='m-5 border shadow-none'>
                <h1>hello</h1>
            </div>
            <button type="button" className="btn btn-primary m-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid mt-5 '>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyyKKpPJRu0FA9Nzqk37da6SG8i_khxLnAQ&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <p className="card-text me-5 mt-5 mb-5 p-5 ps-5 pe-5 pt-5 pb-5 mx-5 my-5">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyyKKpPJRu0FA9Nzqk37da6SG8i_khxLnAQ&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyyKKpPJRu0FA9Nzqk37da6SG8i_khxLnAQ&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyyKKpPJRu0FA9Nzqk37da6SG8i_khxLnAQ&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LandingPage