import React from "react";
import { ReactTyped } from "react-typed";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaPython,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";
import dp from "/DB-2.png";

function Home() {
  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="left-container md:w-1/2 mt-12 md:mt-24 order-2 md:order-1">
          <div className="space-x-1 text-2xl md:text-4xl text-gray-400">
            <h1 className="font-bold">Hello, I'm </h1>
            <ReactTyped
              className="text-red-700 font-bold"
              strings={[
                "an Applied Economist",
                " a Statistician",
                "a Researcher",
              ]}
              typeSpeed={50}
              loop={true}
            />
          </div>
          <div>
            <p className="mt-8 text-gray-500 text-sm md:text-[16px] text-justify">
            with extensive expertise in developing tools for data-driven decision-making essential for evidence-based policy formulation. As the head of the Department of Behavioral and Primary Health Analytics at the Northeast Delta Human Services Authority (NEDHSA) within the Louisiana Department of Health (LDH), I provide administrative oversight to support the agency's clinical, programmatic, and business data analysis and reporting functions.
            </p>
            <br />
          </div>
          <div className="flex flex-col md:flex-row items-center text-center justify-between space-y-6 md:space-y-0">
            {/* Social Media Icons */}
            <div className="space-y-2">
              <h1 className="font-bold">Available on</h1>
              <ul className="flex space-x-5 text-2xl">
                <li className="cursor-pointer ">
                  <a href="https://www.facebook.com/dependra.bhatta" target="_blank">
                  <FaFacebookSquare />
                  </a>
                </li>
                <li className="cursor-pointer ">
                  <a href="https://www.linkedin.com/in/dependra-bhatta/" target="_blank">
                  <FaLinkedin />
                  </a>
                </li>
                <li className="cursor-pointer ">
                  <a href="https://x.com/?lang=en" target="_blank">
                  <FaSquareXTwitter />
                  </a>
                </li>
                <li className="cursor-pointer ">
                  <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagramSquare />
                  </a>
                </li>
              </ul>
            </div>
            {/* Working on */}
            <div className="space-y-2">
              <h1 className="font-bold">Currently working on</h1>
              <ul className="flex space-x-5 text-2xl">
                <li>
                  <FaPython className="hover:scale-110 duration-200" />
                </li>
                <li>
                  <TbBrandMysql className="hover:scale-110 duration-200" />
                </li>
                <li className="text-[18px] font-bold hover:scale-110 duration-200">
                  R
                </li>
                <li className="text-[16px] font-bold hover:scale-110 duration-200">
                  STATA
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="right-container mt-8 md:w-1/2 md:ml-48 md:mt-24 order-1">
          <img
            src={dp}
            className="md:h-80 md:w-80 border-4 h-72 w-72 rounded-full md:rounded-lg shadow-lg"
            alt=""
          />
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Home;
