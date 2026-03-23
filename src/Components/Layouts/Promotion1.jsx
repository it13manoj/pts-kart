import image1 from "../../images/promo/home/01.jpg"
import image2 from "../../images/promo/home/02.jpg"
import { Link } from "react-router-dom";
function Promotion1()
{
    return(
        <>
        <div className="section promo-part">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 px-xl-3">
                        <div className="promo-img">
                            <a href="#"><img src={image1} alt="promo"/></a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 px-xl-3">
                        <div className="promo-img">
                            <a href="#"><img src={image2} alt="promo"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Promotion1;