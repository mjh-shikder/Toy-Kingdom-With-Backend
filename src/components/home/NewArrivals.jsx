import { Link } from "react-router";
import { LiaStarSolid } from "react-icons/lia";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const NewArrivals = () => {

    // Aos fucntion
    useEffect(() => {
        Aos.init();
    }, [])

  return (
    <div data-aos="flip-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="bg-base-100 py-10 rounded-xl mt-10">
      <h1 className="text-4xl text-center font-semibold text-secondary hover:text-primary ">
        New Arrivals
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 space-y-10 place-items-center  ">
        {/* card 1 */}
        <div className="card bg-base-200 w-96 shadow-sm text-accent ">
          <figure>
            <img
              className="h-64"
              src={
                'https://images.unsplash.com/photo-1617275457272-51d5a17b8e82?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt="kids-toy"
            />
          </figure>
          <div className="card-body">
            <div className="flex items-center justify-between ">
              <h2 className="cardTitle text-secondary font-semibold text-2xl ">
                Painted Egg Shell
              </h2>
              <div className="font2 flex items-center font-semibold gap-1 text-secondary bg-white py-0.5 border border-gray-100 rounded-md px-1.5">
                {" "}
                <LiaStarSolid size={17}></LiaStarSolid> 5
              </div>
            </div>
            <p className="cardDes">Colorful Vibrant Emoji Printed on Eggs.</p>
            <div className="flex  justify-between items-center">
              <h3 className="font2 text-secondary bg-white py-0.5 border border-gray-100 rounded-md px-1.5">
                Available Quantit (50)
              </h3>
              <h3 className="text-secondary text-lg font2 bg-white py-0.5 border border-gray-100 rounded-md px-1.5">
                $2.99
              </h3>
            </div>
            <Link
              to={`/card-details/29`}
              className="btn  btn-secondary hover:btn-primary mt-1.5 "
            >
              VIew More
            </Link>
          </div>
        </div>
        {/* card 2 */}
        <div className="card bg-base-200 w-96 shadow-sm text-accent ">
          <figure>
            <img
              className="h-64 w-full "
              src={
                "https://images.unsplash.com/photo-1623346016470-53d81533a76d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="kids-toy"
            />
          </figure>
          <div className="card-body">
            <div className="flex items-center justify-between ">
              <h2 className="cardTitle text-secondary font-semibold text-2xl ">
                Minion Figure
              </h2>
              <div className="font2 flex items-center font-semibold gap-1 text-secondary bg-white py-0.5 border border-gray-100 rounded-md px-1.5">
                {" "}
                <LiaStarSolid size={17}></LiaStarSolid> 5
              </div>
            </div>
            <p className="cardDes">Super Realistic Minon mini figure.</p>
            <div className="flex  justify-between items-center">
              <h3 className="font2 text-secondary bg-white py-0.5 border border-gray-100 rounded-md px-1.5">
                Available Quantit (67)
              </h3>
              <h3 className="text-secondary text-lg font2 bg-white py-0.5 border border-gray-100 rounded-md px-1.5">
                $6.99
              </h3>
            </div>
            <Link
              to={`/card-details/27`}
              className="btn  btn-secondary hover:btn-primary mt-1.5 "
            >
              VIew More
            </Link>
          </div>
        </div>

        {/* card 1 */}
        <div className="card bg-base-200 w-96 shadow-sm text-accent ">
          <figure>
            <img
              className="h-64 w-full"
              src={
                "https://images.unsplash.com/photo-1687145429790-ea29a93163ae?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3A%3D"
              }
              alt="kids-toy"
            />
          </figure>
          <div className="card-body">
            <div className="flex items-center justify-between ">
              <h2 className="cardTitle text-secondary font-semibold text-2xl ">
                Rubics Cube
              </h2>
              <div className="font2 flex items-center font-semibold gap-1 text-secondary bg-white py-0.5 border border-gray-100 rounded-md px-1.5">
                {" "}
                <LiaStarSolid size={17}></LiaStarSolid> 4.8
              </div>
            </div>
            <p className="cardDes">Best Quality Rubisc cube </p>
            <div className="flex  justify-between items-center">
              <h3 className="font2 text-secondary bg-white py-0.5 border border-gray-100 rounded-md px-1.5">
                Available Quantit (50)
              </h3>
              <h3 className="text-secondary text-lg font2 bg-white py-0.5 border border-gray-100 rounded-md px-1.5">
                $3.99
              </h3>
            </div>
            <Link
              to={`/card-details/21`}
              className="btn  btn-secondary hover:btn-primary mt-1.5  "
            >
              VIew More
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        {/* <Link to={'/all-toys'} className='btn btn-secondary px-13 text-center hover:btn-primary '>All Products</Link> */}
      </div>
    </div>
  );
};

export default NewArrivals;
