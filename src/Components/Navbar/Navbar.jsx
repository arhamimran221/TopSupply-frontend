import React, { useState,useEffect } from "react";
import logo from "../../assets/logo.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import livechat from "../../assets/Live-ChatIcon.svg";
import consult from "../../assets/Consult-icon.svg";
import { ShoppingCartOutlined } from "@ant-design/icons";
import userIcon from "../../assets/userIcon.svg";
import helpIcon from "../../assets/helpIconMobile.png";
import SaveIcon from "../../assets/SaveIcon.svg";
import NextIcon from "../../assets/NextIcon.svg";
import {Modal} from "antd"

const Navbar = ({ setSlide, slide,setPricingActive, pricingActive,setPriceView,priceView }) => {
  const [LogModalVisible, setLogModalVisible] = useState(false);
  const [login, setLogin]= useState(false);

  const location = useLocation();

  const activeStyles =
    " lg:gap-[10px] gap-[8px] text-[#27a6ff] font-poppins uppercase lg:text-[13px] text-[10px] cursor-pointer navlink";
  const nonActivestyles =
    " lg:gap-[10px] gap-[8px] font-poppins text-[#4e5053] uppercase lg:text-[13px] text-[10px] cursor-pointer navlink";
  
    const handlePriceRender= ()=>{
      if (pricingActive){
        setPriceView(true)
      }
      else
      setPriceView(false)
    }

const navigate = useNavigate();
  
const handleSubmit = (e) => {
  e.preventDefault();
  const emailValue = e.target.elements.email.value;
  if(emailValue){
    localStorage.setItem("email",emailValue);
    setLogModalVisible(false)
    setLogin(true);

  }
}

useEffect(()=>{
  if(localStorage.getItem("email")){
    setLogin(true);
  }
},[login])

 const handleNavigation = ()=>{
  navigate("/my-account")
 }


  return (
    <div className="rush-container relative z-[999] bg-[#fff]">
      <div className="w-[100%]  justify-between  items-center absolute lg:flex hidden fixed">
        <div
          className="w-[8%] flex items-center justify-center bg-[#fff] py-6 cursor-pointer"
          style={{ boxShadow: "3px 0 12px 0 rgba(0, 0, 0, .1)" }}
          onClick={()=> navigate("/")}
        >
          <img src={logo} alt="" width={52} height={52} className="" />
        </div>

        <div
          className="w-[92%] flex py-4 items-center justify-end bg-[#fbfbfb]"
          style={{ boxShadow: "0 2px 8px 0 rgba(204,207,214,.5)" }}
        >
        {(location.pathname === "/design")?
          <div className="w-[50%] flex gap-[20px]  mt-[15px] px-4">
            <div
              className={slide ? nonActivestyles : activeStyles}
              onClick={() => setSlide(false)}
            >
              <span
                className={
                  slide
                    ? "bg-[#b4b8c1] px-[10px] py-[2px] rounded-full text-[#fff] text-[14px] mr-[10px] "
                    : "bg-[#27a6ff] px-[10px] py-[2px] rounded-full text-[#fff] text-[14px] mr-[10px]"
                }
              >
                1
              </span>{" "}
              Design
              {slide ? (
                ""
              ) : (
                <div
                  className="w-[100%] h-[2px] border-[2px] border-[#27a6ff] mt-[20px]"
                  style={{ boxShadow: "0 0 12px 1px #27a6ff" }}
                ></div>
              )}
            </div>
            <div
              className={(slide && priceView === false) ? activeStyles : nonActivestyles}
              onClick={() => setSlide(true)}
            >
              <span
                className={
                  (slide && priceView === false)
                    ? "bg-[#27a6ff] px-[8px] mr-[10px] py-[2px] rounded-full text-[#fff] text-[14px]"
                    : "bg-[#b4b8c1] px-[8px] py-[2px] rounded-full text-[#fff] text-[14px] mr-[10px]"
                }
              >
                2
              </span>{" "}
              Quantity & Sizes
              {(slide && priceView === false) ? (
                <div
                  className="w-[100%] h-[2px] border-[2px] border-[#27a6ff] mt-[20px]"
                  style={{ boxShadow: "0 0 12px 1px #27a6ff" }}
                ></div>
              ) : (
                ""
              )}
            </div>
            <div className={`gap-[10px] font-poppins  uppercase text-[13px] ${pricingActive ? `cursor-pointer ${priceView ? "text-[#27a6ff]" :"text-[#4e5053]"}` : "cursor-not-allowed text-[#9e9fa1]"}`} onClick={()=>handlePriceRender()}>
              <span
               className={
                pricingActive
                  ? priceView ? "bg-[#27a6ff] px-[8px] mr-[10px] py-[2px] rounded-full text-[#fff] text-[14px]": "bg-[#b4b8c1] px-[8px] mr-[10px] py-[2px] rounded-full text-[#fff] text-[14px]"
                  : "bg-[#d7d9de] px-[8px] py-[2px] rounded-full text-[#fff] text-[14px] mr-[10px]"
              }
              >
                3
              </span>{" "}
              Review Price
              {priceView ? (
                <div
                  className="w-[100%] h-[2px] border-[2px] border-[#27a6ff] mt-[20px]"
                  style={{ boxShadow: "0 0 12px 1px #27a6ff" }}
                ></div>
              ) : (
                ""
              )}
            </div>
          </div>:""}
          <div className="w-[50%] flex gap-[20px] justify-end px-4 py-3">
            <div className="flex gap-[10px] items-center">
              <img src={livechat} className="w-[30px]" />
              <div>
                <p className="font-poppins text-[16px] font-[500] text-[#27a6ff] cursor-pointer">
                  Email
                </p>
                <a href="mailTo:Ontopsupplyllc@yahoo.com" className="font-poppins text-[12px] font-[400] text-[#424447] flex gap-[5px]">
                Ontopsupplyllc@yahoo.com
                </a>
              </div>
            </div>
            <div className="flex gap-[10px] items-center">
              <img src={consult} className="w-[30px]" />
              <div>
                <p className="font-poppins text-[16px] font-[500] text-[#27a6ff] cursor-pointer">
                Contact Us
                </p>
                <a href="tel:7125350727" className="font-poppins text-[12px] font-[400] text-[#424447] flex gap-[5px]">
                712-535-0727
                </a>
              </div>
            </div>
            {(location.pathname === "/design"|| location.pathname === "/terms-conditions")?
              <>
            <div className="font-poppins text-[14px] flex items-center gap-[10px] cursor-pointer" onClick={() => setSlide(true)}>
              <ShoppingCartOutlined className="text-[24px]" /> Cart
            </div>
            {login? 
            <div className="font-poppins flex gap-[10px] items-center text-[14px] cursor-pointer" onClick={handleNavigation}>
              <img src={userIcon} alt="" width={24} />Account
            </div>
            : 
            <div className="font-poppins flex gap-[10px] items-center text-[14px] cursor-pointer" onClick={()=> setLogModalVisible(true)}>
              <img src={userIcon} alt="" width={24} /> Login
            </div>}
            </> : ""}
          </div>
        </div> 
      </div>
      <div className="lg:hidden block">
        <div className="flex justify-between items-center w-[100%] "
        style={{ boxShadow: "3px 0 12px 0 rgba(0, 0, 0, .1)" }}
        >
          <div
            className="w-[20%] flex items-center justify-center bg-[#fff] "
          >
            <img src={logo} alt="" width={48} height={48} className="" />
          </div>
          <div
            className="flex gap-[20px] w-[80%] justify-end items-center"
          >
            <div className="flex flex-col items-center text-[#424447] font-poppins text-[12px] font-[400] gap-[5px]">
              <img src={helpIcon} alt="" srcSet="" width={28} height={28} />
              Call or Chat
            </div>
            <div className="flex flex-col items-center text-[#424447] font-poppins text-[12px] font-[400] gap-[5px]">
              <img src={SaveIcon} alt="" srcSet="" width={28} height={28} />
              Save
            </div>
            <div className="flex flex-col items-center bg-[#27a6ff] px-6 py-2 text-[#ffff] font-poppins text-[12px] font-[400]">
              <img src={NextIcon} alt="" srcSet="" width={20} height={20} />
              Next
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <div className="w-[100%] flex justify-between mt-[15px] px-4">
            <div
              className={slide ? nonActivestyles : activeStyles}
              onClick={() => setSlide(false)}
            >
              <span
                className={
                  slide
                    ? "bg-[#b4b8c1] px-[8px] py-[2px] rounded-full text-[#fff] text-[12px] mr-[5px] "
                    : "bg-[#27a6ff] px-[8px] py-[2px] rounded-full text-[#fff] text-[12px] mr-[5px]"
                }
              >
                1
              </span>{" "}
              Design
              {slide ? (
                ""
              ) : (
                <div
                  className="w-[100%] h-[2px] border-[2px] border-[#27a6ff] mt-[20px]"
                  style={{ boxShadow: "0 0 12px 1px #27a6ff" }}
                ></div>
              )}
            </div>
            <div
              className={slide ? activeStyles : nonActivestyles}
              onClick={() => setSlide(true)}
            >
              <span
                className={
                  slide
                    ? "bg-[#27a6ff] px-[6px]  py-[2px] rounded-full text-[#fff] text-[12px] mr-[5px]"
                    : "bg-[#b4b8c1] px-[6px] py-[2px] rounded-full text-[#fff] text-[12px] mr-[5px]"
                }
              >
                2
              </span>{" "}
              Quantity & Sizes
              {slide ? (
                <div
                  className="w-[100%] h-[2px] border-[2px] border-[#27a6ff] mt-[20px]"
                  style={{ boxShadow: "0 0 12px 1px #27a6ff" }}
                ></div>
              ) : (
                ""
              )}
            </div>
            <div className={`gap-[10px] font-poppins  uppercase text-[10px] ${pricingActive ? `cursor-pointer ${priceView ? "text-[#27a6ff]" :"text-[#4e5053]"}` : "cursor-not-allowed text-[#9e9fa1]"}`} onClick={()=>handlePriceRender()}>
              <span
               className={
                pricingActive
                  ? priceView ? "bg-[#27a6ff] px-[8px] mr-[10px] py-[2px] rounded-full text-[#fff] text-[14px]": "bg-[#b4b8c1] px-[8px] mr-[10px] py-[2px] rounded-full text-[#fff] text-[14px]"
                  : "bg-[#d7d9de] px-[8px] py-[2px] rounded-full text-[#fff] text-[14px] mr-[10px]"
              }
              >
                3
              </span>{" "}
              Review Price
              {priceView ? (
                <div
                  className="w-[100%] h-[2px] border-[2px] border-[#27a6ff] mt-[20px]"
                  style={{ boxShadow: "0 0 12px 1px #27a6ff" }}
                ></div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="LOGIN"
        open={LogModalVisible}
        footer={null}
        width={600}
        onCancel={()=>setLogModalVisible(false)}
      >
        <div className="px-6 pb-[30px]">
         <h2 className="font-poppins text-[22px] font-[700] text-center text-[#424447]">Login</h2>
         <p className="text-center mb-3">Retrieve your saved designs and previous orders</p>
          <form action="" className="w-[50%] mx-auto mt-[20px]" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[8px]">
        <label htmlFor="email" className="font-[700] text-[16px] font-poppins text-[#424447]">Email Address</label>
        <input type="email" name="email" placeholder="Enter Email Address" className="border-[1px] border-[#ccc] font-poppins text-[14px] text-[#555] rounded-[4px] py-[6px] px-[12px] focus:outline-0 focus:border-[1px] focus:border-[#66afe9] input-shadow" required/>
    </div>

            <button type="submit" className="bg-[#27a6ff] text-[#fff] font-poppins mt-[20px] w-[100%] py-2 text-[16px] rounded-full">Login With Email</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
