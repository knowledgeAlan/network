import { Link } from "react-router-dom";
import Footer from "../../components/footer";

const Swap = () => {
  return (
    <div className="swap">
      <div className="content">
        <div className="w-4/5 m-auto relative mt-32">
          <div className="bg-swapBg rounded-xl flex items-center justify-between p-8">
            <input
              type="text"
              value={'11111'}
              className="bg-transparent outline-none text-3xl w-2/3 Regular"
            />
            <div className="text-xl">UPN</div>
          </div>
          <div className="absolute top-1/2 left-1/2 translate border-4 w-12 h-12 flex items-center justify-center rounded-2xl border-solid border-black bg-swapBg">
            <img src={require("../../assets/img/down.png")} alt="" />
          </div>
          <div className="bg-swapBg rounded-xl mt-2 flex items-center justify-between p-8">
            <input
              type="text"
              value={'2222'}
              className="bg-transparent outline-none text-3xl w-2/3 Regular"
            />
            <div className="text-xl">USDT</div>
          </div>
        </div>
        <Link to="/success">
          <button className="bg-orange rounded-3xl py-2 px-6 text-black mt-10 w-4/5 h-14 text-xl">
            Swap
          </button>
        </Link>
        <div className="w-full absolute bottom-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Swap;
