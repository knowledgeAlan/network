import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Swap from "./pages/swap";
import Stake from "./pages/stake";
import Purchase from "./pages/purchase";
import PurchaseSuccess from "./pages/purchase/success";
import Success from "./pages/success";
import Search from "./pages/search";

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/swap" element={<Swap />}></Route>
          <Route path="/stake" element={<Stake />}></Route>
          <Route path="/purchase" element={<Purchase />}></Route>
          <Route path="/purchaseSuccess" element={<PurchaseSuccess />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/search" element={<Search />}></Route>

          <Route path="*" element={<div>404</div>}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
