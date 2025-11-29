import React, { useEffect } from "react";
import MyContainer from "../MyContainer";
import { TbTruckDelivery, TbTruckLoading } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";
import { RiSecurePaymentFill, RiShakeHandsFill } from "react-icons/ri";
import Aos from "aos";
import 'aos/dist/aos.css'

const OurFeatures = () => {
    // Aos fucntion
    useEffect(() => {
        Aos.init();
    }, [])
  return (
    <div data-aos="fade-left" className="grid md:grid-cols-4 grid-cols-2 bg-base-100 mt-10 rounded-xl 
     md:h-44 space-y-5 md:space-y-0 py-6  ">
      <div className=" md:border-r h-full border-0 border-gray-200  flex items-center md:justify-center gap-5 text-primary hover:text-secondary ">
        <div>
          <TbTruckDelivery size={40}></TbTruckDelivery>
        </div>
        <div className="">
          <h3 className="md:font-semibold md:text-xl ">Express Delivery</h3>
          <p className="text-base-300 text-xs">Inside Dhaka</p>
        </div>
      </div>
      <div className=" md:border-r h-full border-0 border-gray-200  flex items-center md:justify-center gap-5 text-primary hover:text-secondary ">
        <div>
          <FaBoxOpen size={40}></FaBoxOpen>
        </div>
        <div className="">
          <h3 className="md:font-semibold md:text-xl ">Free Return</h3>
          <p className="text-base-300 text-xs">In 14 Days</p>
        </div>
      </div>
      <div className=" md:border-r h-full border-0 border-gray-200 flex items-center-safe md:justify-center gap-5 text-primary hover:text-secondary ">
        <div>
          <RiShakeHandsFill size={40}></RiShakeHandsFill>
        </div>
        <div className="">
          <h3 className="md:font-semibold md:text-xl ">24/7 Support</h3>
          <p className="text-base-300 text-xs ">Online 24 Hours</p>
        </div>
      </div>
      <div className=" rounded-xl flex items-center md:justify-center gap-5 text-primary hover:text-secondary ">
        <div>
          <RiSecurePaymentFill size={40}></RiSecurePaymentFill>
        </div>
        <div className="">
          <h3 className="md:font-semibold md:text-xl ">Payment Method</h3>
          <p className="text-base-300 text-xs ">Secure Payment</p>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
