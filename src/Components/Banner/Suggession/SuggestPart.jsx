
import image1 from "../../../images/suggest/01.jpg"
import image2 from "../../../images/suggest/02.jpg"
import image3 from "../../../images/suggest/03.jpg"
import image4 from "../../../images/suggest/04.jpg"
import image5 from "../../../images/suggest/05.jpg"
import image6 from "../../../images/suggest/06.jpg"
import image7 from "../../../images/suggest/07.jpg"
import image8 from "../../../images/suggest/08.jpg"


function SuggestPart() {

    return (

        <>
            <section className="section suggest-part">
                <div className="container">
                    <ul className="suggest-slider slider-arrow" style={{display:"flex"}}>
                        <li>
                            <a className='suggest-card' href='shop-4column.html'>
                                <img src={image1} alt="suggest" />
                                <h5>vegetables <span>34 items</span></h5>
                            </a>
                        </li>
                        <li>
                            <a className='suggest-card' href='shop-4column.html'>
                                <img src={image2} alt="suggest" />
                                <h5>fruits <span>89 items</span></h5>
                            </a>
                        </li>
                        <li>
                            <a className='suggest-card' href='shop-4column.html'>
                                <img src={image3} alt="suggest" />
                                <h5>groceries <span>45 items</span></h5>
                            </a>
                        </li>
                        <li>
                            <a className='suggest-card' href='shop-4column.html'>
                                <img src={image4} alt="suggest" />
                                <h5>dairy farm <span>83 items</span></h5>
                            </a>
                        </li>
                        <li>
                            <a className='suggest-card' href='shop-4column.html'>
                                <img src={image5} alt="suggest" />
                                <h5>sea foods <span>40 items</span></h5>
                            </a>
                        </li>
                        <li>
                            <a className='suggest-card' href='shop-4column.html'>
                                <img src={image6} alt="suggest" />
                                <h5>vegan foods <span>57 items</span></h5>
                            </a>
                        </li>
                        <li>
                            <a className='suggest-card' href='shop-4column.html'>
                                <img src={image7} alt="suggest" />
                                <h5>dry foods <span>23 items</span></h5>
                            </a>
                        </li>
                         <li>
                            <a className='suggest-card' href='shop-4column.html'>
                                <img src={image8} alt="suggest" />
                                <h5>dry foods <span>23 items</span></h5>
                            </a>
                        </li>
                       
                    </ul>
                </div>
            </section>
        </>
    )
}

export default SuggestPart