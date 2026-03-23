import image1 from "../../../images/logo.png"
import image2 from "../../../images/google-store.png"
import image3 from "../../../images/app-store.png"
import image4 from "../../../images/payment/jpg/01.jpg"
import image5 from "../../../images/payment/jpg/02.jpg"
import image6 from "../../../images/payment/jpg/03.jpg"
import image7 from "../../../images/payment/jpg/04.jpg"

function Footer()
{
    return(
        <>
         <footer className="footer-part" style={{background:"#bcf6c7", paddingBottom:"30px"}}> 
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-xl-3">
                        <div className="footer-widget">
                            <a className="footer-logo" href="#" style={{marginBottom:"0"}}>
                                <img src={image1} alt="logo" style={{width:"100px"}}/>
                            </a>
                            <p className="footer-desc">Find your perfect look with our exclusive saree and ladies suit collection. Stylish designs, great prices, and fast home delivery guaranteed.</p>
                            <ul className="footer-social">
                                <li><a className="icofont-facebook" href="#"></a></li>
                                <li><a className="icofont-linkedin" href="#"></a></li>
                                <li><a className="icofont-instagram" href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="footer-widget contact">
                            <h3 className="footer-title">contact us</h3>
                            <ul className="footer-contact">
                                <li>
                                    <i className="icofont-ui-email"></i>
                                    <p>
                                        <span>support@parakshtech.com</span>
                                     
                                    </p>
                                </li>
                                <li>
                                    <i className="icofont-ui-touch-phone"></i>
                                    <p>
                                        <span>+91 929 6454 675</span>
                                    </p>
                                </li>
                                <li>
                                    <i className="icofont-location-pin"></i>
                                    <p>Pustakalaya Road Buxar</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="footer-widget">
                            <h3 className="footer-title">quick Links</h3>
                            <div className="footer-links">
                                <ul>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Order History</a></li>
                                    <li><a href="#">Order Tracking</a></li>
                                    <li><a href="#">Best Seller</a></li>
                                    <li><a href="#">New Arrivals</a></li>
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="footer-widget">
                            <h3 className="footer-title">Download App</h3>
                            <p className="footer-desc">Lorem ipsum dolor sit amet tenetur dignissimos ipsum eligendi autem obcaecati minus ducimus totam reprehenderit exercitationem!</p>
                            <div className="footer-app">
                                <a href="#"><img src={image2} alt="google"/></a>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </footer>
        </>
    )
}
export default Footer