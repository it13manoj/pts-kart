import axios from "axios";
import { useEffect, useState } from "react"
import URL from "../config/API";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function CartSidebar({ setIsActiveCart, getvalue, setCart, removecart }) {
    const [list, setList] = useState();
    const [quantities, setQuantities] = useState({});
    const [token] = useState(localStorage.getItem("token"))
    const navigate = useNavigate();


    const closeTheCart = () => {
        setIsActiveCart(false)
    }

    const getCartList = () => {

        axios.get(`${URL.BASE_URL}/cart`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            setList(res?.data?.data)
        })
    }

    useEffect(() => {
        getCartList()
    }, [])



    const addQuntity = (e, cartId) => {
        const value = parseInt(e.target.value) || 0;

        setQuantities(prev => ({
            ...prev,
            [cartId]: value
        }));




    };
    function increased(id, cartId) {
        const parmas = {
            quantity: quantities[id],
            cartId: cartId,


        }
        axios.post(`${URL.BASE_URL}/save-cart`, {

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            setCart(true)
            removecart(id)
        })

    }
    const handleQuantityChange = (e, values, cartId) => {
        const value = parseInt(e.target.value) || 0;

        setQuantities(prev => ({
            ...prev,
            [cartId]: values++
        }));


    };
    const handleQuantityChangeSub = (e, values, cartId) => {
        const value = parseInt(e.target.value) || 0;

        setQuantities(prev => ({
            ...prev,
            [cartId]: values--
        }));


    };
    console.log(quantities);




    return (
        <>
            <aside className="cart-sidebar active">
                <div className="cart-header">
                    <div className="cart-total">
                        <i className="fas fa-shopping-basket"></i>
                        <span>total item {list?.length}</span>
                    </div>
                    <button className="cart-close" onClick={closeTheCart}>
                        <i className="icofont-close" ></i></button>
                </div>
                <ul className="cart-list">

                    {list && list?.map(rows => (
                        <li className="cart-item">
                            <div className="cart-media">
                                <a href="#"><img src={`${URL.BASE_URL_IMAGE}/${rows?.product_image}`} alt="product" /></a>
                                <button className="cart-delete">
                                    <i className="far fa-trash-alt"></i></button>
                            </div>
                            <td className="table-name">
                                <input type="number" />
                            </td>
                            <div className="cart-info-group">
                                <div className="cart-info">
                                    <h6><a href="product-single.html">{rows?.product_name}</a></h6>
                                    <p>Unit Price - ${rows?.product_price}</p>
                                </div>
                                <div className="cart-action-group">

                                    <div className="product-action">
                                        <button className="action-minus" onClick={(e) => handleQuantityChangeSub(e, rows?.quantity < quantities[rows?.cartId] ? quantities[rows?.cartId] : rows?.quantity, rows.cartId)} title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name={`quantity_${rows.cartId}`} value={quantities[rows?.cartId] || rows?.quantity} />
                                        <button className="action-plus" onClick={(e) => handleQuantityChange(e, rows?.quantity < quantities[rows?.cartId] ? quantities[rows?.cartId] : rows?.quantity, rows.cartId)} title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                    <h6>${rows?.product_price}</h6>
                                </div>
                            </div>
                        </li>
                    ))}

                </ul>
                <div className="cart-footer">
                    <button className="coupon-btn">Do you have a coupon code?</button>
                    <form className="coupon-form">
                        <input type="text" placeholder="Enter your coupon code" />
                        <button type="submit"><span>apply</span></button>
                    </form>
                    <Link class='cart-checkout-btn'  to={"/checkout"}>
                        <span className="checkout-label">Proceed to Checkout</span>
                        <span className="checkout-price">$369.78</span>
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default CartSidebar;