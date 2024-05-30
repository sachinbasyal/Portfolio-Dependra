import React from "react";
import Python from "/python-logo.png";
import R from "/R-logo.png";
import Stata from "/stata-logo.jpg";
import { Link } from "react-router-dom"

function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: Python,
      name: "Python",
      desc: "Add desc. later..."
    },
    {
      id: 2,
      logo: R,
      name: "R",
      desc: "Add desc. later..."
    },
    {
      id: 3,
      logo: Stata,
      name: "Stata",
      desc: "Add desc. later..."
    },
  ];
  return (
    <div name="Portfolio" className="max-w-screen-2xl container text-gray-600 mx-auto px-4 md:px-20 mt-10">
      <h1 className="font-bold text-3xl mb-4">Portfolio</h1>
      <p className="font-semibold text-cyan-900 text-xl underline">
        Featured Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
        {cardItems.map(({ id, logo, name, desc }) => (
          <div
            className="md:w-[300px] md:h-[300px] border-2 rounded-lg shadow-lg p-2 cursor-pointer hover:scale-110 duration-200 mr-6"
            key={id}
          >
            <img src={logo} className="w-[80px] h-[70px] p-1" alt="" />
            <div>
              <div className="font-semibold px-2">{name}</div>
              <p className="text-gray-400 px-2 text-md">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="font-semibold text-blue-700 cursor-pointer text-xl underline mb-4">
        <Link to='/portfolio/research'>Research</Link>
      </p>
      <p className="font-semibold text-blue-700 cursor-pointer text-xl underline mb-4">
        <Link to ='/portfolio/leadership'>Leadership Role & Community Engagement</Link>
      </p>
      <p className="font-semibold text-blue-700 cursor-pointer text-xl underline mb-4">
        <Link to='/portfolio/media-coverage'>Media Coverage</Link>
      </p>
      <br />
      <hr />
    </div>
  );
}

export default Portfolio;
