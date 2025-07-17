import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import pdata from './ProductsData';
import img1 from './images/wallpaperflare.com_wallpaper (8).jpg';
import { IoMdBackspace } from "react-icons/io";

function ProductDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <Fragment>
            <button className='btn btn-outline-warning' onClick={navigate(-1)}><IoMdBackspace /></button>
            <div className="card" >
                <img src={img1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{pdata[id].name}</h5>
                    <h2>{pdata.price}</h2>
                    <p> publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.
                        Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words are the truncation of dolorem ipsum ("pain itself").</p>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductDetailsPage