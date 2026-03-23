
function NavSidebar(){

    return(
    <>
    <aside className="nav-sidebar">
            <div className="nav-header">
                {/* <a href="#"><img src="images/logo.png" alt="logo" /></a> */}
                <button className="nav-close"><i className="icofont-close"></i></button>
            </div>
            <div className="nav-content">
                <div className="nav-btn">
                    <a class='btn btn-inline' href='login.html'>
                        <i className="fa fa-unlock-alt"></i>
                        <span>join here</span>
                    </a>
                </div>
                

               
         
                <div className="nav-select-group">
                    <div className="nav-select">
                        <i className="icofont-world"></i>
                        <select className="select">
                            <option value="english" selected>English</option>
                            <option value="bangali">Bangali</option>
                            <option value="arabic">Arabic</option>
                        </select>
                    </div>
                    <div className="nav-select">
                        <i className="icofont-money"></i>
                        <select className="select">
                            <option value="english" selected>Doller</option>
                            <option value="bangali">Pound</option>
                            <option value="arabic">Taka</option>
                        </select>
                    </div>
                </div>
                <ul className="nav-list">
                    <li>
                        <a className="nav-link dropdown-link" href="#"><i className="icofont-home"></i>Home</a>
                        <ul className="dropdown-list">
                            <li><a href='home-grid.html'>Home grid</a></li>
                            <li><a href='index.html'>Home index</a></li>
                            <li><a href='home-classic.html'>Home classic</a></li>
                            <li><a href='home-standard.html'>Home standard</a></li>
                            <li><a href='home-category.html'>Home category</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="nav-link dropdown-link" href="#"><i className="icofont-food-cart"></i>shop</a>
                        <ul className="dropdown-list">
                            <li><a href='shop-5column.html'>shop 5 column</a></li>
                            <li><a href='shop-4column.html'>shop 4 column</a></li>
                            <li><a href='shop-3column.html'>shop 3 column</a></li>
                            <li><a href='shop-2column.html'>shop 2 column</a></li>
                            <li><a href='shop-1column.html'>shop 1 column</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="nav-link dropdown-link" href="#"><i className="icofont-page"></i>product</a>
                        <ul className="dropdown-list">
                            <li><a href='product-tab.html'>product tab</a></li>
                            <li><a href='product-grid.html'>product grid</a></li>
                            <li><a href='product-video.html'>product video</a></li>
                            <li><a href='product-simple.html'>product simple</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="nav-link dropdown-link" href="#"><i className="icofont-bag-alt"></i>my account</a>
                        <ul className="dropdown-list">
                            <li><a href='profile.html'>profile</a></li>
                            <li><a href='wallet.html'>wallet</a></li>
                            <li><a href='wishlist.html'>wishlist</a></li>
                            <li><a href='compare.html'>compare</a></li>
                            <li><a href='checkout.html'>checkout</a></li>
                            <li><a href='orderlist.html'>order history</a></li>
                            <li><a href='invoice.html'>order invoice</a></li>
                            <li><a href='email-template.html'>email template</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="nav-link dropdown-link" href="#"><i className="icofont-lock"></i>authentication</a>
                        <ul className="dropdown-list">
                            <li><a href='login.html'>login</a></li>
                            <li><a href='register.html'>register</a></li>
                            <li><a href='reset-password.html'>reset password</a></li>
                            <li><a href='change-password.html'>change password</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="nav-link dropdown-link" href="#"><i className="icofont-book-alt"></i>blogs</a>
                        <ul className="dropdown-list">
                            <li><a href='blog-grid.html'>blog grid</a></li>
                            <li><a href='blog-standard.html'>blog standard</a></li>
                            <li><a href='blog-details.html'>blog details</a></li>
                            <li><a href='blog-author.html'>blog author</a></li>
                        </ul>
                    </li>
                    <li><a class='nav-link' href='offer.html'><i className="icofont-sale-discount"></i>offers</a></li>
                    <li><a class='nav-link' href='about.html'><i className="icofont-info-circle"></i>about us</a></li>
                    <li><a class='nav-link' href='faq.html'><i className="icofont-support-faq"></i>need help</a></li>
                    <li><a class='nav-link' href='contact.html'><i className="icofont-contacts"></i>contact us</a></li>
                    <li><a class='nav-link' href='privacy.html'><i className="icofont-warning"></i>privacy policy</a></li>
                    <li><a class='nav-link' href='coming-soon.html'><i className="icofont-options"></i>coming soon</a></li>
                    <li><a class='nav-link' href='error.html'><i className="icofont-ui-block"></i>404 error</a></li>
                    <li><a class='nav-link' href='login.html'><i className="icofont-logout"></i>logout</a></li>
                </ul>
                <div className="nav-info-group">
                    <div className="nav-info">
                        <i className="icofont-ui-touch-phone"></i>
                        <p>
                            <small>call us</small>
                            <span>(+880) 183 8288 389</span>
                        </p>
                    </div>
                    <div className="nav-info">
                        <i className="icofont-ui-email"></i>
                        <p>
                            <small>email us</small>
                            <span>support@example.com</span>
                        </p>
                    </div>
                </div>
                <div className="nav-footer">
                    <p>All Rights Reserved by <a href="#">Mironcoder</a></p>
                </div>
            </div>
        </aside>
    </>
    )
}

export default NavSidebar