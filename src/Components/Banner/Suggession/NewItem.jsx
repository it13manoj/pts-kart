import image1 from "../../../images/product/15.jpg"
import image2 from "../../../images/product/16.jpg"
import image3 from "../../../images/product/17.jpg"
import image4 from "../../../images/product/18.jpg"
import image5 from "../../../images/product/19.jpg"
import image6 from "../../../images/product/20.jpg"
function NewItem()
{
    return(
        <>
        <section className="section newitem-part">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section-heading">
                            <h2>collected new items</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="new-slider slider-arrow">
                            <li>
                                <div className="product-card">
                                    <div className="product-media">
                                        <div className="product-label">
                                            <label className="label-text new">new</label>
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
                            </li>
                            <li>
                                <div className="product-card">
                                    <div className="product-media">
                                        <div className="product-label">
                                            <label className="label-text new">new</label>
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
                            </li>
                            <li>
                                <div className="product-card">
                                    <div className="product-media">
                                        <div className="product-label">
                                            <label className="label-text new">new</label>
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
                            </li>
                            <li>
                                <div className="product-card">
                                    <div className="product-media">
                                        <div className="product-label">
                                            <label className="label-text new">new</label>
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
                            </li>
                            <li>
                                <div className="product-card">
                                    <div className="product-media">
                                        <div className="product-label">
                                            <label className="label-text new">new</label>
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
                            </li>
                            <li>
                                <div className="product-card">
                                    <div className="product-media">
                                        <div className="product-label">
                                            <label className="label-text new">new</label>
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
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
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
export default NewItem