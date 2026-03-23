import { Link } from "react-router-dom"


function NavbarPart(){

    return(
        <>
         <nav className="navbar-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="navbar-content">
                            <ul className="navbar-list">
                                <li className="navbar-item ">
                                    <Link className="navbar-link" to="/home">All Product</Link>
                                   
                                </li>
                                <li className="navbar-item dropdown">
                                    <Link className="navbar-link" to="/man">Man</Link>
                                   
                                </li>
                                <li className="navbar-item dropdown-megamenu">
                                    <Link className="navbar-link" to="/woman">Woman</Link>
                                   
                                </li>
                                <li className="navbar-item dropdown-megamenu">
                                    <Link className="navbar-link" to="/boy">Boys</Link>
                                   
                                </li>
                                <li className="navbar-item dropdown">
                                    <Link className="navbar-link" to="/girl">Girls</Link>
                                   
                                </li>

                                <li className="navbar-item dropdown">
                                    <Link className="navbar-link" to="/kids">Kids</Link>
                                   
                                </li>
                               
                                <li className="navbar-item dropdown">
                                    <Link className="navbar-link" to="/contact">Contact</Link>
                                    
                                </li>
                            </ul>
                            <div className="navbar-info-group">
                                <div className="navbar-info">
                                    <i className="icofont-ui-touch-phone"></i>
                                    <p>
                                        <small>call us</small>
                                        <span>(+91-) 929 6454 675</span>
                                    </p>
                                </div>
                                <div className="navbar-info">
                                    <i className="icofont-ui-email"></i>
                                    <p>
                                        <small>email us</small>
                                        <span>support@parakshtech.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavbarPart