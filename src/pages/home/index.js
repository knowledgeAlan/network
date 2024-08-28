import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h1 className="text-6xl pt-40">seize</h1>
        <div className="w-11/12 m-auto text-4xl pt-10 leading-relaxed text-stone-300">
          The World First Payment Infrastrucutre Network
        </div>
        <Link to="purchase">
          <button className="bg-orange rounded-3xl py-2 px-6 text-black mt-32 w-4/5 h-14 text-xl">
            Purchase Terminal
          </button>
        </Link>
        <div className="mt-4 text-orange text-lg">APY: 35% - 40%</div>
      </div>
    </div>
  );
};

export default Home;
