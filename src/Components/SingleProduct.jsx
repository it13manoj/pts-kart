import axios from "axios";
import { useEffect, useState } from "react"
import URL from "./config/API";
import { useParams } from "react-router-dom";
import "./SinglePage.css"

function SingleProduct() {
    const [getProduct, setProduct] = useState();
    const [activeImage, setActiveImage] = useState();
    const [userDetails] = useState(JSON.parse(localStorage.getItem("ptsAuthUser")))
    const { id } = useParams();
    const [token] = useState(localStorage.getItem("token"));
    const singleProduct = () => {
        try {
            axios.get(`${URL.BASE_URL}/product/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                setProduct(res?.data)
                console.log(res, "Single Product");

            }).catch(e => {
                console.log(e);

            })
        } catch (error) {

        }
    }

    useEffect(() => {
        singleProduct();
    }, [id]);

    useEffect(() => {
        if (getProduct?.images?.length > 0) {
            setActiveImage(`${URL.BASE_URL_IMAGE}/${getProduct.images[0].image}`);
        }
    }, [getProduct]);


    // -----------------------------------

    const price = parseFloat(getProduct?.price || 0);
    const discountPercent = parseFloat(getProduct?.discount || 0);

    const mainPrice = price + discountPercent;
    const finalPrice = price + discountPercent - (mainPrice * discountPercent / 100);



    const handlePayment = async () => {

        // 1️⃣ Create Order
        const { data } = await axios.post(`${URL.BASE_URL}/payment/create-order`, {
            amount: finalPrice,
            product_id: getProduct?.id
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });

        const options = {
            key: "rzp_live_SF7kz2aZlS9lY7",
            amount: data.amount,
            description: getProduct.name,
            currency: "INR",
            name: "PTSKART",
            order_id: data.id,

            // 2️⃣ Payment Success Handler
            handler: async function (response) {

                try {
                    // 3️⃣ Call Verify API
                    const verifyRes = await axios.post(
                        `${URL.BASE_URL}/payment/verify-payment`,
                        {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        }, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    }
                    );

                    if (verifyRes.data.success) {
                        alert("Payment Verified Successfully ✅");
                    } else {
                        alert("Payment Verification Failed ❌");
                    }

                } catch (err) {
                    console.error(err);
                    alert("Verification Error");
                }
            },

            prefill: {
                name: userDetails.name,
                email: userDetails.email,
                contact: userDetails?.contact
            },
            theme: { color: "#3399cc" }
        };

        const razor = new window.Razorpay(options);
        razor.open();
    };

    return (
        <>
            <section className="inner-section" style={{ marginTop: "20px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="details-gallery">
                                <div className="details-label-group">
                                    <label className="details-label new">new</label>
                                    {/* <label className="details-label off">-10%</label> */}
                                </div>


                                <div className="details-preview">
                                    {activeImage && (
                                        <img src={activeImage} alt="product" />
                                    )}
                                </div>

                                <div className="details-thumb">
                                    {getProduct?.images?.map((rows, index) => {
                                        const imgUrl = `${URL.BASE_URL_IMAGE}/${rows.image}`;
                                        return (
                                            <img
                                                key={index}
                                                src={imgUrl}
                                                alt="thumb"
                                                className={activeImage === imgUrl ? "active" : ""}
                                                onClick={() => setActiveImage(imgUrl)}
                                            />
                                        );
                                    })}
                                </div>



                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <ul className="product-navigation">
                                <li className="product-nav-prev">
                                    <a href="#">
                                        <i className="icofont-arrow-left"></i>
                                        prev product
                                        <span className="product-nav-popup">
                                            <img src="images/product/02.jpg" alt="product" />
                                            <small>green chilis</small>
                                        </span>
                                    </a>
                                </li>
                                <li className="product-nav-next">
                                    <a href="#">
                                        next product
                                        <i className="icofont-arrow-right"></i>
                                        <span className="product-nav-popup">
                                            <img src="images/product/03.jpg" alt="product" />
                                            <small>green chilis</small>
                                        </span>
                                    </a>
                                </li>
                            </ul> */}
                            <div className="details-content">
                                <h3 className="details-name"><a href="#">{getProduct?.name}</a></h3>
                                <div className="details-meta">
                                    <p>SKU:<span>{getProduct?.sku}</span></p>
                                    <p>PROVIDER:<a href="#">{getProduct?.Brand?.name}</a></p>
                                </div>
                                <div className="details-rating">
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="icofont-star"></i>
                                    <a href="#">(3 reviews)</a>
                                </div>
                                <h3 className="details-price">

                                    {(() => {
                                        const price = parseFloat(getProduct?.price || 0);
                                        const discountPercent = parseFloat(getProduct?.discount || 0);

                                        const mainPrice = price + discountPercent;
                                        const finalPrice = price + discountPercent - (mainPrice * discountPercent / 100);

                                        return (
                                            <>
                                                <del>₹{mainPrice.toFixed(2)}</del>
                                                <span>
                                                    ₹{finalPrice.toFixed(2)} <small>/piece</small>
                                                </span>
                                            </>
                                        );
                                    })()}

                                </h3>
                                <p className="details-desc">{getProduct?.description}</p>

                                <div className="details-list-group">
                                    <label className="details-list-title">Share:</label>
                                    <ul className="details-share-list">
                                        <li><a href="#" className="icofont-facebook" title="Facebook"></a></li>
                                        <li><a href="#" className="icofont-twitter" title="Twitter"></a></li>
                                        <li><a href="#" className="icofont-linkedin" title="Linkedin"></a></li>
                                        <li><a href="#" className="icofont-instagram" title="Instagram"></a></li>
                                    </ul>
                                </div>
                                <div className="details-add-group">
                                    <button className="product-add" title="Buy Now" onClick={handlePayment}>
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>Buy Now</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1" />
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                                {/* <div className="details-action-group">
                                    <a className="details-wish wish" href="#" title="Add Your Wishlist">
                                        <i className="icofont-heart"></i>
                                        <span>add to wish</span>
                                    </a>
                                    <a class='details-compare' href='compare.html' title='Compare This Item'>
                                        <i className="fas fa-random"></i>
                                        <span>Compare This</span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="inner-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            {/* <div class="product-details-frame">
                                <h3 class="frame-title">Description</h3>
                                <div class="tab-descrip">
                                    <p>{getProduct?.description}</p>
                                </div>
                            </div> */}
                            <div class="product-details-frame">
                                <h3 class="frame-title">Spacification</h3>
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Provider </th>
                                            <td>{getProduct?.Brand?.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Company </th>
                                            <td>{getProduct?.category?.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Product </th>
                                            <td>{getProduct?.subCategory?.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Product code</th>
                                            <td>{getProduct?.sku}</td>
                                        </tr>
                                        {/* <tr>
                                            <th scope="row">Material composition</th>
                                            <td>Silk</td>
                                        </tr> */}
                                        <tr>
                                            <th scope="row">Occasion type</th>
                                            <td>Festival, Party, Wedding</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Properties</th>
                                            <td>{getProduct?.description}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="product-details-frame">
                                <h3 class="frame-title">Reviews (2)</h3>
                                <ul class="review-list">
                                    <li class="review-item">
                                        <div class="review-media">
                                            <a class="review-avatar" href="#">
                                                <img src="images/avatar/01.jpg" alt="review" />
                                            </a>
                                            <h5 class="review-meta">
                                                <a href="#">miron mahmud</a>
                                                <span>June 02, 2020</span>
                                            </h5>
                                        </div>
                                        <ul class="review-rating">
                                            <li class="icofont-ui-rating"></li>
                                            <li class="icofont-ui-rating"></li>
                                            <li class="icofont-ui-rating"></li>
                                            <li class="icofont-ui-rating"></li>
                                            <li class="icofont-ui-rate-blank"></li>
                                        </ul>
                                        <p class="review-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic amet qui velit, molestiae suscipit perferendis, autem doloremque blanditiis dolores nulla excepturi ea nobis!</p>
                                        <form class="review-reply">
                                            <input type="text" placeholder="reply your thoughts" />
                                            <button><i class="icofont-reply"></i>reply</button>
                                        </form>
                                        <ul class="review-reply-list">
                                            <li class="review-reply-item">
                                                <div class="review-media">
                                                    <a class="review-avatar" href="#">
                                                        <img src="images/avatar/02.jpg" alt="review" />
                                                    </a>
                                                    <h5 class="review-meta">
                                                        <a href="#">labonno khan</a>
                                                        <span><b>author -</b> June 02, 2020</span>
                                                    </h5>
                                                </div>
                                                <p class="review-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic amet qui velit, molestiae suscipit perferendis, autem doloremque blanditiis dolores nulla excepturi ea nobis!</p>
                                                <form class="review-reply">
                                                    <input type="text" placeholder="reply your thoughts" />
                                                    <button><i class="icofont-reply"></i>reply</button>
                                                </form>
                                            </li>
                                            <li class="review-reply-item">
                                                <div class="review-media">
                                                    <a class="review-avatar" href="#">
                                                        <img src="images/avatar/03.jpg" alt="review" />
                                                    </a>
                                                    <h5 class="review-meta">
                                                        <a href="#">tahmina bonny</a>
                                                        <span>June 02, 2020</span>
                                                    </h5>
                                                </div>
                                                <p class="review-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic amet qui velit, molestiae suscipit perferendis, autem doloremque blanditiis dolores nulla excepturi ea nobis!</p>
                                                <form class="review-reply">
                                                    <input type="text" placeholder="reply your thoughts" />
                                                    <button><i class="icofont-reply"></i>reply</button>
                                                </form>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="review-item">
                                        <div class="review-media">
                                            <a class="review-avatar" href="#">
                                                <img src="images/avatar/04.jpg" alt="review" />
                                            </a>
                                            <h5 class="review-meta">
                                                <a href="#">shipu shikdar</a>
                                                <span>June 02, 2020</span>
                                            </h5>
                                        </div>
                                        <ul class="review-rating">
                                            <li class="icofont-ui-rating"></li>
                                            <li class="icofont-ui-rating"></li>
                                            <li class="icofont-ui-rating"></li>
                                            <li class="icofont-ui-rating"></li>
                                            <li class="icofont-ui-rate-blank"></li>
                                        </ul>
                                        <p class="review-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic amet qui velit, molestiae suscipit perferendis, autem doloremque blanditiis dolores nulla excepturi ea nobis!</p>
                                        <form class="review-reply">
                                            <input type="text" placeholder="reply your thoughts" />
                                            <button><i class="icofont-reply"></i>reply</button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-details-frame">
                                <h3 class="frame-title">add your review</h3>
                                <form class="review-form">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="star-rating">
                                                <input type="radio" name="rating" id="star-1" /><label for="star-1"></label>
                                                <input type="radio" name="rating" id="star-2" /><label for="star-2"></label>
                                                <input type="radio" name="rating" id="star-3" /><label for="star-3"></label>
                                                <input type="radio" name="rating" id="star-4" /><label for="star-4"></label>
                                                <input type="radio" name="rating" id="star-5" /><label for="star-5"></label>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <textarea class="form-control" placeholder="Describe"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <button class="btn btn-inline">
                                                <i class="icofont-water-drop"></i>
                                                <span>drop your review</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}




export default SingleProduct