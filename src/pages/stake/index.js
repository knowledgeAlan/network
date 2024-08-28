import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import { useState } from "react";

const Stake = () => {
  const [value, setValue] = useState(0)
  return (
    <div className="stake">
      <div className="content">
        <div className="px-10 mt-5 text-xl Regular">
          <div className="text-left">Choose Staking Period</div>
          <div className="border border-solid border-disable py-3 px-4 rounded-xl flex items-center justify-between mt-4 text-disable ">
            <span>3month Speed </span>
            <span>1.2X</span>
          </div>
          <div className="border border-solid border-disable py-3 px-4 rounded-xl flex items-center justify-between mt-4 text-disable ">
            <span>6 month Speed </span>
            <span>1.5X</span>
          </div>
          <div className="border border-solid border-white py-3 px-4 rounded-xl flex items-center justify-between mt-4 bg-selectBg ">
            <span>12 month Speed </span>
            <span>2.0X</span>
          </div>
        </div>
        <div className="mx-10 mt-10 py-4 px-8 bg-swapBg rounded-xl Regular">
          <div className="text-disable">You’re staking</div>
          <div>
            <input className="outline-none bg-transparent my-10 text-7xl w-3/4 text-center" type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
            <span className="SemiBold text-xl text-white">UPN</span>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-black px-4 rounded-xl py-1 text-disable">1,000</button>
            <button className="bg-black px-4 rounded-xl py-1 text-disable">5,000</button>
            <button className="bg-black px-4 rounded-xl py-1 border border-solid border-white">10,000</button>
          </div>
        </div>

        <Link to="/success">
          <button className="bg-orange rounded-3xl py-2 px-6 text-black mt-10 w-4/5 h-14 text-xl">
            Stake
          </button>
        </Link>
        <div className="w-full absolute bottom-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Stake;
