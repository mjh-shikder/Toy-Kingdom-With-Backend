import React from "react";
import errorImg from "../../assets/error.jpg";
import MyContainer from "../MyContainer";

const ErrorPage = () => {
  return (
    <MyContainer>
      <div className="w-full px-64 ">
        <img src={errorImg} alt="" />
      </div>
    </MyContainer>
  );
};

export default ErrorPage;
