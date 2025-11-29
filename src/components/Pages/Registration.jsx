import React, { use, useState } from "react";
import MyContainer from "../MyContainer";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { updateProfile } from "firebase/auth";
import Aos from "aos";
import 'aos/dist/aos.css'

const Registration = () => {
  //
  const { createUser, setUser, showPassword, setShowPassword, googleSignin } =
    use(AuthContext);
  
  const [error, setError] = useState('')

  const location = useLocation();
  const navigate = useNavigate()
  
  
  
  // show hide password function
  const handleShowHidePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // Email, password registration
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;
    const displayName = e.target.name.value;
   
    
    
    // password validation
    if (password.length < 5) {
      toast.error('Password must be at last 6 Charecters')
      setError('Password must be at least 6 Charecters')
      return
    }

    if (!/[A-Z]/.test(password)) {
      toast.error('Password must contain at least one uppercase letter');
      setError('Password must contain at least one uppercase letter')
    return;
  }
  
    if(!/[a-z]/.test(password)) {
      toast.error('Password must contain at least one lowercase letter');
      setError('Password must contain at least one lowercase letter')
      return;
    }
    //-------------
    
    console.log(email, password, photoURL);

    // reset error
    setError('');

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        
        setUser(user);
        if (photoURL) {
          updateProfile(user, {photoURL})
        }
        if (displayName) {
          updateProfile(user, {displayName} )
        }
        toast("Registration Successful");
       navigate(location.state ? location.state : '/')
      })
      .catch((error) => {
        toast.error(error.message);
        setError(error.message);
      });
  };


  // Login with google
  const handleGoogleSignUp = () => {
    googleSignin()
          .then(res => {
            const user = res.user;
            setUser(user);
            toast.success('Login Successful')
           navigate(location.state ? location.state : '/')
          })
          .catch(err => {
          toast.error(err.message, err.code)
        })
  };
  

  return (
    <div data-aos="fade-right">
      <title>Toy Kingdom - Register</title>
      <MyContainer>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-40 mb-40">
          <div className="card-body">
            <h1 className="text-3xl text-primary font-bold text-center">
              Register Now!
            </h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset relative">
                {/* Name Feild */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input rounded-xl"
                  name="name"
                  placeholder="Your Name"
                />
                {/* Email Feild */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input rounded-xl"
                  name="email"
                  placeholder="Email"
                />
                {/* Photo url */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input rounded-xl"
                  name="photoURL"
                  placeholder="Live link of your photo"
                />
                {/* Password Feild */}
                <label className="label">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input rounded-xl"
                  name="password"
                  placeholder="Password"
                />
                { error && <p className="text-primary">{error}</p>}
                <button
                  className=" absolute top-62 right-6"
                  onClick={handleShowHidePassword}
                >
                  {showPassword ? (
                    <VscEye size={22}></VscEye>
                  ) : (
                    <VscEyeClosed size={22}></VscEyeClosed>
                  )}
                </button>
                <div></div>
                <button className="btn btn-primary mt-4 rounded-xl">Register</button>
              </fieldset>
            </form>
            {/* Google */}
            <button
              onClick={handleGoogleSignUp}
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
              Sign Up with Google
            </button>
            <p>
              Already Have an Accoutn? Then{" "}
              <Link className="text-secondary hover:underline " to={"/login"}>
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Registration;
