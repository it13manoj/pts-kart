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
import image11 from "../../../images/product/11.jpg"
import image12 from "../../../images/product/12.jpg"
import image13 from "../../../images/product/13.jpg"
import image14 from "../../../images/product/14.jpg"
import image15 from "../../../images/product/15.jpg"
import image16 from "../../../images/product/16.jpg"
import image17 from "../../../images/product/17.jpg"
import image18 from "../../../images/product/18.jpg"
import image19 from "../../../images/product/19.jpg"
import image20 from "../../../images/product/20.jpg"

function Niche()
{
    return(
        <>
         <section className="section niche-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>Browse by Top Niche</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="nav nav-tabs">
                            <li>
                                <a href="#top-order" className="tab-link active" data-bs-toggle="tab">
                                    <i className="icofont-price"></i>
                                    <span>top order</span>
                                </a>
                            </li>
                            <li>
                                <a href="#top-rate" className="tab-link" data-bs-toggle="tab">
                                    <i className="icofont-star"></i>
                                    <span>top rating</span>
                                </a>
                            </li>
                            <li>
                                <a href="#top-disc" className="tab-link" data-bs-toggle="tab">
                                    <i className="icofont-sale-discount"></i>
                                    <span>top discount</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade show active" id="top-order">
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text order">314</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image1} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text order">314</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image2} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text order">314</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image3} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text order">314</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image4} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text order">314</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image5} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text order">314</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image6} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card product-disable">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text order">314</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image7} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text order">314</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image8} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text order">314</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image9} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text order">314</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image10} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="top-rate">
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text rate">4.8</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image11} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text rate">4.8</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image12} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text rate">4.8</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image13} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text rate">4.8</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image14} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text rate">4.8</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image15} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text rate">4.8</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image16} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card product-disable">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text rate">4.8</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image17} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text rate">4.8</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image18} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text rate">4.8</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image19} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text rate">4.8</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image20} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="top-disc">
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text off">-10%</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image6} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text off">-10%</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image7} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text off">-10%</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image8} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text off">-10%</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image9} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text off">-10%</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image10} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text off">-10%</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image11} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text off">-10%</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image12} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text off">-10%</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image13} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text off">-10%</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image14} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                        <label className="label-text off">-10%</label>
                                    </div>
                                    <button className="product-wish wish">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <a className='product-image' href='product-video.html'>
                                        <img src={image15} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <a className='fas fa-random' href='compare.html' title='Product Compare'></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href='product-video.html'>(3)</a>
                                    </div>
                                    <h6 className="product-name">
                                        <a href='product-video.html'>fresh green chilis</a>
                                    </h6>
                                    <h6 className="product-price">
                                        <del>$34</del>
                                        <span>$28<small>/piece</small></span>
                                    </h6>
                                    <button className="product-add" title="Add to Cart">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>add</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-btn-25">
                            <a className='btn btn-outline' href='shop-4column.html'>
                                <i className="fas fa-eye"></i>
                                <span>show more</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        </>
    )
}
export default Niche