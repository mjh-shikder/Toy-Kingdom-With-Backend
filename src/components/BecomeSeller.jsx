import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const BecomeSeller = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   console.log(isOpen);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };

  // Apply now
  const handleApply = (e) => {
    e.preventDefault();
    toast("Submit Done");

    const form = e.target;

    const name = form.name.value;
    const shopName = form.shopName.value;
    const category = form.category.value;
    const phone = form.phone.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const description = form.description.value;

    const formData = {
      name,
      shopName,
      category,
      phone,
      photoURL,
      email,
      description
    };

    console.log("full form", { formData });

    axios.post('http://localhost:3000/contributors', formData)
      .then(res => {
      console.log(res);
    })
      

  };
  


  // Aos fucntion
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="zoom-in" data-aos-easing="linear">
      <title>Toy Kingdom - Become a Seller</title>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6 my-5">
        <h2 className="text-3xl font-bold text-center text-accent">
          Become a Seller on Toy Kingdom
        </h2>

        <p className="text-gray-600 text-center">
          Join Toy Kingdom as a trusted seller and reach thousands of parents,
          collectors, and toy lovers across Bangladesh. Selling your products on
          our platform is easy, fast, and absolutely secure.
        </p>

        <div data-aos="fade-left" className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-5 rounded-xl border border-gray-400 ">
            <h3 className="font-semibold text-lg mb-2 text-accent ">
              📦 List Your Products
            </h3>
            <p className="text-gray-600">
              Upload toy images, add prices, and write descriptions — we'll
              showcase them on our marketplace.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-gray-400">
            <h3 className="font-semibold text-lg mb-2 text-accent">
              🚚 Fast Delivery Support
            </h3>
            <p className="text-gray-600">
              We handle delivery through trusted partners, ensuring quick and
              safe shipment to customers.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-gray-400">
            <h3 className="font-semibold text-lg mb-2 text-accent">
              💳 Secure Payments
            </h3>
            <p className="text-gray-600">
              Receive payments directly to your preferred method on time — 100%
              guaranteed.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="mt-8 bg-base-200 border border-secondary p-6 rounded-xl"
        >
          <h3 className="font-semibold text-xl text-secondary mb-2">
            Why Sell With Us?
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>No signup fees or hidden charges</li>
            <li>Dedicated seller dashboard</li>
            <li>Grow your toy business online</li>
            <li>24/7 support for sellers</li>
          </ul>
        </div>

        {/* apply now */}
        <div className="flex items-center justify-center">
          <button onClick={handleOpenForm} className="btn btn-primary ">
            Apply Now
          </button>
        </div>

        {isOpen ? (
          <div
            data-aos="zoom-in"
            className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10"
          >
            <h2 className="text-3xl font-bold text-center text-secondary mb-6">
              Seller Form
            </h2>

            <form onSubmit={handleApply} className="space-y-6">
              {/* Seller Name */}
              <div>
                <label className="block mb-2 font-semibold">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="Enter your full name"
                  name="name"
                />
              </div>

              {/* Shop Name */}
              <div>
                <label className="block mb-2 font-semibold">Shop Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="Enter your shop name"
                  name="shopName"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-semibold">Phone Number</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="Enter your phone number"
                  name="phone"
                />
              </div>

              {/* Shop Type */}
              <div>
                <label className="block mb-2 font-semibold">
                  Shop Category
                </label>
                <select
                  name="category"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-secondary"
                >
                  <option>Select a category</option>
                  <option>Kids Toys</option>
                  <option>Educational Toys</option>
                  <option>Indoor Games</option>
                  <option>Outdoor Games</option>
                  <option>Baby Products</option>
                </select>
              </div>

              {/* Photo URL */}
              <div>
                <label className="block mb-2 font-semibold">Photo URL</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="Enter your phone number"
                  name="photoURL"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block mb-2 font-semibold">
                  Shop Description
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="Describe your shop and products"
                  name="description"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="btn-primary btn w-full  text-white p-3 rounded-lg text-lg font-semibold ">
                Submit Application
              </button>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BecomeSeller;
