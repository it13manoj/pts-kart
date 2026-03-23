import React from "react";

const products = [
  {
    id: 1,
    name: "Fresh Apples",
    price: "$4.99",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Organic Vegetables",
    price: "$6.49",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Dairy Milk",
    price: "$3.20",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Fresh Fish",
    price: "$9.99",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    name: "Fast Food Combo",
    price: "$7.50",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    name: "Healthy Fruits",
    price: "$5.99",
    image: "https://via.placeholder.com/300x200",
  },
];

const HomeGrid = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">Fresh Groceries Delivered</h1>
        <p className="text-lg">Shop fresh food & daily essentials</p>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Popular Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-t-2xl w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-green-600 font-semibold mt-1">
                  {product.price}
                </p>
                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
