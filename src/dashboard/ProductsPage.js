import React, { Fragment, useEffect, useState } from 'react'
import pdata from './ProductsData';
import img from './images/wallpaperflare.com_wallpaper (8).jpg';
import { Link } from 'react-router';

function ProductsPage() {

    const [data, setData] = useState();
    


    useEffect(() => {
        setData(pdata);
        console.log(pdata);
    }, []);

    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    {pdata.map((d) => (
                        <div className='col-lg-3'>
                            <div className="card">
                                <Link to={`/productdetails/${d.id}`}>
                                    <img src="logo192.png" className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body">

                                    <h5 className="card-title">{d.name}</h5>
                                    <div className='d-flex justify-content-between my-3'>
                                        <h3 ><b>{d.price}/-</b></h3>
                                        <label className='right'>{d.category}</label>
                                    </div>

                                    <button to="" className="btn btn-warning w-100">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage