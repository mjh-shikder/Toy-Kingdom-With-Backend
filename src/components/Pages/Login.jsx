import React, { useContext, useState } from "react";
import MyContainer from "../MyContainer";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Aos from "aos";
import 'aos/dist/aos.css'

const Login = () => {
  const { userLogin, showPassword, setShowPassword, googleSignin, setUser, setTypedEmail } = useContext(AuthContext);
  
const [error, setError] = useState('')

  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location);


  // Show and Hide Password 
  const handleShowHidePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // Login with email and password
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log({email, password});

    userLogin(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful");
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch((error) => {
        toast.error(error.message, error.code);
        setError(error.message)
      });
  };
  
  // Login with Google 
  const handleGoogleLogin = () => {
    googleSignin()
      .then(res => {
        const user = res.user;
        setUser(user);
        toast.success('Login Successful')
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch(err => {
        toast.error(err.message, err.code)
      })
  };


  

  return (
    <div data-aos="fade-left" className="">
      <title>Toy Kingdom - Login</title>
      <MyContainer>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mb-40 mt-40">
          <div className="card-body">
            <h1 className="text-3xl text-secondary font-bold text-center">
              Login
            </h1>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset relative">
                {/* Email Feild */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input rounded-xl"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setTypedEmail(e.target.value)}
                  
                />
                {/* Password Feild */}
                <label className="label">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input rounded-xl"
                  name="password"
                  placeholder="Password"
                />
                <button
                  className=" absolute top-27 right-6"
                  onClick={handleShowHidePassword}
                >
                  {showPassword ? (
                    <VscEye size={22}></VscEye>
                  ) : (
                    <VscEyeClosed size={22}></VscEyeClosed>
                  )}
                </button>
                <div>
                  <Link to={'/forget-password'}  className="link link-hover text-secondary">
                    Forgot password?
                  </Link>
                  {error && <p className="text-primary">{error}</p> }
                </div>
                <button className="btn btn-secondary mt-4 rounded-xl">Login</button>
              </fieldset>
            </form>
            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5] rounded-xl"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p>
              Don't Have an Accout? Then{" "}
              <Link className="text-primary  hover:underline " to={"/register"}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Login;
