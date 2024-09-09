import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import service from "../../request";
import { throttle } from "../../utils";

const Stake = () => {
  const [value, setValue] = useState("1281279357536829440");

  useEffect(()=>{
    getOrderId()
  },[])

  const getOrderId = (orderID) => {
    service({
      method: "get",
      url: "/zcloak-rest/zcloak/queryOrderId",
      params: {
        orderID: orderID,
      },
    });
  };

  return (
    <div className="search">
      <div className="content">
        <div className="searchBg2 w-full h-60"></div>
        <div className="pt-10">
          <div className="mx-10 bg-swapBg rounded-full Regular py-3">
            <div className="flex items-center justify-between px-4">
              <button className="flex items-center justify-center">
                <img
                  className="w-6"
                  src={require("../../assets/img/search.png")}
                  alt=""
                />
              </button>
              <input
                className="outline-none bg-transparent my-2 text-xl w-10/12"
                type="text"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  getOrderId(e.target.value);
                }}
                placeholder="Search your Order ID"
              />
            </div>
          </div>
          <div className="w-1/2 m-auto text-disable mt-4 Regular text-xs">
            You still have five search attempts available today.
          </div>
          <div className="mt-6 mx-10">
            <p className="py-2 border-b border-solid border-disable">
              UID: XXXXXXXXXX
            </p>
            <p className="py-2 border-b border-solid border-disable">
              Created: XXXXXXXXXX
            </p>
            <p className="py-2 border-b border-solid border-disable">
              Roothash: XXXXXXXXXX
            </p>
            <p className="py-2 border-b border-solid border-disable">
              Attester: XXXXXXXXXX
            </p>
            <p className="py-2">Transaction ID: XXXXXXXXXX</p>
          </div>

          <div className="w-full absolute bottom-4">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
