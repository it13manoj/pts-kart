
function MobileMenu(){

 return (

    <>
     <div className="mobile-menu">
            <a href='index.html' title='Home Page'>
                <i className="fas fa-home"></i>
                <span>Home</span>
            </a>
            <button className="cate-btn" title="Category List">
                <i className="fas fa-list"></i>
                <span>category</span>
            </button>
            <button className="cart-btn" title="Cartlist">
                <i className="fas fa-shopping-basket"></i>
                <span>cartlist</span>
                <sup>9+</sup>
            </button>
            <a href='wishlist.html' title='Wishlist'>
                <i className="fas fa-heart"></i>
                <span>wishlist</span>
                <sup>0</sup>
            </a>
            <a href='compare.html' title='Compare List'>
                <i className="fas fa-random"></i>
                <span>compare</span>
                <sup>0</sup>
            </a>
        </div>
    </>
 )
}

export default MobileMenu