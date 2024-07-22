import React, { useState,useEffect } from "react";
import {
  FaUserCircle,
  FaShoppingCart,
  FaPhone,
  FaPaintBrush,
  FaPlus,
  FaInstagram,
  FaFacebook,
  FaSnapchat,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import CheckOut from "../Pages/CheckOut"; 
import {Modal} from "antd"

// Generic Button Component
const Button = ({ icon, title, onClick }) => (
  <div className="relative">
    <button
      className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded inline-flex items-center"
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{title}</span>
    </button>
  </div>
);

// ContactSection Component with icon
const ContactSection = () => (
  <div className="hidden lg:flex items-center space-x-4">
    <a
      href="tel:7125350727"
      className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <FaPhone className="mr-2" /> 712-535-0727
    </a>
  </div>
);

// TopBar Component
const TopBar = () => {
  const navigate = useNavigate();
  const [LogModalVisible, setLogModalVisible] = useState(false);
  const [login, setLogin]= useState(false);

  const handleNavigateToCheckout = () => {
    navigate("/checkout");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = e.target.elements.email.value;
    if(emailValue){
      localStorage.setItem("email",emailValue);
      setLogModalVisible(false)
      setLogin(true);
      navigate("/my-account")

    }
  }

useEffect(()=>{
  if(localStorage.getItem("email")){
    setLogin(true);
  }
},[login])

const handleClick = ()=>{
  if(login){
    navigate("/my-account")
  }
  else{
    setLogModalVisible(true)
  }
}
  return (
    <div className="bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3 items-center">
          <div className="text-start sm:hidden hidden lg:block md:block text-sm font-medium text-gray-600">
            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/topsupplycustoms?igsh=MXJ4OWZqNnY4Y2h2&utm_source=qr"
                target="_blank"
                className="text-[24px] hover:text-gray-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/people/Top-Supply-Customs/61555800524209/"
                target="_blank"
                className="text-[24px] hover:text-gray-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.tiktok.com/@topsupplycustoms?_t=8jvx5hezzlo&_r=1"
                target="_blank"
                className="text-[24px] hover:text-gray-500"
              >
                <AiFillTikTok />
              </a>
              <a
                href="https://t.snapchat.com/5DMrWmVV"
                target="_blank"
                className="text-[24px] hover:text-gray-500"
              >
                <FaSnapchat />
              </a>
              <ContactSection />
            </div>
          </div>
          <div className="hidden lg:block"></div>
          <div className="flex justify-end space-x-4">
            <Button icon={<FaUserCircle />} title="My Account" onClick={handleClick}/>
            <Button
              icon={<FaShoppingCart />}
              title="Cart"
              onClick={handleNavigateToCheckout}
            />
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

// LogoSection Component
const LogoSection = () => (
  <div className="flex items-center gap-2 justify-center h-full">
    <a href="#" className="flex items-center justify-center">
      <img src={logo} alt="Logo" className="h-10 w-auto" />
    </a>
    <h3 className="text-2xl text-gray-600 font-bold">T-Shirts</h3>
  </div>
);

// ActionButtons Component
const ActionButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="lg:flex hidden items-center space-x-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        onClick={() => navigate("/design")}
      >
        <FaPaintBrush className="mr-2" /> DESIGN NOW
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        onClick={() => navigate("/design")}
      >
        <FaPlus className="mr-2" /> ADD NEW
      </button>
    </div>
  );
};

// Header Component
const Header = () => (
  <>
    <TopBar />
    <div className="bg-white shadow-md flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
      <LogoSection />
      <ActionButtons />
      
    </div>
  </>
);

export default Header;
