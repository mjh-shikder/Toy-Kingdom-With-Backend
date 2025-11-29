import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MyContainer from "../MyContainer";
import OurFeatures from "../home/OurFeatures";
import ShopByCategory from "../home/ShopByCategory";
import NewArrivals from "../home/NewArrivals";
import { ToastContainer } from "react-toastify";

const HomeLayout = () => {
  return (
    <div className="bg-base-200">
      <title>Toys Kingdom - Home</title>
      <header>
        <nav>
          <MyContainer>
            <Navbar></Navbar>
          </MyContainer>
        </nav>
      </header>
      <main>
        <MyContainer>
          <section>
            <Outlet></Outlet>
          </section>
        </MyContainer>
      </main>
      <footer>
        <MyContainer>
          <Footer></Footer>
        </MyContainer>
        <ToastContainer></ToastContainer>
      </footer>
    </div>
  );
};

export default HomeLayout;
