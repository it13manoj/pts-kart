import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import URL from "../../config/API";

function Woman() {

    const [product, setProduct] = useState([]);
    const [token] = useState(localStorage.getItem("token"));
    const navigate = useNavigate();

    const getProducts = () => {
        axios.get(`${URL.BASE_URL}/product`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            console.log(res?.data);
            setProduct(res?.data);
        }).catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        if (token) {
            getProducts();
        }
    }, [token]);

    const openDetailPage = (id) =>{
         navigate(`/product/${id}`);
   }

    return (
        <>
            <section className="section recent-part">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Stock Items</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                        {product?.map((rows, index) => (
                            <div className="col" key={index}>
                                <div className="product-card">

                                    <div className="product-media">

                                        <div className="product-label">
                                            <label className="label-text sale">sale</label>
                                        </div>

                                        <button className="product-wish wish">
                                            <i className="fas fa-heart"></i>
                                        </button>

                                        <a className="product-image" onClick={(e)=>openDetailPage(rows.id)}>
                                            <img
                                                className="productImg"
                                                src={`${URL.BASE_URL_IMAGE}/${rows?.images?.[0]?.image}`}
                                                alt="product"
                                                style={{ height: "236px", width: "203px" }}
                                            />
                                        </a>

                                    </div>

                                    <div className="product-content">

                                        <div className="product-rating">
                                            <i className="active icofont-star"></i>
                                            <i className="active icofont-star"></i>
                                            <i className="active icofont-star"></i>
                                            <i className="active icofont-star"></i>
                                            <i className="icofont-star"></i>
                                        </div>

                                        <h6 className="product-name">
                                            {rows?.name}
                                        </h6>

                                        <h6 className="product-price">

                                            {(() => {
                                                const mainPrice =
                                                    parseFloat(rows?.price || 0) +
                                                    parseFloat(rows?.discount || 0);
                                                return <del>₹{mainPrice}</del>;
                                            })()}

                                            {(() => {
                                                const totalPrice =
                                                    (parseFloat(rows?.price) +
                                                        parseFloat(rows?.discount)) -
                                                    ((parseFloat(rows?.price) +
                                                        parseFloat(rows?.discount)) *
                                                        parseFloat(rows?.discount) / 100);

                                                return <span>₹{totalPrice.toFixed(2)}<small>/piece</small></span>;
                                            })()}

                                        </h6>

                                        <button class="product-add" title="Add to Cart" onClick={(e)=>openDetailPage(rows.id)}>
                                           <i className="fa fa-eye" ></i>
                                            <span>View</span>
                                        </button>

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </>
    );
}

export default Woman;