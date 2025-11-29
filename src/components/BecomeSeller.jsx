import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Aos from "aos";
import 'aos/dist/aos.css'


// handle become a seller btn
const BecomeSeller = () => {
  const handleApply = (e) => {
    e.preventDefault();
    toast("Submit Done");

    e.target.name.value = "";
    e.target.email.value = "";
    };
    
    // Aos fucntion
    useEffect(() => {
        Aos.init();
    },[])

  return (
    <div data-aos="zoom-in"
     data-aos-easing="linear"
    >
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
          <div className="p-5 rounded-xl border">
            <h3 className="font-semibold text-lg mb-2 text-accent ">
              📦 List Your Products
            </h3>
            <p className="text-gray-600">
              Upload toy images, add prices, and write descriptions — we'll
              showcase them on our marketplace.
            </p>
          </div>

          <div className="p-5 rounded-xl border">
            <h3 className="font-semibold text-lg mb-2 text-accent">
              🚚 Fast Delivery Support
            </h3>
            <p className="text-gray-600">
              We handle delivery through trusted partners, ensuring quick and
              safe shipment to customers.
            </p>
          </div>

          <div className="p-5 rounded-xl border">
            <h3 className="font-semibold text-lg mb-2 text-accent">💳 Secure Payments</h3>
            <p className="text-gray-600">
              Receive payments directly to your preferred method on time — 100%
              guaranteed.
            </p>
          </div>
        </div>

        <div data-aos="fade-right" className="mt-8 bg-base-200 border border-secondary p-6 rounded-xl">
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

        <div data-aos="fade-up" className="text-center mt-6">
          <form
            onSubmit={handleApply}
            className="bg-base-200 p-5 rounded-xl mt-5"
          >
            <fieldset className="fieldset ">
              {/* Email Feild */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input rounded-xl w-full"
                name="name"
                placeholder="Name"
                required
              />
              {/* Password Feild */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input rounded-xl w-full"
                name="email"
                placeholder="Email"
                required
              />

              <button className="btn  btn-secondary  mt-4 rounded-xl">
                Apply Now
              </button>
            </fieldset>
          </form>

          <p className="text-gray-500 mt-2 text-sm">
            We’ll review your application and contact you within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BecomeSeller;
