import React, { useState } from "react";
import pic from "/DB.jpg";
import { TiThMenu } from "react-icons/ti";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const navItems = [
    {
      id: 1,
      text: "Home",
      url: "/"
    },
    {
      id: 2,
      text: "Research",
      url: "/portfolio/research"
    },

    {
      id: 3,
      text: "Leadership",
      url: "/portfolio/leadership"
    },

    {
      id: 4,
      text: "Media Coverage",
      url: "/portfolio/media-coverage"
    },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 font-semibold mt-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="" />
          <h1 className="hover:scale-105 duration-200">
            Dependra Bhatta
            <p className="text-gray-400">Ph.D.</p>
          </h1>
        </div>
        <div className="font-semibold mr-6">
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={item.id}
              >
                <Link to={item.url}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <TiThMenu size={24} /> : <IoCloseCircle size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {!menu && (
        <div>
          <ul className="md:hidden h-screen flex flex-col items-center justify-center font-bold text-xl space-y-3 bg-white">
            {navItems.map((item) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={item.id}
              >
                <Link
                  onClick={() => setMenu(!menu)}
                  to={item.url}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
