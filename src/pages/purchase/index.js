import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

const Purchase = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="purchase">
      <div className="content text-orange relative">
        <div className="text-2xl pt-20">Terminal Unit Price </div>
        <div className="text-4xl mt-4">200USDT</div>
        <div className="flex items-center justify-center mt-20">
          <img
            className="w-10 mr-14"
            src={require("../../assets/img/x.png")}
            alt=""
          />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-24 h-20 outline-none text-white bg-transparent border border-solid border-orange rounded-2xl text-7xl px-6 Medium"
            type="text"
          />
        </div>
        <div className="text-6xl mt-20 text-white">{200 * value} USDT</div>
        <Link to="/purchaseSuccess">
        <button className="bg-orange rounded-3xl py-2 px-6 text-black mt-32 w-4/5 h-14 text-xl">
          Confirm Purchase
        </button>
        </Link>
        <Footer />
      </div>
    </div>
  );
};

export default Purchase;
