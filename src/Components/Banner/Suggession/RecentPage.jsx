
import { useEffect, useState } from "react"
import image1 from "../../../images/product/01.jpg"
import image2 from "../../../images/product/02.jpg"
import image3 from "../../../images/product/03.jpg"
import image4 from "../../../images/product/04.jpg"
import image5 from "../../../images/product/05.jpg"
import image6 from "../../../images/product/06.jpg"
import image7 from "../../../images/product/07.jpg"
import image8 from "../../../images/product/08.jpg"
import image9 from "../../../images/product/09.jpg"
import image10 from "../../../images/product/10.jpg"
import axios from "axios"
import URL from "../../config/API.jsx"
import Gallery from "../../Modal/Gallery.jsx"
import { useNavigate } from "react-router-dom"




const array = [];

function RecentPart({ setValue, getValue }) {
    const [showModal, setShowModal] = useState(false);
    const [sliderImg, setSliderImg] = useState();
    const [product, setProduct] = useState();
    const [token] = useState(localStorage.getItem("token"))
    const navigate = useNavigate();

    const getProducts = () => {
        axios.get(`${URL.BASE_URL}/product`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            console.log(res?.data)
            setProduct(res?.data);

        })
    }

    useEffect(() => {
        if (token)
            getProducts();
    }, [token])

    const addtheWishList = (id) => {
        // const params = {
        //     productId: id,
        // }
        // if (!array.includes(id)) {
        //     array.push(id)
        //     setValue(array?.length)
        //     axios.post(`${URL.BASE_URL}/save-wishlist`, params, {
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": `Bearer ${token}`
        //         }
        //     }).then(res => {

        //         getWistLists()
        //     })
        // } else {
        //     setValue(array?.length)
        // }
    }

    const getWistLists = () => {
        // if (token != undefined) {
        //     axios.get(`${URL.BASE_URL}/wishlist`, {
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": `Bearer ${token}`
        //         }
        //     }).then(res => {
        //         // console.log(res?.data?.data)
        //         let wishlist = res?.data?.data
        //         const lenghts = wishlist.length

        //         setValue(lenghts)
        //     })
        // }
    }

    useEffect(() => {
        console.log(token, "--------");

        if (token != "undefined")
            getWistLists()
    }, [token])



    const openModal = (images) => {
        setShowModal(true);
        setSliderImg(images)
    };


   const openDetailPage = (id) =>{
         navigate(`/product/${id}`);
   }

    return (
        <>
            <section class="section recent-part">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>recently sold items</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        {/* ////////////////////// */}

                        {product && product?.map(rows => (
                            <div class="col">
                                <div class="product-card">
                                    <div class="product-media">
                                        <div class="product-label">
                                            <label class="label-text sale">sale</label>
                                        </div>
                                        <button class="product-wish wish" onClick={() => addtheWishList(rows.id)}>
                                            <i class="fas fa-heart"></i>
                                        </button>

                                        <a class='product-image' onClick={(e)=>openDetailPage(rows.id)}>
                                            <img className="productImg" src={`${URL.BASE_URL_IMAGE}/${rows?.images?.[0]?.image}`} alt="product" style={{ height: "236px", width: "203px" }} />
                                        </a>
                                        {/* <div class="product-widget">
                                            <a class='fas fa-random' href='compare.html' title='Product Compare'></a>
                                            <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                            <a title="Product View" href="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                        </div> */}
                                    </div>
                                    <div class="product-content">
                                        <div class="product-rating">
                                            <i class="active icofont-star"></i>
                                            <i class="active icofont-star"></i>
                                            <i class="active icofont-star"></i>
                                            <i class="active icofont-star"></i>
                                            <i class="icofont-star"></i>
                                          
                                        </div>
                                        <h6 class="product-name">
                                            <a href='product-video.html'>{rows?.name}</a>
                                        </h6>
                                        <h6 class="product-price">


                                            {(() => {
                                                const mainPrice =
                                                    parseFloat(rows?.price || 0) +
                                                    parseFloat(rows?.discount || 0);
                                                return <del>₹{mainPrice}</del>;
                                            })()}

                                            {(() => {
                                                const discount = parseFloat(parseFloat(rows?.price) + parseFloat(rows?.discount)) * parseFloat(rows?.discount) / 100;
                                                const totalPrice = parseFloat(rows?.price) + parseFloat(rows?.discount) - parseFloat(parseFloat(rows?.price) + parseFloat(rows?.discount)) * parseFloat(rows?.discount) / 100;
                                                return <span>₹{totalPrice.toFixed(2)}<small>/piece</small></span>;
                                            })()}


                                        </h6>
                                        <button class="product-add" title="Add to Cart" onClick={(e)=>openDetailPage(rows.id)}>
                                           <i className="fa fa-eye" ></i>
                                            <span>View</span>
                                        </button>
                                        <div class="product-action">
                                            <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                            <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1" />
                                            <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    {/* <div class="row">
                        <div class="col-lg-12">
                            <div class="section-btn-25">
                                <a class='btn btn-outline' href='shop-4column.html'>
                                    <i class="fas fa-eye"></i>
                                    <span>show more</span>
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
            {/* <Gallery showModal={showModal} setShowModal={setShowModal} sliderImg={sliderImg} /> */}
        </>

    )
}
export default RecentPart