import image1 from "../../../images/brand/01.jpg"
import image2 from "../../../images/brand/02.jpg"
import image3 from "../../../images/brand/03.jpg"
import image4 from "../../../images/brand/04.jpg"
import image5 from "../../../images/brand/05.jpg"
import image6 from "../../../images/brand/06.jpg"

function BrandPart()
{
    return(
        <>
         <section className="section brand-part">
            <div className="container" style={{display:"flex"}} >
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h2>shop by brands</h2>
                        </div>
                    </div>
                </div>
                <div className="brand-slider slider-arrow" style={{display:"flex"}}>
                    <div className="brand-wrap">
                        <div className="brand-media">
                            <img src={image1} alt="brand"/>
                            <div className="brand-overlay">
                                <a href='brand-single.html'><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                        <div className="brand-meta">
                            <h4>natural greeny</h4>
                            <p>(45 items)</p>
                        </div>
                    </div>
                    <div className="brand-wrap">
                        <div className="brand-media">
                            <img src={image2} alt="brand"/>
                            <div className="brand-overlay"/>
                                <a href='brand-single.html'><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                        <div className="brand-meta">
                            <h4>vegan lover</h4>
                            <p>(45 items)</p>
                        </div>
                    </div>
                    <div className="brand-wrap" style={{display:"flex"}}>
                        <div className="brand-media">
                            <img src={image3} alt="brand"/>
                            <div className="brand-overlay">
                                <a href='brand-single.html'><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                        <div className="brand-meta">
                            <h4>organic foody</h4>
                            <p>(45 items)</p>
                        </div>
                    </div>
                    <div className="brand-wrap" style={{display:"flex"}}>
                        <div className="brand-media">
                            <img src={image4} alt="brand"/>
                            <div className="brand-overlay">
                                <a href='brand-single.html'><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                        <div className="brand-meta">
                            <h4>ecomart limited</h4>
                            <p>(45 items)</p>
                        </div>
                    </div>
                    <div className="brand-wrap" style={{display:"flex"}}>
                        <div className="brand-media">
                            <img src={image5} alt="brand"/>
                            <div className="brand-overlay">
                                <a href='brand-single.html'><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                        <div className="brand-meta">
                            <h4>fresh fortune</h4>
                            <p>(45 items)</p>
                        </div>
                    </div>
                    <div className="brand-wrap">
                        <div className="brand-media">
                            <img src={image6} alt="brand"/>
                            <div className="brand-overlay">
                                <a href='brand-single.html'><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                        <div className="brand-meta">
                            <h4>econature</h4>
                            <p>(45 items)</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-btn-50">
                            <a className='btn btn-outline' href='brand-list.html'>
                                <i className="fas fa-eye"></i>
                                <span>view all brands</span>
                            </a>
                        </div>
                    </div>
                </div>
            
        </section>

        </>
    )
}
export default BrandPart