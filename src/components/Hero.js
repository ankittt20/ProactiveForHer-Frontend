import React, { useState } from "react";
import Contact from "./Contact";
import Typewriter from 'typewriter-effect';


function Hero() {
  const [showContact, setShowContact] = useState(false);

  const handleGetStarted = () => {
    setShowContact(true);
  };

  const handleContactClose = () => {
    setShowContact(false);
  };
  
  return (
    <>
      <div
        id="home"
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
      >
        <div className="absolute w-full h-full bg-gradient-to-b from-[#FDF4F5] via-[#FDF4F5] to-transparent opacity-50" />
        <div className="absolute w-full h-full bg-gradient-to-b from-[#FDF4F5] via-[#BA90C6] to-transparent opacity-75 animate-pulse-slow" />
        <div className="absolute w-full h-full bg-gradient-to-b from-[#FDF4F5] via-[#BA90C6] to-transparent opacity-75 animate-pulse-fast" />
      </div>
      <section className="relative bg-transparent px-10 pt-52 md:pt-32 py-32 md:py-32 h-screen flex justify-center items-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipM8QA0cfEeuhjlSrtSo_9c5YA0s9gz3WDEsh96U=s1360-w1360-h1020"
              alt="Hero"
              className="w-[90%] rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Your Health Matters.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Let's Take Care Of It.")
                    .start();
                }}
              />
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Proactive For Her is a healthcare provider dedicated to women's
              health. Our team of experienced healthcare professionals provide a
              range of services to support your health and wellbeing.
            </p>
            <a
              href="#"
              onClick={handleGetStarted}
              className="bg-[#89375F] text-white hover:text-gray-800 font-bold py-3 px-6 rounded hover:bg-[#E8A0BF] transition duration-200 inline-flex items-center shadow-sm hover:shadow-md"
            >
              <span>Get Started</span>
              <div className="ml-2 transform rotate-0 transition-transform duration-300 hover:rotate-180">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.75 12H5.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18.75L5.25 12L12 5.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>

            {showContact && (
              <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 w-full">
                <svg
                  onClick={handleContactClose}
                  className="w-4 h-4 absolute top-0 right-4 lg:right-[26rem] m-4 cursor-pointer"
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
                <Contact />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
