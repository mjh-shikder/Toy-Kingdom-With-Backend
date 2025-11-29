
import Navbar from "./Navbar";
import MyContainer from "./MyContainer";
import Footer from "./Footer";
import { useLoaderData, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const DetailsCard = () => {

const toys = useLoaderData();       
  const { id } = useParams();

  const toy = toys.find(item => item.toyId == id);

const {
  toyName,
  price,
  rating,
  pictureURL,
  description,
  availableQuantity,
  sellerName,
  sellerEmail,
  subCategory,
} = toy;

  // Hanlde buye now
  const handleBuyNow = () => {
    toast.success("Order Placed");
  };

  // Add to cart button
  const handleAddtoCart = () => {
    toast("Added To Cart");
  };

  // Try now button 
  const handleTryNow = (e) => {
    e.preventDefault();
    toast("Submit Done");

    e.target.name.value = "";
    e.target.email.value = "";
  };

  return (
    <div className="bg-base-200">
      <title>Toy Kingdom - Products</title>
      <MyContainer>
        <Navbar></Navbar>
        <div className="bg-white mt-10 rounded-xl md:p-10 md:grid md:grid-cols-12 flex flex-col justify-start ">
          {/* image container */}
          <div className="col-span-7">
            <img div className="rounded-xl w-full " src={pictureURL} alt="" />
          </div>
          {/* others info */}
          <div className="col-span-5 md:px-7 text-accent">
            <h1 className="text-4xl font-semibold  ">{toyName}</h1>
            <p className="mt-3 text-lg ">{description}</p>
            <p className="mt-3 text-lg flex items-center gap-1.5 text-primary ">
              <FaStar size={20}></FaStar> {rating}
            </p>
            <button className="border px-2.5 rounded-md border-gray-500 text-gray-500 text-sm mt-4">
              {subCategory}
            </button>
            <p className="mt-3  text-secondary ">
              Available Quantity {availableQuantity}
            </p>
            <div className="border-b border-gray-100 my-5"></div>
            <div>
              <div className="flex space-x-2 ">
                <p className="text-sm text-gray-400 line-through ">
                  ${(Number(price) * 1.1).toFixed(2)}
                </p>
                <p className="text-primary">-10%</p>
              </div>

              <p className="text-3xl text-secondary ">${price}</p>
            </div>
            <div className="border-b border-gray-100 my-5"></div> {/* Border */}
            <div className="border rounded-lg p-3 border-gray-100 text-gray-600 ">
              {" "}
              {/* Border */}
              <h3 className=" text-xl ">More Details</h3>
              <h3>Seller : {sellerName}</h3>
              <h3>Email : {sellerEmail}</h3>
            </div>
            <div className="mt-5 flex gap-5 md:space-x-10 ">
              <button
                onClick={handleBuyNow}
                className="btn btn-secondary btn-lg px-10 "
              >
                Buye Now
              </button>
              <button
                onClick={handleAddtoCart}
                className="btn btn-primary btn-outline btn-lg px-10 "
              >
                Add to Cart
              </button>
            </div>
            <div className="border-b border-gray-100 my-5"></div> {/* Border */}

            {/* Try now section */}
            <div className=" ">
              <h2 className="text-2xl text-accent font-semibold  ">Try Now Toys</h2>
              <form
                onSubmit={handleTryNow}
                className="bg-base-200 p-5 rounded-xl mt-5"
              >
                <fieldset className="fieldset relative">
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

                  <button className="btn  btn-secondary btn-outline mt-4 rounded-xl">
                    Try Now
                  </button>
                  
                </fieldset>
              </form>
            </div>
          </div>
        </div>

        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </MyContainer>
    </div>
  );
};

export default DetailsCard;
