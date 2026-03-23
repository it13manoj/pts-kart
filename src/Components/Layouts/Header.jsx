import Marquee from "react-fast-marquee";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ islogin, setIslogin }) {
    const navigate = useNavigate()

    const logiout = () => {
        
        localStorage.removeItem("token")
        navigate("/");
        setIslogin(false)
    }

console.log(islogin ,"islogin");

    return (
        <>
            {/* Header Top Section */}
            <div class="backdrop"></div>
            <a class="backtop fas fa-arrow-up" href="#"></a>
            <header className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="header-top-welcome">
                                <Marquee gradient={false} speed={50}>
                                    <p>Welcome to PTSKart in Your Dream Online Store! &nbsp;&nbsp;&nbsp;</p>
                                </Marquee>
                            </div>
                        </div>
{/* 
                        <div className="col-md-5 col-lg-3">
                            <div className="header-top-select">
                                <div className="header-select">
                                    <i className="icofont-world"></i>
                                    <select className="select">
                                        <option value="english">english</option>
                                     
                                    </select>
                                </div>

                                <div className="header-select">
                                    <i className="icofont-money"></i>
                                    <select className="select">
                                        <option value="doller">Rupees(₹)</option>
                                    </select>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-md-7 col-lg-4">
                            <ul className="header-top-list">
                                <li><a href="/offer">offers</a></li>
                                <li><a href="/faq">need help</a></li>
                                <li><Link to="/contact">contact us</Link></li>

                                {islogin == true && <li><Link to="#" onClick={logiout}>Logout</Link></li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
