import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as L } from "react-router-dom";
import Login from "./Login";

function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginOpen = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      {showLogin && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 w-full">
          <svg
            onClick={handleLoginClose}
            className="w-4 h-4 absolute top-[165px] md:top-36 right-12 md:right-[28rem] m-4 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 4 4 L 16 16 M 4 16 L 16 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 4 4 L 16 16 M 4 16 L 16 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Login />
        </div>
      )}
      <nav
        className={`flex flex-wrap justify-between px-7 lg:px-12 py-4 w-full shadow-sm z-10 ${
          isSticky ? "bg-[#E8A0BF] fixed z-10" : "bg-[#E8A0BF] absolute"
        }`}
      >
        <div className="flex">
          {/* <h1 className="text-xl font-bold text-black cursor-pointer">
          PROACTIVE <i className="font-normal ml-2">for her</i>
        </h1> */}
          <img
            className="w-36 cursor-pointer"
            src="https://proactiveforher.com/_next/image/?url=https%3A%2F%2Fpfh-images-production.s3.ap-south-1.amazonaws.com%2Fmain_logo_78f11c7886.png&w=384&q=75"
            alt=""
          />
        </div>
        <div>
          <button
            onClick={handleMenuClick}
            className="inline-flex p-2 rounded-lg ml-auto hover:bg-gray-100 outline-none lg:hidden"
          >
            <svg
              className={`w-6 h-6 -mt-1 -mr-3 ${
                isMenuOpen ? "text-black" : "text-black"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden lg:block"
          } w-full flex items-center lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row list-none mt-5 lg:mt-0 mx-auto lg:ml-auto space-y-3 lg:space-y-0 text-center space-x-0 lg:space-x-5">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-black hover:text-gray-700 px-3 py-2 lg:py-0 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-black hover:text-gray-700 px-3 py-2 lg:py-0 cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li className="nav-item flex">
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-black hover:text-gray-700 px-3 py-2 lg:py-0 cursor-pointer"
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="faqs"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-black hover:text-gray-700 px-3 py-2 lg:py-0 cursor-pointer"
              >
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={handleLoginOpen}
                className="bg-[#89375F] text-white hover:text-gray-800 pb-1 px-4 rounded hover:bg-[#89375F]/60 transition duration-200 inline-flex shadow-sm hover:shadow-md items-center"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
