import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="content">
        <div className="pt-8 w-11/12 m-auto bg-blackOpacity rounded-xl absolute bottom-4 left-4">
          <div className="flex items-start justify-around px-2 pb-4">
            <div className="w-1/2">
              <div className="leading-5 h-10">Your Terminal</div>
              <div className="text-3xl">3</div>
            </div>
            <div className="w-1/2">
              <div className="leading-5 h-10">Terminal In Market</div>
              <div className="text-3xl">8,118</div>
            </div>
          </div>
          <div className="h-px w-full bg-slate-200 scale-y-50"></div>
          <div className="flex items-center justify-around px-2 pt-4">
            <div className="w-1/2">
              <div className="leading-5 h-10">Today minded Token</div>
              <div className="text-3xl">120</div>
            </div>
            <div className="w-1/2">
              <div className="leading-5 h-10">Your Total Token</div>
              <div className="text-3xl">160M</div>
            </div>
          </div>
          <Link to="/">
            <button className="bg-orange rounded-3xl py-2 px-6 text-black mt-10 w-4/5 h-14 text-xl">
              View Transaction
            </button>
          </Link>
          <div className="w-full bottom-4">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
