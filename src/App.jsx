import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DesignPage from './Pages/DesignPage/DesignPage';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Product from './Pages/Product';
import BottomBarMobile from './Components/BottomBarMobile/BottomBarMobile';
import { flushSync } from "react-dom";
import Moveable from "react-moveable";
import CheckOut from './Pages/CheckOut';
import TermsCondition from './Pages/TermsCondition';
import Account from './Pages/Account';

const App = () => {
  const location = useLocation();
  const [slide, setSlide] = useState(false);
  const [pricingActive ,setPricingActive] = useState();
  const [priceView , setPriceView] = useState(false) 
   
 useEffect(()=>{
   if(pricingActive || priceView === true){
    setPricingActive(false)
    setPriceView(false)
   }
 },[slide])


  return (
    <>
    {(location.pathname ==="/" || location.pathname ==="/terms-conditions" || location.pathname ==="/my-account") ?<Header/> : <Navbar setSlide={setSlide} slide={slide} setPricingActive={setPricingActive} pricingActive={pricingActive} setPriceView={setPriceView} priceView={priceView}/>}
      <Moveable flushSync={flushSync} />
      <Routes>
        <Route path="/" exact element={<Product />} />
        <Route path="/my-account" exact element={<Account />} />
        <Route path="/terms-conditions" exact element={<TermsCondition />} />
        <Route path="/checkout" exact element={<CheckOut />} />
        <Route path="/design" exact element={<DesignPage slide={slide} setSlide={setSlide} setPricingActive={setPricingActive} priceView={priceView} setPriceView={setPriceView} pricingActive={pricingActive}/> } />
      </Routes>
      {(location.pathname ==="/" || location.pathname ==="/terms-conditions" || location.pathname ==="/my-account") ?<Footer /> : <BottomBarMobile/>}
    </>
  );
};

export default App;
