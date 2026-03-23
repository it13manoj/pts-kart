import image1 from "../../images/product/01.jpg"
import image2 from "../../images/product/02.jpg"
import image3 from "../../images/product/03.jpg"
import image4 from "../../images/product/04.jpg"
import image5 from "../../images/product/05.jpg"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import URL from "../config/API"


function Invoice({setTotal}) {
    const [payment, setpayment] = useState();
    const [paymentId, setpaymentId] = useState();
    const [paymentIntent, setpaymentIntent] = useState();
    const [userOrder, setUserOrder] = useState(null);
    const [orderItems, setOrderItems] = useState({
            quinitiy:"",
            items:""
    });
      const [token] = useState(localStorage.getItem("token"))

    const [paymentfrom, setpaymentfrom] = useState({

        paymentIntentId: "",
        amount: "",
        currency: "",
        status: "",
        paymentMethod: "",
        clientSecret: "",
        captureMethod: "",
        receiptEmail: "",
        livemode: "",
        canceledAt: "",
        cancellationReason: ""

    })
    const fetchpayment = () => {
        const paymentIntent = localStorage.getItem("paymentIntent")
        axios.get(`${URL.BASE_URL}/payment/${paymentIntent}`, {
            headers: {
                "Content-Type": "application/json",
                 "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            console.log(res);
            setpayment(res?.data?.data);
        });
    };
  

const emptyCart =() =>{
    axios.post(`${URL.BASE_URL}/emptyCart`,{},{
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then(res=>{
        setTotal(0)
    })
}


  useEffect(() => {
        fetchpayment()
        emptyCart();
    }, [])

    const fetchUserOrder = async () => {
        let totalQunitity = 0;
        try {
            const userId = 1
            const res = await axios.get(
                `${URL.BASE_URL}/order/user/${userId}`,
                { headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` } }
            );

            // latest order
            setUserOrder(res?.data?.data?.[0]);
            const items = res.data.data?.Order_Item

            for (let item of items) {
                console.log(item);
                totalQunitity = parseInt(totalQunitity) + parseInt(item.qunity)
            }

            setOrderItems(preState=>({...preState,items:items, quinitiy:totalQunitity}));


        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchUserOrder();
    }, []);


console.log(orderItems);

    return (

        <>

            <section className="inner-section invoice-part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="alert-info">
                                <p>Thank you! We have recieved your order.</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="account-card">
                                <div className="account-title">
                                    <h4>order recieved</h4>
                                </div>
                                <div className="account-content">
                                    <div className="invoice-recieved">
                                        <h6>Order No :  <span>{userOrder?.orderno}</span></h6>
                                        <h6>Order Date : <span>{new Date(userOrder?.order_date).toDateString()}</span></h6>
                                        <h6>Total Amount : <span>${userOrder?.total}</span></h6>
                                        <h6>Payment Method : <span>{userOrder?.method}</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="account-card">
                                <div className="account-title">
                                    <h4>Order Details</h4>
                                </div>
                                <div className="account-content">
                                    <ul className="invoice-details">
                                        <li>
                                            <h6>Total Item</h6>
                                            <p>{orderItems?.quinitiy} Items</p>
                                        </li>
                                        <li>
                                            <h6>Order Time</h6>
                                            <p>{new Date(userOrder?.order_date).toDateString()}</p>
                                        </li>
                                        <li>
                                            <h6>Delivery Time</h6>
                                            <p>90 Minute Express Delivery</p>
                                        </li>
                                        <li>
                                            <h6>Delivery Location</h6>
                                            <p>{userOrder?.street} , {userOrder?.city_name}, {userOrder?.state_name}, {userOrder?.country_name} ,{userOrder?.postalCode}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="account-card">
                                <div className="account-title">
                                    <h4>Amount Details</h4>
                                </div>
                                <div className="account-content">
                                    <ul className="invoice-details">
                                        <li>
                                            <h6>Sub Total</h6>
                                            <p>${userOrder?.total}</p>
                                        </li>
                                        <li>
                                            <h6>discount</h6>
                                            <p>{"00.00"}</p>
                                        </li>
                                        <li>
                                            <h6>Payment Method</h6>
                                            <p>{userOrder?.method}</p>
                                        </li>
                                        <li>
                                            <h6>Total<small>(Incl. VAT)</small></h6>
                                            <p>${userOrder?.total}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-scroll">
                                <table className="table-list">
                                    <thead>
                                        <tr>
                                            <th scope="col">Serial</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Brand</th>
                                            <th scope="col">Quantity</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {orderItems?.items.length > 0 &&  orderItems?.items?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img src={`${URL.BASE_URL_IMAGE+'/'+item?.['Product.product_image']}`} alt={item.productName} style={{width:"50px"}} />
                                                </td>
                                               
                                                <td>{item?.['Product.product_name']}</td>
                                                 <td>${item?.['Product.product_price']}</td>
                                                <td>{item?.['Product.Brand.name']}</td>
                                                <td>{item?.qunity}</td>
                                            </tr>
                                        ))}


                                        {/* <tr>
                                        <td className="table-serial"><h6>01</h6></td>
                                        <td className="table-image"><img src={image1} alt="product" /></td>
                                        <td className="table-name"><h6>product name</h6></td>
                                        <td className="table-price"><h6>$19<small>/kilo</small></h6></td>
                                        <td className="table-brand"><h6>Fresh Company</h6></td>
                                        <td className="table-quantity"><h6>3</h6></td>
                                    </tr>
                                    <tr>
                                        <td className="table-serial"><h6>02</h6></td>
                                        <td className="table-image"><img src={image2} alt="product" /></td>
                                        <td className="table-name"><h6>product name</h6></td>
                                        <td className="table-price"><h6>$19<small>/kilo</small></h6></td>
                                        <td className="table-brand"><h6>Radhuni Masala</h6></td>
                                        <td className="table-quantity"><h6>5</h6></td>
                                    </tr>
                                    <tr>
                                        <td className="table-serial"><h6>03</h6></td>
                                        <td className="table-image"><img src={image3} alt="product" /></td>
                                        <td className="table-name"><h6>product name</h6></td>
                                        <td className="table-price"><h6>$19<small>/kilo</small></h6></td>
                                        <td className="table-brand"><h6>Pran Prio</h6></td>
                                        <td className="table-quantity"><h6>2</h6></td>
                                    </tr>
                                    <tr>
                                        <td className="table-serial"><h6>04</h6></td>
                                        <td className="table-image"><img src={image4} alt="product" /></td>
                                        <td className="table-name"><h6>product name</h6></td>
                                        <td className="table-price"><h6>$19<small>/kilo</small></h6></td>
                                        <td className="table-brand"><h6>Real Food</h6></td>
                                        <td className="table-quantity"><h6>3</h6></td>
                                    </tr>
                                    <tr>
                                        <td className="table-serial"><h6>05</h6></td>
                                        <td className="table-image"><img src={image5} alt="product" /></td>
                                        <td className="table-name"><h6>product name</h6></td>
                                        <td className="table-price"><h6>$19<small>/kilo</small></h6></td>
                                        <td className="table-brand"><h6>Rdhuni Company</h6></td>
                                        <td className="table-quantity"><h6>7</h6></td>
                                    </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center mt-5">
                            <button className="btn btn-inline">
                                <i className="icofont-download"></i>
                                <span>download invoice</span>
                            </button>

                            {/* <i className="icofont-download"></i>
                            <span>download invoice</span>
                        </a> */}
                            <div className="back-home">
                                <Link to="/">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}
export default Invoice;