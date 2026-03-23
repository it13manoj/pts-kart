import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const homeLinks = [
    { to: '/', label: 'Home grid' },

    { to: '/', label: 'Home index' },

    { href: 'home-classic.html', label: 'Home classic' },
    { href: 'home-standard.html', label: 'Home standard' },
    { href: 'home-category.html', label: 'Home category' }
  ];

  const shopPages = [
    { href: 'shop-5column.html', label: 'shop 5 column' },
    { href: 'shop-4column.html', label: 'shop 4 column' },
    { href: 'shop-3column.html', label: 'shop 3 column' },
    { href: 'shop-2column.html', label: 'shop 2 column' },
    { href: 'shop-1column.html', label: 'shop 1 column' }
  ];

  const productPages = [
    { href: 'product-tab.html', label: 'product single tab' },
    { href: 'product-grid.html', label: 'product single grid' },
    { href: 'product-video.html', label: 'product single video' },
    { href: 'product-simple.html', label: 'product single simple' }
  ];

  const userActions = [
    { href: 'wishlist.html', label: 'wishlist' },
    { href: 'compare.html', label: 'compare' },
    { href: 'checkout.html', label: 'checkout' },
    { href: 'orderlist.html', label: 'order history' },
    { href: 'invoice.html', label: 'order invoice' }
  ];

  const otherPages = [
    { href: 'all-category.html', label: 'all Category' },
    { href: 'brand-list.html', label: 'brand list' },
    { href: 'brand-single.html', label: 'brand single' }
  ];

  const categories = [
    {
      title: 'vegetables',
      items: ['carrot', 'broccoli', 'asparagus', 'cauliflower', 'eggplant']
    },
    {
      title: 'fruits',
      items: ['Apple', 'orange', 'banana', 'strawberrie', 'watermelon']
    },
    {
      title: 'dairy farms',
      items: ['Butter', 'Cheese', 'Milk', 'Eggs', 'cream']
    },
    {
      title: 'seafoods',
      items: ['Lobster', 'Octopus', 'Shrimp', 'Halabos', 'Maeuntang']
    },
    {
      title: 'diet foods',
      items: ['Salmon', 'Avocados', 'Leafy Greens', 'Boiled Potatoes', 'Cottage Cheese']
    },
    {
      title: 'fast foods',
      items: ['burger', 'milkshake', 'sandwich', 'doughnut', 'pizza']
    },
    {
      title: 'drinks',
      items: ['cocktail', 'hard soda', 'shampain', 'Wine', 'barley']
    },
    {
      title: 'meats',
      items: ['Meatball', 'Sausage', 'Poultry', 'chicken', 'Cows']
    },
    {
      title: 'fishes',
      items: ['scads', 'pomfret', 'groupers', 'anchovy', 'mackerel']
    },
    {
      title: 'dry foods',
      items: ['noodles', 'Powdered milk', 'nut & yeast', 'almonds', 'pumpkin']
    }
  ];

  const pagesLinks = [

    { to: '/faq', label: 'faqs' },
    {to:'/TermCondition',label:'TermCondition'},
    { to: '/offers', label: 'offers' },
    { to: '/profile', label: 'my profile' },
    { to: '/wallet', label: 'my wallet' },
    { to: '/about', label: 'about us' },
    { to: '/contact', label: 'contact us' },
  ];



  const authLinks = [
    { to:'/Login' ,label:'Login' },
    { to:'/Register',label:'Register' },
    { href: 'reset-password.html', label: 'reset password' },
    { href: 'change-password.html', label: 'change password' }
  ];

  const blogLinks = [
    { href: 'blog-grid.html', label: 'blog grid' },
    { href: 'blog-standard.html', label: 'blog standard' },
    { href: 'blog-details.html', label: 'blog details' },
    { href: 'blog-author.html', label: 'blog author' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <ul className="flex space-x-8">
            {/* Home Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium capitalize">
                home <span className="ml-1">▼</span>
              </a>
              {activeDropdown === 'home' && (
                <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                  {homeLinks.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="block px-4 py-2 hover:bg-gray-100 text-gray-700 capitalize">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Shop Megamenu */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('shop')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium capitalize">
                shop <span className="ml-1">▼</span>
              </a>
              {activeDropdown === 'shop' && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-6 z-50 w-screen max-w-4xl">
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <h5 className="font-bold text-gray-900 mb-3 capitalize">shop pages</h5>
                      <ul className="space-y-2">
                        {shopPages.map((link, idx) => (
                          <li key={idx}>
                            <a href={link.href} className="text-gray-600 hover:text-green-600">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-3 capitalize">product pages</h5>
                      <ul className="space-y-2">
                        {productPages.map((link, idx) => (
                          <li key={idx}>
                            <a href={link.href} className="text-gray-600 hover:text-green-600">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-3 capitalize">user action</h5>
                      <ul className="space-y-2">
                        {userActions.map((link, idx) => (
                          <li key={idx}>
                            <a href={link.href} className="text-gray-600 hover:text-green-600">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-3 capitalize">other pages</h5>
                      <ul className="space-y-2">
                        {otherPages.map((link, idx) => (
                          <li key={idx}>
                            <a href={link.href} className="text-gray-600 hover:text-green-600">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Category Megamenu */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('category')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium capitalize">
                category <span className="ml-1">▼</span>
              </a>
              {activeDropdown === 'category' && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-6 z-50 w-screen max-w-6xl max-h-96 overflow-y-auto">
                  <div className="grid grid-cols-5 gap-6">
                    {categories.map((cat, idx) => (
                      <div key={idx}>
                        <h5 className="font-bold text-gray-900 mb-3 capitalize">{cat.title}</h5>
                        <ul className="space-y-2">
                          {cat.items.map((item, i) => (
                            <li key={i}>
                              <a href="#" className="text-gray-600 hover:text-green-600">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Pages Dropdown */}
            {activeDropdown === 'pages' && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                {pagesLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700 capitalize"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}


            {/* Authentic Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('authentic')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium capitalize">
                authentic <span className="ml-1">▼</span>
              </a>
              {activeDropdown === 'authentic' && (
                <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                  {authLinks.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Blogs Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('blogs')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium capitalize">
                blogs <span className="ml-1">▼</span>
              </a>
              {activeDropdown === 'blogs' && (
                <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                  {blogLinks.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Contact Info */}
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <i className="icofont-ui-touch-phone text-green-600 text-xl"></i>
              <div>
                <small className="block text-xs text-gray-500">call us</small>
                <span className="text-sm font-medium text-gray-700">(+880) 183 8288 389</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="icofont-ui-email text-green-600 text-xl"></i>
              <div>
                <small className="block text-xs text-gray-500">email us</small>
                <span className="text-sm font-medium text-gray-700">support@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;