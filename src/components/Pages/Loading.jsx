import React from "react";
import MyContainer from "../MyContainer";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <span className="loading loading-bars loading-xl bg-secondary scale-x-200 "></span>
    </div>
  );
};

export default Loading;
