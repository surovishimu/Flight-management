import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AirlineCard = ({ airline }) => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const { airlineName, logo, departure, duration, type, arrival, price } = airline;

    const handleToggleDetails = () => {
        setIsDetailsOpen(!isDetailsOpen);
    };

    return (
        <div className={`px-10 ${isDetailsOpen ? 'pb-10' : 'pb-5'} bg-white rounded-lg shadow-xl`}>
            <div className="flex justify-between py-10">
                <div>
                    <img className="h-280 w-28" src={logo} alt="" />
                    <h1 className="text-xl text-gray-500 mb-2">{airlineName}</h1>
                    <p className="text-lg text-gray-500 mb-4">price</p>
                    <span className="text-xl text-gray-800 font-semibold">{price}</span>
                    <p className="text-green-800 font-semibold">Partially Refundable</p>
                </div>
                <div>
                    <p className="text-gray-500 mb-2">Depart</p>
                    <span className="text-xl text-gray-800 font-semibold">{departure.time}</span>
                    <h1 className="mb-4">{departure.date}</h1>
                    <h1>{departure.city}</h1>
                </div>
                <div>
                    <h1 className="text-center mb-2">{duration}</h1>
                    <img className="w-28" src="../../../../public/Image/durationawrrow.webp" alt="" />
                    <h1 className="text-center mt-2">{type}</h1>
                </div>
                <div>
                    <p className="text-gray-500 mb-2">Arrive</p>
                    <span className="text-xl text-gray-800 font-semibold">{arrival.time}</span>
                    <h1 className="mb-4">{arrival.date}</h1>
                    <h1 className="mb-8">{arrival.city}</h1>
                    <button className="btn btn-lg bg-red-600 hover:bg-red-600 mb-2 text-white">Book Now</button>
                    <h5
                        className="flex items-center gap-1 text-red-600 text-xl font-semibold cursor-pointer"
                        onClick={handleToggleDetails}
                    >
                        Flight Details <span className="text-xl"><IoIosArrowDown /></span>
                    </h5>
                </div>
            </div>
            {isDetailsOpen && (
                <div className="px-10">
                    <hr className="my-5 border-t border-gray-300" />
                   
                    <p>Detailed information about the flight...</p>
                </div>
            )}
        </div>
    );
};

export default AirlineCard;
