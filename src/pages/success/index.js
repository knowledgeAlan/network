import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

const Purchase = () => {
  return (
    <div className="success">
      <div className="content text-orange relative">
        <div className="w-full pt-52 flex items-center justify-center">
          <img
            className="w-30"
            src={require("../../assets/img/success.png")}
            alt=""
          />
        </div>
        <div className="text-4xl pt-20 text-white leading-normal">
          Successful
        </div>

        <Link to="/swap">
          <button className="bg-orange rounded-3xl py-2 px-6 text-black mt-10 w-4/5 h-14 text-xl">
            Back to Swap
          </button>
        </Link>
        <Link to="/dashboard">
          <button className="bg-orange rounded-3xl py-2 px-6 text-black mt-6 w-4/5 h-14 text-xl">
            Back to Dashboard
          </button>
        </Link>
        <div className="w-full absolute bottom-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Purchase;
