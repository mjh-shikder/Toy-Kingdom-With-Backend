import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CarImg from "./../../assets/car.png";
import DartImg from "./../../assets/dart-board.png";
import DroneImg from "./../../assets/drone.png";
import GameImg from "./../../assets/game-console.png";
import PaintingImg from "./../../assets/painting.png";
import GunImg from "./../../assets/raygun.png";
import SpinnerImg from "./../../assets/spinners.png";
import TrainImg from "./../../assets/train.png";
import { Link, Navigate } from "react-router";
import Aos from "aos";
import 'aos/dist/aos.css'
const ShopByCategory = () => {
    // Aos fucntion
    useEffect(() => {
        Aos.init();
    }, [])
  return (
    <div data-aos="fade-right">
      <h2 className="text-4xl text-center font-semibold text-primary hover:text-secondary mt-10">
        Shop By Category
      </h2>
      <div className="bg-white mt-10 rounded-xl px-9 py-0.5">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          className="h-80 rounded-xl my-10"
        >
          <SwiperSlide className="rounded-2xl  ">
            <Link to={"/all-toys"}>
              <div className="bg-base-200 hover:bg-primary w-full h-full rounded-xl p-5 flex flex-col  ">
                <div className=" rounded-xl mt-10  ">
                  <img
                    className="rounded-xl  "
                    src={CarImg}
                    alt="category-image"
                  />
                </div>
                <div>
                  <h2 className="text-accent text-2xl font-semibold ">Cars</h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl ">
            <Link to={"/all-toys"}>
              <div className="bg-base-200 hover:bg-primary w-full h-full rounded-xl p-5 flex flex-col items-center ">
                <div className=" rounded-xl mt-10 w-2/3 ">
                  <img
                    className="rounded-xl  "
                    src={DartImg}
                    alt="category-image"
                  />
                </div>
                <div>
                  <h2 className="text-accent text-2xl font-semibold ">
                    Dart Board
                  </h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl ">
            <Link to={"/all-toys"}>
              <div className="bg-base-200 hover:bg-primary w-full h-full rounded-xl p-5 flex flex-col items-center ">
                <div className=" rounded-xl mt-10 w-2/3 ">
                  <img
                    className="rounded-xl  "
                    src={DroneImg}
                    alt="category-image"
                  />
                </div>
                <div>
                  <h2 className="text-accent text-2xl font-semibold ">
                    Drones
                  </h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl ">
            <Link to={"/all-toys"}>
              <div className="bg-base-200 hover:bg-primary w-full h-full rounded-xl p-5 flex flex-col items-center ">
                <div className=" rounded-xl mt-10 w-2/3 ">
                  <img
                    className="rounded-xl "
                    src={GameImg}
                    alt="category-image"
                  />
                </div>
                <div>
                  <h2 className="text-accent text-2xl font-semibold mt-12">
                    Video Games
                  </h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl ">
            <Link to={"/all-toys"}>
              <div className="bg-base-200 hover:bg-primary w-full h-full rounded-xl p-5 flex flex-col items-center ">
                <div className=" rounded-xl mt-10 w-2/3 ">
                  <img
                    className="rounded-xl rotate-45"
                    src={SpinnerImg}
                    alt="category-image"
                  />
                </div>
                <div>
                  <h2 className="text-accent text-2xl font-semibold ">
                    Spinners
                  </h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl ">
            <Link to={"/all-toys"}>
              <div className="bg-base-200 hover:bg-primary w-full h-full rounded-xl p-5 flex flex-col items-center ">
                <div className=" rounded-xl mt-10 w-2/3 ">
                  <img
                    className="rounded-xl  "
                    src={PaintingImg}
                    alt="category-image"
                  />
                </div>
                <div>
                  <h2 className="text-accent text-2xl font-semibold mt-9">
                    Drawing
                  </h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl ">
            <Link to={"/all-toys"}>
              <div className="bg-base-200 hover:bg-primary w-full h-full rounded-xl p-5 flex flex-col items-center ">
                <div className=" rounded-xl mt-10 w-2/3 ">
                  <img
                    className="rounded-xl  "
                    src={TrainImg}
                    alt="category-image"
                  />
                </div>
                <div>
                  <h2 className="text-accent text-2xl font-semibold mt-10 ">
                    Trains
                  </h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ShopByCategory;
