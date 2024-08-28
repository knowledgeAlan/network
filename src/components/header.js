// import {
//   Connection,
//   PublicKey,
//   Transaction,
//   SystemProgram,
// } from "@solana/web3.js";
import React, { useEffect, useState, portal } from "react";
import { Link, useLocation } from "react-router-dom";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
  // useWallet,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ReactComponent as LogoS } from "../assets/img/logoS.svg";

import "@solana/wallet-adapter-react-ui/styles.css";

function clusterApiUrl(network) {
  return `https://api.${network}.solana.com`;
}

const Header = () => {
  const location = useLocation();
  const [value, setValue] = useState();
  const [showMenu, setShowMenu] = useState();

  useEffect(() => {
    setValue(location.pathname === "/");
  }, [location]);

  return (
    <div className="absolute left-0 top-0 w-full z-40">
      <ConnectionProvider endpoint={clusterApiUrl(WalletAdapterNetwork.Devnet)}>
        <WalletProvider wallets={[new PhantomWalletAdapter()]} autoConnect>
          <WalletModalProvider>
            <div className="flex items-center justify-between px-4 py-6">
              <div className="flex items-center">
                <Link to="/">
                  {value ? <Logo className="h-8" /> : <LogoS className="h-8" />}
                </Link>
                {!value && (
                  <button
                    className="flex items-center ml-3 relative"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <img
                      className="w-6"
                      src={require("../assets/img/menu.png")}
                      alt=""
                    />
                    <img
                      className="w-2 ml-1"
                      src={require("../assets/img/arrow.png")}
                      alt=""
                    />
                  </button>
                )}
              </div>
              <div>
                {showMenu && (
                  <div
                    className="w-full h-full fixed top-0 left-0 z-50"
                    onClick={() => setShowMenu(false)}
                  >
                    <div className="menu text-left absolute top-16 left-5 border border-solid border-orangeOpacity p-4 rounded-2xl bg-black">
                      <Link to="/dashboard" className="flex items-center py-1">
                        Dashboard
                      </Link>
                      <Link to="/stake" className="flex items-center py-1">
                        Staking
                      </Link>
                      <Link to="/swap" className="flex items-center py-1">
                        Swap
                      </Link>
                      <Link to="/" className="flex items-center py-1">
                        Verify TXN
                      </Link>
                      <Link to="/purchase" className="flex items-center py-1">
                        Purchase
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center">
                <div className="mr-2 bg-orangeOpacity p-1.5 rounded-xl">
                  <img
                    className="w-5"
                    src={require("../assets/img/lan.png")}
                    alt=""
                  />
                </div>
                <WalletMultiButton className="bg-white" />
              </div>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
};
export default Header;
