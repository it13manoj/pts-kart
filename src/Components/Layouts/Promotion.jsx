 import image from "../../images/promo/home/03.jpg"

 function Promotion(){
 
    return(
        <>
          <div className="section promo-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="promo-img">
                            <a href="#"><img src={image} alt="promo"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
 }

 export default Promotion