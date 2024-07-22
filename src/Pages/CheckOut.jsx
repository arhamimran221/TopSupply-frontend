import React from 'react'
// import notesIcon from "../assets/svg/notesIcon.svg"
import { FaNotesMedical } from 'react-icons/fa'
import { ArrowRightOutlined } from '@ant-design/icons'
import secure from "../assets/secureCheckout.png"
import nortan from "../assets/norton.png"
import { useLocation, useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Get the navigate function

  const designName = location?.state?.designName;

  const handleAddAnotherProduct = () => {
    navigate('/design');
  };
  
  return (
    <div className='container bg-[#f0f2f5] h-[100%]'>
      <h2 className='text-[40px] font-poppins text-[#22252c] font-[500] text-center pt-[140px]'>Shopping Cart</h2>
      <div className="flex gap-[30px] w-[80%] mx-auto mt-[30px]">
        <div className=" w-[70%] ">
            <div className="bg-[#fff] border-[1px] border-[#e5e7ea] rounded-[5px] py-3 px-4">
            <div className="flex justify-between py-2 items-center border-b-[1px] border-b-[#e5e7ea]">
                <div className="flex gap-[10px] items-center">
                <h2 className='text-[#22252c] font-poppins text-[24px] font-[500]'>{designName}</h2>
                <button className='font-poppins text-[#27a6ff] hover:underline text-[15px]'>Edit Design</button>
                </div>
                <div className="">
                  <button className='font-poppins text-[#27a6ff] hover:underline text-[15px]'>Remove Design</button>
                </div>
            </div>
            <div className="flex w-[100%] mt-[10px] border-b-[1px] border-b-[#e5e7ea] pb-[20px]">
            <div className="w-[20%]">
                <img src="" alt="" />
            </div>
            <div className="w-[80%]">
                <div className="flex items-center justify-between">
                    <h2 className='font-poppins text-[#22252c] text-[16px] font-[600]'>RushOrderTees Classic Tee</h2>
                    <p className='font-poppins text-[#22252c] text-[16px] font-[600]'>131.15</p>
                </div>
                <p className='font-poppins text-[#22252c] text-[14px] font-[400] mt-[8px]'>White</p>
                <p className='font-poppins text-[#22252c] text-[14px] font-[400] mt-[8px]'>5 items at 26.23 each</p>
                <button className="bg-[#f0f2f5] p-2 rounded-lg font-poppins text-[#22252c] text-[14px] font-[400] my-[20px]">S-5</button>
                <div className="flex gap-[10px] items-center">
                    <button className='font-poppins text-[#27a6ff] hover:underline text-[15px]'>Edit size</button>
                </div>
            </div>
            </div>
            <div className="flex gap-[10px] mt-[10px]">
                <p className='font-poppins text-[#27a6ff] hover:underline text-[35px] font-[700]'>+</p>
                <button onClick={handleAddAnotherProduct} className='font-poppins  text-[#27a6ff] hover:underline text-[16px] font-[600]'>Add another product</button>
            </div>
            </div>
           <div>
           </div>
        </div>
        <div className="w-[30%]">
            <div className="bg-[#fff] border-[1px] border-[#e5e7ea] rounded-[5px] py-3 px-4">
            <h2 className='text-[#22252c] font-poppins text-[22px] font-[500]'>Delivery Options</h2>
            <div className="flex  gap-[10px] my-[10px] border-[1px] border-[#27a6ff] rounded-[10px] p-4">
                <input type="radio" name="" id="" className="w-[20px] cursor-pointer "/>
                <div className="">
                    <h2 className='text-[#22252c] font-poppins text-[14px] font-[600]'>June 17, Mon</h2>
                    <p className='text-[#999b9e] text-[13px]'>Garrented 1 Business Days</p>
                </div>
            </div>
            <div className='flex justify-center my-[20px]'>
            <button className='font-poppins text-[#27a6ff] hover:underline text-[15px]'>Show More Delivery Options
            </button>
            </div>
            </div>
            <div className="bg-[#fff] border-[1px] border-[#e5e7ea] rounded-[5px] py-3 px-4 mt-[20px]">
            <h2 className='text-[#22252c] font-poppins text-[22px] font-[500]'>Order Summary</h2>
            <div className=" my-[10px] border-t-[1px] border-t-[#e5e7ea] border-b-[1px] border-b-[#e5e7ea] py-4">
              <div className="flex justify-between">
                <p className='font-poppins text-[#22252c] text-[14px] font-[400] mt-[8px]'>Subtotal (5 items)</p>
                <p className='font-poppins text-[#22252c] text-[14px] font-[400] mt-[8px]'>131.15</p>
              </div>
              <div className="flex justify-between">
                <p className='font-poppins text-[#22252c] text-[14px] font-[400] mt-[8px]'>Rush Delivery by June 17, Mon</p>
                <p className='font-poppins text-[#22252c] text-[14px] font-[400] mt-[8px]'>55.08</p>
              </div>
              <div className="flex justify-between">
                <p className='font-poppins text-[#22252c] text-[14px] font-[400] mt-[8px]'>Tax (To be Calculated)</p>
                <p className='font-poppins text-[#22252c] text-[14px] font-[400] mt-[8px]'>---</p>
              </div>
            </div>
            <div className='flex justify-between mt-[10px]'>
                <div className='font-poppins text-[#22252c] text-[18px] font-[600] mt-[8px]'>Total</div>
                <div className='font-poppins text-[#22252c] text-[18px] font-[600] mt-[8px]'>186.23</div>
            </div>
              <p className='font-poppins text-[#22252c] text-[12px] font-[400] mt-[7px]'>
                4 interest-free payments of $47 with Affirm. <span className='text-[#27a6ff] hover:underline'>Check your purchasing power Voucher or Promo</span>
                </p>
            </div>
            <div className="mt-[20px]">
                <button className='bg-[#27a6ff] text-[#fff] text-[22px] py-2 rounded-full w-[100%]'>CHECKOUT <ArrowRightOutlined/></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
