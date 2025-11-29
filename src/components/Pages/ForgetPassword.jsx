import React, { useContext, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext";

const ForgetPassword = () => {
  const { typedEmail} = useContext(AuthContext);

    // console.log(typedEmail);
    
    
  // Aos fucntion
  useEffect(() => {
    Aos.init();
  }, []);

  
  // handle forgot btn
  const handleForget = (e) => {
    e.preventDefault();
    const email = typedEmail

    // console.log("forget password", email);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.warning("Password Reset Link Sent");
          e.target.email.value = "";
          window.open("https://mail.google.com")
      })
      .catch((err) => {
        toast.warning(err.message, err.code);
      });
  };

  return (
      <div
          title="Forgot Password"
      data-aos="flip-right"
      className="flex justify-center h-screen items-center "
    >
      <form
        onSubmit={handleForget}
        className="bg-white p-5 rounded-xl md:w-5/12 w-10/12 "
      >
        <fieldset className="fieldset ">
          {/* Email Feild */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full rounded-xl"
            name="email"
            placeholder="Email"
            
            defaultValue={typedEmail}
          />

          <button className="btn btn-primary mt-4 rounded-xl">
            Send Password Reset Link
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ForgetPassword;
