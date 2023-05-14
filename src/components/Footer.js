import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#E8A0BF] px-10 py-8">
      <div className="container mx-auto px-2 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          <div className="w-full mb-4 lg:mb-0">
            <h3 className="text-lg font-bold mb-2 text-gray-700">Contact</h3>
            <p className="text-gray-700">
              No. 610, 12th Main,
              <br />
              HAL 2nd Stage,
              <br />
              Indiranagar, Bengaluru,
              <br />
              Karnataka 560038
              <br />
              +91 9002019002
            </p>
          </div>
          <div className="w-full mb-4 lg:mb-0">
            <h3 className="text-lg font-bold mb-2 text-gray-700">Services</h3>
            <ul className="list-reset">
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  In-Person Clinics
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  Consult Doctors
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  Lab Tests
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  Care Packages
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full mb-4 lg:mb-0">
            <h3 className="text-lg font-bold mb-2 text-gray-700">Terms</h3>
            <ul className="list-reset">
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  Terms of Use
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  Cancellation & Refund Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full mb-4 lg:mb-0">
            <h3 className="text-lg font-bold mb-2 text-gray-700">Resources</h3>
            <ul className="list-reset">
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  Blogs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  Webinars
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700 hover:text-black">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 my-4 lg:mb-0">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <ul className="list-reset flex">
              <li className="mr-4">
                <a href="#" className="text-gray-700 hover:text-black">
                  <FaFacebook className="text-xl" />
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-gray-700 hover:text-black">
                  <FaTwitter className="text-xl" />
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-gray-700 hover:text-black">
                  <FaInstagram className="text-xl" />
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-gray-700 hover:text-black">
                  <FaLinkedin className="text-xl" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  <FaYoutube className="text-xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex justify-center">
          <p className="text-gray-700 text-sm">
            &copy; 2023 Proactive For Her. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
