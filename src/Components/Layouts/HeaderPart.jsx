
import React, { useEffect, useState } from "react";
import logo from '../../images/logo.png'
import users from '../../images/user.png'

import { Link } from "react-router-dom";
import axios from "axios";
import URL from "../config/API";



function HeaderPart({ getValue, setIsActiveCart, getCart, getTotal }) {
    const [cartNumber, setCartNumber] = useState();
    const [list, setList] = useState();
    const [authDetails] = useState(JSON?.parse(localStorage.getItem("ptsAuthUser")))
    const [token] = useState(localStorage.getItem("token"))
    const [search, setSearch] = useState();
    const [product, setProducts] = useState();

    const showTheCart = () => {
        setIsActiveCart(true);
    }

    const getCartCounts = () => {

        axios.post(`${URL.BASE_URL}/cart-counts`, {}, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            setCartNumber(res?.data?.data)
        })
    }

    useEffect(() => {
        getCartCounts()
    }, [getCart])



    console.log(authDetails);

    const searchProduct = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get(
                `${URL.BASE_URL}/search-product?keyword=${search}`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );

            setProducts(res.data.data);
            console.log(res.data.data);

        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            <header className="header-part">
                <div className="container">
                    <div className="header-content">
                        <div className="header-media-group">
                            <button className="header-user"><img src={logo} alt="user" /></button>
                            {/* <Link to='/'><img src="images/logo.png" alt="logo" /></Link> */}
                            <button className="header-src"><i className="fas fa-search"></i></button>
                        </div>

                        <Link class='header-logo' to='/'>
                            <img src={logo} alt="logo" />
                        </Link>
                        <Link class='header-widget' to='/' title='My Account'>
                            <img src={users} alt="user" />
                            <span>{authDetails.name}</span>
                        </Link>

                        <form className="header-form" onSubmit={searchProduct}>
                            <input
                                type="text"
                                placeholder="Search anything..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>

                        {/* <div className="header-widget-group">
                            
                            
                            <button className="header-widget header-cart" title="Cartlist" onClick={showTheCart}>
                                <i className="fas fa-shopping-basket"></i>
                                <sup>{cartNumber}</sup>
                                <span>total price<small>₹{getTotal}</small></span>

                            </button>

                        </div> */}

                    </div>
                </div>
            </header>

            <style>{`.header-form{margin-right:0px;}`} </style>
        </>
    );
}

export default HeaderPart;
