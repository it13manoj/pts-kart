
import image1 from "../../../images/avatar/01.jpg"
import image2 from "../../../images/avatar/02.jpg"
import image3 from "../../../images/avatar/03.jpg"
import image4 from "../../../images/avatar/04.jpg"

function TestimonialPart()
{
    return(
        <>
        <section className="section testimonial-part">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h2>client's feedback</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonial-slider slider-arrow">
                            <div className="testimonial-card">
                                <i className="fas fa-quote-left"></i>
                                <p>Lorem ipsum dolor consectetur adipisicing elit neque earum sapiente vitae obcaecati magnam doloribus magni provident ipsam</p>
                                <h5>mahmud hasan</h5>
                                <ul>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                </ul>
                                <img src={image1} alt="testimonial"/>
                            </div>
                            <div className="testimonial-card">
                                <i className="fas fa-quote-left"></i>
                                <p>Lorem ipsum dolor consectetur adipisicing elit neque earum sapiente vitae obcaecati magnam doloribus magni provident ipsam</p>
                                <h5>mahmud hasan</h5>
                                <ul>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                </ul>
                                <img src={image2} alt="testimonial"/>
                            </div>
                            <div className="testimonial-card">
                                <i className="fas fa-quote-left"></i>
                                <p>Lorem ipsum dolor consectetur adipisicing elit neque earum sapiente vitae obcaecati magnam doloribus magni provident ipsam</p>
                                <h5>mahmud hasan</h5>
                                <ul>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                </ul>
                                <img src={image3} alt="testimonial"/>
                            </div>
                            <div className="testimonial-card">
                                <i className="fas fa-quote-left"></i>
                                <p>Lorem ipsum dolor consectetur adipisicing elit neque earum sapiente vitae obcaecati magnam doloribus magni provident ipsam</p>
                                <h5>mahmud hasan</h5>
                                <ul>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                    <li className="fas fa-star"></li>
                                </ul>
                                <img src={image4} alt="testimonial"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default TestimonialPart