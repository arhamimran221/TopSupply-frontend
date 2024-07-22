import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

const Account = () => {
     const [tab, setTab] = useState("myDesign")
     const navigate = useNavigate()
     const handleLogOut = ()=>{
        localStorage.removeItem("email");
        navigate("/")
     }
  return (
    <div className="rush-container bg-[#f1f5f9] h-[100vh]">
      <div className="pt-[40px] flex w-[95%] gap-[40px] mx-auto items-start">
        <div className="border-[1px] border-[rgb(226 232 240)] bg-[#fff]  w-[30%] rounded-[5px] sticky">
          <h2 className="font-[500] font-poppins text-[1.25rem] px-4 py-3">
            My Account
          </h2>
          <div className="border-[1px] border-[rgb(226 232 240)]"></div>
          <ul className="mt-[20px]">
            <li className={tab=== "myDesign" ? "font-[300] mb-1 border-l-[5px] border-l-[#28a6ff] text-[#28a6ff] px-4 py-3 font-poppins text-[16px] cursor-pointer" : "font-[300] mb-1 px-6 py-3 text-[#07172a] cursor-pointer hover:text-[#28a6ff]"} onClick={() => setTab("myDesign")}>My Designs</li>
            <li className={tab=== "myrecodes" ? "font-[300] mb-1 border-l-[5px] border-l-[#28a6ff] text-[#28a6ff] px-4 py-3 font-poppins text-[16px] cursor-pointer" : "font-[300] mb-1 px-6 py-3 text-[#07172a] cursor-pointer hover:text-[#28a6ff]"} onClick={() => setTab("myrecodes")}>
              My Orders / Reorder
            </li>
            <li className="font-[300] mb-1 text-[#07172a] px-6 py-3 hover:text-[#28a6ff] cursor-pointer" onClick={()=> handleLogOut()}>Log Out</li>
          </ul>
          <div className="border-[1px] border-[rgb(226 232 240)]"></div>
          <h2 className="font-[500] font-poppins text-[1.10rem] px-4 py-3">
            Get Help
          </h2>
          <p className="px-4 py-3 font-poppins text-[#07172a]">
            All of your designs are saved here for easy access. If you have any
            questions or need help with an order, please get in touch with us!
          </p>
          <div className="mb-2 p-4">
            <a href="tel:8006201233" className="mb-3 flex text-[#28a6ff]">
              <svg
                className="mr-2 text-[#28a6ff]"
                width="24px"
                height="24px"
                style={{ fill: "#28a6ff" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M8.4,19.6C10,21.1,12,22,14.2,22c2.6,0,5-1.2,6.5-3.2l0.3-0.4c0.2-0.3,0.2-0.7,0-1c-1.2-1.8-3-3.1-5.1-3.6l-0.4-0.1 c-0.3-0.1-0.6,0-0.8,0.2L13.6,15c-0.4,0.4-1.2,0.4-1.6,0L9,12c-0.4-0.4-0.4-1.2,0-1.6l1.1-1.1c0.2-0.2,0.3-0.5,0.2-0.8L10.2,8 C9.7,6,8.4,4.2,6.6,3C6.3,2.8,6,2.8,5.7,3L5.3,3.3C3.2,4.9,2,7.3,2,9.8C2,12,2.9,14,4.4,15.6L8.4,19.6z M6.2,4.7 c1.2,0.9,2,2.2,2.4,3.7L7.8,9.2c-1.1,1.1-1.1,2.9,0,3.9c0,0,0,0,0,0l3.1,3c1.1,1.1,2.9,1.1,3.9,0c0,0,0,0,0,0l0.8-0.8 c1.5,0.4,2.8,1.2,3.7,2.4c-1.2,1.6-3.1,2.5-5.1,2.5c-1.7,0-3.4-0.7-4.6-1.9l-4.1-4.1c-1.2-1.2-1.9-2.8-1.9-4.6 C3.7,7.8,4.6,5.9,6.2,4.7z" />
                  <path d="M19.2,4.8c-0.3-0.3-0.9-0.3-1.2,0c0,0,0,0,0,0l-2.5,2.5c-0.3,0.3-0.3,0.9,0,1.2c0.3,0.3,0.9,0.3,1.2,0l0,0l2.5-2.5 C19.6,5.6,19.6,5.1,19.2,4.8C19.2,4.8,19.2,4.8,19.2,4.8z" />
                  <path d="M12,2.8v3.3C12,6.6,12.4,7,12.8,7s0.8-0.4,0.8-0.8V2.8c0-0.5-0.4-0.8-0.8-0.8S12,2.4,12,2.8z" />
                  <path d="M17.8,12h3.3c0.5,0,0.8-0.4,0.8-0.8s-0.4-0.8-0.8-0.8h-3.3c-0.5,0-0.8,0.4-0.8,0.8S17.4,12,17.8,12z" />
                </g>
              </svg>
              Call (800) 620-1233
            </a>
            <a href="#" className="mb-3 flex text-[#28a6ff]">
              <svg
                className="mr-2 text-[#28a6ff]"
                width="24px"
                style={{ fill: "#28a6ff" }}
                height="24px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M6.2,17H7v4.2C7,21.6,7.4,22,7.8,22c0.2,0,0.5-0.1,0.6-0.3l3.9-4.7h5.4c1.8,0,3.3-1.5,3.3-3.3V5.3c0-1.8-1.5-3.3-3.3-3.3 H6.2C4.3,2,2.8,3.5,2.8,5.3v8.3C2.8,15.5,4.3,17,6.2,17z M4.5,5.3c0-0.9,0.7-1.7,1.7-1.7h11.7c0.9,0,1.7,0.7,1.7,1.7v8.3 c0,0.9-0.7,1.7-1.7,1.7H12c-0.2,0-0.5,0.1-0.6,0.3l-2.7,3.2v-2.7c0-0.5-0.4-0.8-0.8-0.8H6.2c-0.9,0-1.7-0.7-1.7-1.7V5.3z" />
                  <circle cx={12} cy="9.5" r="0.8" />
                  <circle cx="8.7" cy="9.5" r="0.8" />
                  <circle cx="15.3" cy="9.5" r="0.8" />
                </g>
              </svg>
              Chat with an Expert
            </a>
            <a
              href="mailto:sales@rushordertees.com"
              className="flex text-[#28a6ff]"
            >
              <svg
                className="mr-2 text-[#28a6ff]"
                style={{ fill: "#28a6ff" }}
                width="24px"
                height="24px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.4,22h13.3c1.4,0,2.5-1.1,2.5-2.5v-10c0-0.2-0.1-0.5-0.3-0.7l-8.3-6.7c-0.3-0.2-0.7-0.2-1,0L3.2,8.8 C2.9,9,2.8,9.3,2.8,9.5v10C2.9,20.9,4,22,5.4,22z M8.9,14.8l-4.4,4.4v-7.9L8.9,14.8z M19.5,19.2l-4.4-4.4l4.4-3.5 C19.5,11.3,19.5,19.2,19.5,19.2z M13.8,15.8l4.5,4.5H5.7l4.5-4.5l1.2,1c0.2,0.1,0.3,0.2,0.5,0.2s0.4,0,0.5-0.2L13.8,15.8z M12,3.9 l7,5.6l-7,5.6L5,9.5L12,3.9z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
        <div className="w-[70%] ">
          {tab=== "myDesign" ?<div className="relative flex flex-col min-w-0 break-words p-5 bg-white border border-slate-200 rounded mb-6 transition ease-in-out hover:shadow-lg w-[50%]">
            <p className="text-xl font-semibold">Arham</p>
            <p className="text-sm text-gray-400 mb-3">14 June 2024</p>
            <div className="flex items-center mb-6">
              <img
                alt="Front design image"
                src="https://www.rushordertees.com/design/resources/scripts/ZoomImage.php?ext=jpg&height=500&scale=1&src=9136904_f&watermark=false&width=500&x=270&y=300"
                width={1000}
                height={1000}
                decoding="async"
                data-nimg={1}
                className="max-w-full w-1/2 h-auto"
                loading="lazy"
                style={{ color: "transparent" }}
              />
              <img
                alt="Back design image"
                src="https://www.rushordertees.com/design/resources/scripts/ZoomImage.php?ext=jpg&height=500&scale=1&src=9136904_b&watermark=false&width=500&x=270&y=300"
                width={1000}
                height={1000}
                decoding="async"
                data-nimg={1}
                className="max-w-full w-1/2 h-auto"
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full font-medium uppercase ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 mb-6 whitespace-nowrap text-base bg-[#28a6ff] text-[#fff]"
              href="/my-account/your-design/RGVzaWduOjkxMzY5MDQ=/"
            >
              Ordering Options
            </a>
            <div className="flex justify-between">
              <button className="inline-flex items-center justify-center rounded-full text-sm font-medium uppercase ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-3 border-0 w-full hover:bg-red-500 text-red-500 hover:text-white mr-2">
                Delete
              </button>
              <a
                href="https://www.rushordertees.com/design/?design=9136904"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium uppercase ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-primary text-primary hover:bg-primary hover:text-white h-8 px-3 border-0 w-full ml-2 text-[#28a6ff] hover:bg-[#28a6ff]"
              >
                Edit Design
              </a>
            </div>
          </div> : tab==="myrecodes" ?
          <div className="mt-9 block max-w-full shrink grow-0 basis-full md:mt-0 md:max-w-3/4 md:basis-3/4 md:pl-2"><div className="border border-slate-200 rounded bg-white p-8 text-center"><p className="text-5xl">🤔</p><p className="mb-7 text-xl font-[300] font-poppins mt-[10px]">It doesn't look like you have placed any orders yet...</p><Link className="inline-flex items-center font-poppins bg-[#28a6ff] justify-center rounded-full font-medium uppercase ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 mb-3 whitespace-nowrap text-[#fff]" to="/design">Start Designing</Link></div></div> : ""}
        </div>
      </div>
    </div>
  );
};

export default Account;
