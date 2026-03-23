import bannerImage from "../../images/home/index/01.png"

function HomeBanner(){

    return(
        <>
        <section className="home-index-slider slider-arrow slider-dots">
            <div className="banner-part banner-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-6">
                            <div className="banner-content">
                                <h1>free home delivery within 24 hours now.</h1>
                                <p>Find your perfect look with our exclusive saree and ladies suit collection. Stylish designs, great prices, and fast home delivery guaranteed.</p>
                                <div className="banner-btn">
                                    <a class='btn btn-inline' href='shop-4column.html'>
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>shop now</span>
                                    </a>
                                    <a class='btn btn-outline' href='offer.html'>
                                        <i className="icofont-sale-discount"></i>
                                        <span>get offer</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="banner-img">
                                <img src={bannerImage} alt="index" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="banner-part banner-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-6">
                            <div className="banner-img">
                                <img src="images/home/index/02.png" alt="index" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="banner-content">
                                <h1>free home delivery within 24 hours now.</h1>
                                <p>Lorem ipsum dolor consectetur adipisicing elit modi consequatur eaque expedita porro necessitatibus eveniet voluptatum quis pariatur Laboriosam molestiae architecto excepturi</p>
                                <div className="banner-btn">
                                    <a class='btn btn-inline' href='shop-4column.html'>
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>shop now</span>
                                    </a>
                                    <a class='btn btn-outline' href='offer.html'>
                                        <i className="icofont-sale-discount"></i>
                                        <span>get offer</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
        </>
    )
}

export default HomeBanner
