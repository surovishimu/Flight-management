import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowDownUp } from "react-icons/lu";
const FromTo = () => {
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5 mt-3">
            <div className="md:flex flex-1 items-center justify-center cursor-pointer relative">
                <div className="border border-gray-400 text-gray-500 rounded-lg flex-1 pl-6 py-1">
                    <h5 className="">From</h5>
                    <h1 className="font-bold text-xl">Dhaka</h1>
                    <small>Hazrat Shahjalal International Airport</small>
                </div>

                <div className="md:flex hidden items-center justify-center absolute ">
                    <div className="border border-gray-400 text-gray-500 rounded-full p-3 bg-white">
                      
                        <FaArrowRightArrowLeft className="text-red-600" />
                    </div>
                </div>
                <div className="md:hidden  items-center absolute right-10 bottom-16">
                    <div className="border border-gray-400 text-gray-500 rounded-full p-3 bg-white">
                      
                        <LuArrowDownUp className="text-red-600" />
                    </div>
                </div>

                <div className="border border-gray-400 text-gray-500 rounded-lg flex-1 pl-6 py-1">
                    <h5>To</h5>
                    <h1 className="font-bold text-xl">Chittagong</h1>
                    <small>Shah Amanat International</small>
                </div>
            </div>


            <div className="md:flex flex-1 gap-4 ">
                <div className="flex flex-1 cursor-pointer md:mb-0 mb-4">
                    <div className="border border-gray-400 text-gray-500 rounded-l-lg flex-1 pl-4 pt-1">
                        <h5 className="flex items-center gap-1 ">Departure <span className="text-lg"><IoIosArrowDown /></span></h5>
                        <h1 className="font-bold text-xl">15 Jan 24</h1>
                        <small>Monday</small>
                    </div>
                    <div className="border border-gray-400 text-gray-500 rounded-r-lg flex-1 pl-4 pt-1">
                        <h5 className="flex items-center gap-1 ">Return <span className="text-lg"><IoIosArrowDown /></span></h5>
                        <h1 className="text-xs">Tap to book return</h1>
                        <small>Tuesday</small>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="border border-gray-400 text-gray-500 rounded-lg flex-1 pl-4 py-1 cursor-pointer">
                        <h5 className="">Travelers & Booking Class</h5>
                        <h1 className="font-bold text-xl">1 Traveler</h1>
                        <small>Economy</small>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FromTo;