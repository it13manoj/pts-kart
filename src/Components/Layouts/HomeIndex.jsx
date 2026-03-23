import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Fresh Products",
    description: "Daily fresh groceries directly from local farms.",
  },
  {
    title: "Fast Delivery",
    description: "Get your order delivered within hours.",
  },
  {
    title: "Secure Payments",
    description: "Multiple payment options with full security.",
  },
];

const categories = [
  "Vegetables",
  "Fruits",
  "Dairy",
  "Meat",
  "Seafood",
  "Fast Food",
];

const HomeIndex = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Daily Grocery, Delivered Fresh
          </h1>
          <p className="text-lg mb-6">
            Shop smarter, eat healthier, live better.
          </p>
          <Link
            to="/home-grid"
            className="inline-block bg-white text-green-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 text-center hover:shadow-lg cursor-pointer"
            >
              <p className="font-medium capitalize">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl border hover:shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Shopping Today</h2>
          <p className="mb-6">Join thousands of happy customers</p>
          <Link
            to="/register"
            className="inline-block bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100"
          >
            Create Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeIndex;
