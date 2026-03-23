
function CategorySidebar(){
 return (

    <>
      <aside className="category-sidebar">
            <div className="category-header">
                <h4 className="category-title">
                    <i className="fas fa-align-left"></i>
                    <span>categories</span>
                </h4>
                <button className="category-close"><i className="icofont-close"></i></button>
            </div>
            <ul className="category-list">
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-vegetable"></i>
                        <span>vegetables</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">asparagus</a></li>
                        <li><a href="#">broccoli</a></li>
                        <li><a href="#">carrot</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-groceries"></i>
                        <span>groceries</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Grains & Bread</a></li>
                        <li><a href="#">Dairy & Eggs</a></li>
                        <li><a href="#">Oil & Fat</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-fruit"></i>
                        <span>fruits</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Apple</a></li>
                        <li><a href="#">Orange</a></li>
                        <li><a href="#">Strawberry</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-dairy-products"></i>
                        <span>dairy farm</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Egg</a></li>
                        <li><a href="#">milk</a></li>
                        <li><a href="#">butter</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-crab"></i>
                        <span>sea foods</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Lobster</a></li>
                        <li><a href="#">Octopus</a></li>
                        <li><a href="#">Shrimp</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-salad"></i>
                        <span>diet foods</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Salmon</a></li>
                        <li><a href="#">Potatoes</a></li>
                        <li><a href="#">Greens</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-dried-fruit"></i>
                        <span>dry foods</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">noodles</a></li>
                        <li><a href="#">Powdered milk</a></li>
                        <li><a href="#">nut & yeast</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-fast-food"></i>
                        <span>fast foods</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">mango</a></li>
                        <li><a href="#">plumsor</a></li>
                        <li><a href="#">raisins</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-cheers"></i>
                        <span>drinks</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Wine</a></li>
                        <li><a href="#">Juice</a></li>
                        <li><a href="#">Water</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-beverage"></i>
                        <span>coffee</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Cappuchino</a></li>
                        <li><a href="#">Espresso</a></li>
                        <li><a href="#">Latte</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-barbecue"></i>
                        <span>meats</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Meatball</a></li>
                        <li><a href="#">Sausage</a></li>
                        <li><a href="#">Poultry</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-fish"></i>
                        <span>fishes</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Agujjim</a></li>
                        <li><a href="#">saltfish</a></li>
                        <li><a href="#">pazza</a></li>
                    </ul>
                </li>
            </ul>
            <div className="category-footer">
                <p>All Rights Reserved by <a href="#">Mironcoder</a></p>
            </div>
        </aside>
    </>
 )
}


export default CategorySidebar