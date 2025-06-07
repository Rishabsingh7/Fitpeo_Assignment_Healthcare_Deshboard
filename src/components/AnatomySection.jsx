import React from "react";
import { FaHeart, FaWalking, FaLungs, FaTooth, FaBone, FaSearchPlus, FaChevronRight } from "react-icons/fa";

const AnatomySection = () => {
  return (
    <div className="relative mb-4 md:left-[-10%] lg:left-[-5%] xl:left-0 w-full flex flex-col items-center md:items-start">
      <div className=" rounded-lg  p-6 relative w-full max-w-md mx-auto md:mx-0">
        <div className="absolute top-4 right-4  p-2 bg-gray-100 rounded-full cursor-pointer shadow-sm">
          <FaSearchPlus className="w-4 h-4 text-gray-600 " />
        </div>

        <img
          src="./src/components/human.png" 
          alt="human body"
          className=" max-w-[250px] md:max-w-[300px] h-auto px-3 "
         onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/250x400/cccccc/333333?text=human Body"; }} // Fallback image
         // onError={(e) => { e.target.onerror = null; e.target. src="./src/components/human.png" ; }} // Fallback image
        />

        <div className="absolute top-[14%] md:top-[26%] left-[50%] md:left-[60%] transform -translate-x-1/2 flex items-center bg-blue-500 text-white text-xs md:text-sm px-3 py-2 rounded-full shadow-md whitespace-nowrap">
          <FaHeart className="mr-2 text-sm md:text-base" /> 
          Healthly Heart
        </div>

        <div className="absolute bottom-[1%] md:bottom-[20%] left-[30%] md:left-[15%] flex items-center bg-teal-500 text-black text-xs md:text-sm px-3 py-2 rounded-full shadow-md whitespace-nowrap">
          <FaWalking className="mr-2 text-sm md:text-base" /> 
          Healthly Leg
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gray-300 rounded-full">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-md cursor-pointer"></div>
        </div>
      </div>

      <div className="mt-6 md:absolute md:top-30 md:left-86 md:mt-0 w-full md:w-[200px] space-y-6">       
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="p-3 bg-red-100 rounded-full mr-3">
            <FaLungs className="text-red-500 text-lg" /> 
          </div>
    
          <div>
            <h4 className="font-semibold text-gray-800 text-sm">Lungs</h4>
            <p className="text-xs text-gray-500">Date: 26 Oct 2021</p>
            <div className="bg-gray-200 rounded-full h-1 mt-1.5">
              <div className="bg-red-400 h-1 rounded-full w-3/4"></div> 
            </div>
          </div>
        </div>


        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="p-3 bg-gray-100 rounded-full mr-3">
            <FaTooth className="text-gray-500 text-lg" /> 
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 text-sm">Teeth</h4>
            <p className="text-xs text-gray-500">Date: 26 Oct 2021</p>
            <div className="bg-gray-200 rounded-full h-1 mt-1.5">
              <div className="bg-gray-400 h-1 rounded-full w-2/3"></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="p-3 bg-orange-100 rounded-full mr-3">
            <FaBone className="text-orange-500 text-lg" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 text-sm">Bone</h4>
            <p className="text-xs text-gray-500">Date: 26 Oct 2021</p>
            <div className="bg-gray-200 rounded-full h-1 mt-1.5">
              <div className="bg-orange-400 h-1 rounded-full w-1/2"></div>
               </div>
          </div>
        </div>
      </div>
    
      <div className=" p-4 rounded-xl max-w-3xl w-full">
  <div className="flex justify-between items-center mb-5 ">
    <h3 className="text-md  p-4 font-bold text-gray-700">Activity</h3>
    <span className="text-sm text-gray-500">3 appointments on this week</span>
  </div>

  <div className="flex justify-between items-end h-40 p-1">
    {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day, idx) => (
      <div key={idx} className="flex flex-col items-center gap-1">
        <div className="flex items-end gap-1">
          {/* Multiple bars per day */}
          <div className="w-2.5 bg-gray-300 rounded-full" style={{ height: "100px" }}></div>
          <div className="w-2.5 bg-cyan-400 rounded-full" style={{ height: "70px" }}></div>
          <div className="w-2.5 bg-indigo-500 rounded-full" style={{ height: "100px" }}></div>
        </div>
        <span className="text-xs text-gray-500 mt-1">{day}</span>
      </div>
    ))}
  </div>
</div>


      
      <div className="absolute bottom-2 right-2 text-blue-500 text-xs flex items-center cursor-pointer">
        Details
        <FaChevronRight className="w-3 h-3 ml-1" />
      </div>
    </div>
    
  );
};

export default AnatomySection;
