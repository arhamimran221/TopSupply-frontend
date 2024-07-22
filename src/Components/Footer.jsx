import React from "react";
import Logo from "../assets/logo.jpg";
import {
  FaInstagram,
  FaSnapchat,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";
import { TikTokOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-center">
          <div className="mb-6 md:mb-0 flex items-center justify-center">
            <a href="" className="flex items-center">
              <img src={Logo} className="h-8 me-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-[#fff]">
                Top Supply Customs LLC
              </span>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <ul className="text-gray-500 dark:text-gray-400 font-medium flex gap-10 items-center justify-center">
            <li className="mb-4">
              <Link to="/terms-conditions" className="hover:underline">
                Terms &amp; Conditions
              </Link>
            </li>
            <li className="mb-4">
              <a href="tel:712-535-0727" className="hover:underline">712-535-0727</a>
            </li>
            <li className="mb-4">
              <a href="mailto:Ontopsupplyllc@yahoo.com" className="hover:underline">Ontopsupplyllc@yahoo.com</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 capitalize">
            © 2024{" "}
            <a href="" className="hover:underline">
            Top Supply Customs LLC
            </a>
            . All Rights Reserved And Develop BY <a href="www.fronxssolution.com">fronxs solution</a>.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/profile.php?id=61555800524209"
              target="_blank"
              className="text-gray-500 hover:text-[#fff] dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://t.snapchat.com/5DMrWmVV"
              target="_blank"
              className="text-gray-500 hover:text-[#fff] dark:hover:text-white ms-5"
            >
              <FaSnapchatGhost />
              <span className="sr-only">Snapchat community</span>
            </a>
            <a
              href="https://www.instagram.com/topsupplycustoms?igsh=MXJ4OWZqNnY4Y2h2&utm_source=qr"
              target="_blank"
              className="text-gray-500 hover:text-[#fff] dark:hover:text-white ms-5"
            >
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="https://www.tiktok.com/@topsupplycustoms?_t=8jvx5hezzlo&_r=1"
              target="_blank"
              className="text-gray-500 hover:text-[#fff] dark:hover:text-white ms-5"
            >
              <FaTiktok />
              <span className="sr-only">Tiktok account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
