import axios from "axios";
import { useEffect, useState } from "react";
import URL from "./config/API";

function Wishlist({ setValue, getValue, setCart,islogin }) {
    const [getwishlit, setWishlist] = useState();
    const [quantities, setQuantities] = useState({});
    const [token] = useState(localStorage.getItem("token"))

    console.log(islogin);
    




    const wishlist = () => {

        // axios.get(`${URL.BASE_URL}/wishlist`, {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": `Bearer ${token}`
        //     }
        // }).then(res => {
        //     setWishlist(res?.data?.data)

        // })
    }


    useEffect(() => {
        wishlist();
    }, [0])


    const getWistLists = () => {


        // axios.get(`${URL.BASE_URL}/wishlist`, {
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": `Bearer ${token}`
        //         }
        // }).then(res => {
        //     // console.log(res?.data?.data)
        //     let wishlist = res?.data?.data
        //     const lenghts = wishlist.length

        //     setValue(lenghts)
        // })
    }

    useEffect(() => {
        getWistLists()
    }, [0])

    const removeWishList = (id) => {
        // axios.delete(`${URL.BASE_URL}/wishlist/${id}`, {
        //     headers: {
        //         "Content-Type": "application/json",
        //          "Authorization": `Bearer ${token}`
        //     }
        // }).then(res => {
        //     getWistLists()
        //     wishlist()
        // })
    }
    function addtocart(id, productId) {
        // const parmas = {
        //     quantity: quantities[id],
        //     productId: productId
        // }
        // axios.post(`${URL.BASE_URL}/save-cart`, parmas , {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": `Bearer ${token}`
        //     }
        // }).then(res => {
        //     setCart(true)
        //     removeWishList(id)
        // })

    }


    const handleQuantityChange = (e, wishListId) => {
        // const value = parseInt(e.target.value) || 0;

        // setQuantities(prev => ({
        //     ...prev,
        //     [wishListId]: value
        // }));


    };





    return (


        <>
            <section className="inner-section single-banner" style={{ background: "url(images/single-banner.jpg) no-repeat center;" }}>
                <div className="container">
                    <h2>wishlist</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href='index.html'>Home</a></li>
                        <li className="breadcrumb-item"><a href='shop-4column.html'>shop grid</a></li>
                        <li className="breadcrumb-item active" aria-current="page">wishlist</li>
                    </ol>
                </div>
            </section>
            <section className="inner-section wishlist-part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-scroll">
                                <table className="table-list">
                                    <thead>
                                        <tr>
                                            <th scope="col">Serial</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Qunity</th>
                                            <th scope="col">description</th>
                                            <th scope="col">status</th>
                                            <th scope="col">shopping</th>
                                            <th scope="col">action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getwishlit && getwishlit?.map((rows, index) => (
                                            <tr>
                                                <td className="table-serial"><h6>{index + 1}</h6></td>
                                                <td className="table-image"><img src={`${URL.BASE_URL_IMAGE}${rows?.product_image}`} alt="product" /></td>
                                                <td className="table-name"><h6>{rows.product_name}</h6></td>
                                                <td className="table-price"><h6>${rows.product_price}<small>/kilo</small></h6></td>
                                                <td className="table-name">
                                                    <input type="number" name={`quantity_${rows.wishListId}`} value={quantities[rows.wishListId] || 1} onChange={(e) => handleQuantityChange(e, rows.wishListId)} />
                                                </td>
                                                <td className="table-desc"><p>{rows.product_description}
                                                    {/* <a href='product-video.html'>read more</a> */}
                                                </p></td>
                                                <td className="table-status"><h6 className="stock-out">{(rows.InSotck = 1) ? " In Stock" : "Out Stock"}</h6></td>
                                                <td className="table-shop">
                                                    <button className="product-add" onClick={() => addtocart(rows.wishListId, rows.productId)} title="Add to Cart" >add to cart</button>
                                                    <div className="product-action">
                                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1" />
                                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                                    </div>
                                                </td>
                                                <td className="table-action">
                                                    <a className="view" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-view"><i className="fas fa-eye"></i></a>
                                                    <a className="trash" href="#" title="Remove Wishlist" onClick={() => removeWishList(rows.wishListId)}><i className="icofont-trash"></i></a>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center mt-5">
                                <button className="btn btn-outline">
                                    Load more items
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}



export default Wishlist;