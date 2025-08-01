import react, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import { IoHome } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";

function ApiPage() {

    const [data, setdata] = useState();
    const navigate = useNavigate();

    //http mthods - get - post - put - patch - delete
    // rest - representational state transfer

    const getdata = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(response.data);
            setdata(response.data);
        } catch (err) {
            console.log(err);
        };
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <Fragment>
            <div className="mynav">
                
                <Link onClick={() => navigate(-1)}><IoMdArrowRoundBack /></Link>
                <Link to='/'><IoHome /></Link>
            </div>

            <div className="container-fluid">
                <div className="row">
                    {data && data.map((item) => (
                        <div className="col-lg-6">
                            <div className="card">
                                <img src="https://thecsrjournal.in/wp-content/uploads/2018/10/speed-post.png" className="card-img-top post-img" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.body}</p>
                                    <Link to="/" className="btn btn-primary">VIEW</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </Fragment>
    )
}

export default ApiPage;