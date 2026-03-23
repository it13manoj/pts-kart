import image1 from "../images/product/01.jpg"
import image2 from "../images/product/02.jpg"
import image3 from "../images/product/03.jpg"
import image4 from "../images/product/04.jpg"
import image5 from "../images/product/05.jpg"
import image6 from "../images/payment/png/01.png"
import image7 from "../images/payment/png/02.png"
import image8 from "../images/payment/png/03.png"
import axios from "axios";
import { useEffect, useState } from "react"

import { Link } from "react-router-dom";
import URL from "./config/API"
import Contact from "./Modal/Contact/Contact"
import Address from "./Modal/Address"
import Card from "./Modal/Card"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm"





function Checkout({ setvalue, getvalue }) {
    const [contactIsOpen, setContactIsOpen] = useState(false)
    const [list, setList] = useState();
    
    const [quantities, setQuantities] = useState({});
    const [savedAddresses, setSavedAddresses] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [token] = useState(localStorage.getItem("token"))
    

    const getCartList = async () => {
        // const parmas = {
        //     userId: 1
        // }
        let totals = 0;
        axios.get(`${URL.BASE_URL}/cart`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(async res => {
            setList(res?.data?.data)


            const Prices = res?.data?.data;

            for (let rows of Prices) {

                totals += await rows.quantity * rows.product_price
                
            }

            setTotalPrice(totals)

        })



    }
    useEffect(() => {
        getCartList()
    }, [0])

     



    const handleQuantityChange = (e, values, cartId) => {
        const value = parseInt(e.target.value) || 0;

        setQuantities(prev => ({
            ...prev,
            [cartId]: values
        }));


    };



    const fetchAddresses = () => {
        axios.get(`${URL.BASE_URL}/address/users/1`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            console.log(res);
            setSavedAddresses(res?.data?.data);
        });
    };
    useEffect(() => {
        fetchAddresses()
    }, [])


    const fetchContact = () => {
        axios.get(`${URL.BASE_URL}/contact`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            console.log(res);
            setContactIsOpen(res?.data?.data);
        });
    };
    useEffect(() => {
        fetchContact()
    }, [])


    const deleteHandler = (id) => {
        axios.delete(`${URL.BASE_URL}/cart/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            getCartList()
        })
        console.log(id);

    }
    // const getproduct =async() =>
    // {
    //     axios.get('${URL.BASE_URL}/get-product/id',{
    //         headers:{"content-Type":"application/json",
    //         "Authorization":'Bearer ${token}'
    //     }
    //     })
    // }


    return <>
        <section className="inner-section checkout-part">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-12">
                        <div className="alert-info">
                            <p>Returning customer? <a href='login.html'>Click here to login</a></p>
                        </div>
                    </div> */}

                    <div className="col-lg-12">
                        <div className="account-card">
                            <div className="account-title">
                                <h4>Your order</h4>
                            </div>
                            <div className="account-content">
                                <div className="table-scroll">
                                    <table className="table-list">
                                        <thead>
                                            <tr>
                                                <th scope="col">Serial</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">brand</th>
                                                <th scope="col">quantity</th>
                                                <th scope="col">action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {list && list.map((rows, index) => (

                                                <tr>
                                                    <td className="table-serial"><h6>{index + 1}</h6></td>
                                                    <td className="table-image"><img src={`${URL.BASE_URL_IMAGE}${rows?.product_image}`} alt="product" /></td>
                                                    <td className="table-name"><h6>{rows.product_name}</h6></td>
                                                    <td className="table-price"><h6>{rows.product_price}  <small>/kilo</small></h6></td>
                                                    <td className="table-brand"><h6>Fresh Company</h6></td>
                                                    <td className="table-quantity"><h6>{rows.quantity}</h6></td>
                                                    <td className="table-action">
                                                        <a className="view" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-view"><i className="fas fa-eye"></i></a>
                                                        <a className="trash" href="#" title="Remove Wishlist" onClick={(e) => deleteHandler(rows.cartId)}><i className="icofont-trash"></i></a>
                                                    </td>
                                                </tr>

                                            ))}
                                        </tbody>

                                    </table>
                                </div>
                                <div className="chekout-coupon">
                                    <button className="coupon-btn">Do you have a coupon code?</button>
                                    <form className="coupon-form">
                                        <input type="text" placeholder="Enter your coupon code" />
                                        <button type="submit"><span>apply</span></button>
                                    </form>
                                </div>
                                <div className="checkout-charge">
                                   
                                    <ul>

                                            
                                        <li>
                                            <span>Sub total</span>
                                            <span>123</span>
                                        </li>
                                        <li>
                                            <span>delivery fee</span>
                                            <span>$10.00</span>
                                        </li>
                                        <li>
                                            <span>discount</span>
                                            <span>$00.00</span>
                                        </li>
                                        <li>
                                            <span>Total<small>(Incl. VAT)</small></span>
                                            <span>$123</span>
                                        </li>
                                        

                                    </ul>
                                      
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="account-card">
                            <div className="account-title">
                                <h4>Delivery Schedule</h4>
                            </div>
                            <div className="account-content">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 alert fade show">
                                        <div className="profile-card schedule active">
                                            <h6>express</h6>
                                            <p>90 min express delivery</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 alert fade show">
                                        <div className="profile-card schedule">
                                            <h6>8am-10pm</h6>
                                            <p>8.00 AM - 10.00 PM</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 alert fade show">
                                        <div className="profile-card schedule">
                                            <h6>Next day</h6>
                                            <p>Next day or Tomorrow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="account-card">
                            <div className="account-title">
                                <h4>contact number</h4>
                                <button data-bs-toggle="modal" data-bs-target="#contact-add">add contact</button>
                            </div>
                            <div className="account-content">
                                <div className="row">
                                    {contactIsOpen && contactIsOpen.map((rows, index) => (


                                        <div className="col-md-6 col-lg-4 alert fade show">
                                            <div className="profile-card contact active">
                                                <h6>{index == 0 && 'Primary'} {index == 1 && 'secondary'} {index == 2 && 'secondary'} </h6>
                                                <p>{rows.mobile}</p>
                                                <ul>
                                                    <li><button className="edit icofont-edit" title="Edit This" data-bs-toggle="modal" data-bs-target="#contact-edit"></button></li>
                                                    <li><button className="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button></li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-md-6 col-lg-4 alert fade show">
                                        <div className="profile-card contact">
                                            <h6>secondary</h6>
                                            <p>+8801941101915</p>
                                            <ul>
                                                <li><button className="edit icofont-edit" title="Edit This" data-bs-toggle="modal" data-bs-target="#contact-edit"></button></li>
                                                <li><button className="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 alert fade show">
                                        <div className="profile-card contact">
                                            <h6>secondary</h6>
                                            <p>+8801747875727</p>
                                            <ul>
                                                <li><button className="edit icofont-edit" title="Edit This" data-bs-toggle="modal" data-bs-target="#contact-edit"></button></li>
                                                <li><button className="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="account-card">
                            <div className="account-title">
                                <h4>delivery address</h4>
                                <button data-bs-toggle="modal" data-bs-target="#address-add">add address</button>
                            </div>
                            <div className="account-content">
                                <div className="row">

                                    {savedAddresses && savedAddresses.map(rows => (
                                        <div className="col-md-6 col-lg-4 alert fade show">
                                            <div className="profile-card address active">
                                                <h6>{rows.location}</h6>
                                                <p>{rows.street}, {rows.cityName}, {rows.stateName},  {rows.countryName}, {rows.postalcode}</p>
                                                <ul className="user-action">
                                                    <li><button className="edit icofont-edit" title="Edit This" data-bs-toggle="modal" data-bs-target="#address-edit"></button></li>
                                                    <li><button className="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button></li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}




                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="account-card mb-0">
                            <div className="account-title">
                                <h4>payment option</h4>
                                <button data-bs-toggle="modal" data-bs-target="#payment-add">add card</button>
                            </div>
                            <div className="account-content">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 alert fade show">
                                        <div className="payment-card payment active">
                                            <img src={image6} alt="payment" />
                                            <h4>card number</h4>
                                            <p>
                                                <span>****</span>
                                                <span>****</span>
                                                <span>****</span>
                                                <sup>1876</sup>
                                            </p>
                                            <h5>miron mahmud</h5>
                                            <button className="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 alert fade show">
                                        <div className="payment-card payment">
                                            <img src={image7} alt="payment" />
                                            <h4>card number</h4>
                                            <p>
                                                <span>****</span>
                                                <span>****</span>
                                                <span>****</span>
                                                <sup>1876</sup>
                                            </p>
                                            <h5>miron mahmud</h5>
                                            <button className="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 alert fade show">
                                        <div className="payment-card payment">
                                            <img src={image8} alt="payment" />
                                            <h4>card number</h4>
                                            <p>
                                                <span>****</span>
                                                <span>****</span>
                                                <span>****</span>
                                                <sup>1876</sup>
                                            </p>
                                            <h5>miron mahmud</h5>
                                            <button className="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-check">
                                
                                <input type="checkbox" id="checkout-check" />
                                <label for="checkout-check">By making this purchase you agree to our <a href="#">Terms and Conditions</a>.</label>
                            </div>
                            <div className="checkout-proced">
                                 {list && list.map((rows,index)=>(
                                <button className='btn btn-inline' href='invoice.html' >proced to checkout  </button>
                                 ))}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Contact />
        <Address />
        <CheckoutForm totalPrice={totalPrice} />
        {/* <Card /> */}
    </>

};
export default Checkout