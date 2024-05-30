import React,{useEffect} from "react";
import lrtable from "/lr_table.png";
import lrtable2 from "/lr_table2.png";
import lsufall from "/lsu-fall.png";
import lsuhome from "/lsu-home.png"
import lsuaward from "/lsu-award.png"
import { Link } from "react-router-dom";

function Leadership() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div className="max-w-screen-2xl container mx-auto px-6 md:px-28  mt-[90px]">
      <div className="flex flex-col justify-center items-center">
        <p className="text-gray-600 text-[15px]">
          I am an active participant in the regional and national level
          leadership forum with a great working experience with
          multidisciplinary teams. As an elected president of the International
          Student Association representing 2,000 students from 95 different
          nations, I got an opportunity to build an impeccable network with
          numerous organizations in the United States. I strongly believe that
          creating an impactful socio-economics change demands good leadership
          attributes along with technical skills.
        </p>

        <img src={lrtable} className="w-[800px] mt-10 border-[3px] rounded-lg shadow-lg"/>
        <br />
        <img src={lrtable2} className="w-[800px] mt-10 border-[3px] rounded-lg shadow-lg"/>
        <br />
        <img src={lsuaward} className="w-[800px] mt-10 border-[3px] rounded-lg shadow-lg" />
        <br />
        <img src={lsufall} className="w-[500px] mt-10 border-[3px] rounded-lg shadow-lg"/>
        <br />
        <img src={lsuhome} className="w-[800px] mt-10 border-[3px] rounded-lg shadow-lg" />
        <br /> 
      </div>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4 md:ml-[120px]"
      >
        Go Back
      </Link>
    </div>
  );
}

export default Leadership;
