import { useState } from 'react';
import { IoMdArrowDropleft } from 'react-icons/io';
import { IoMdArrowDropright } from 'react-icons/io';
import ShowAirline from './ShowAirline';

const RightSide = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="lg:w-8/12 w-full">
            <div className="flex justify-between items-center w-full ">
                <IoMdArrowDropleft className="text-8xl text-red-600" />
                <h1 className="text-4xl font-semibold">Flights from Dhaka to Chittagong</h1>
                <IoMdArrowDropright className="text-8xl text-red-600" />
            </div>
            <div className="flex items-center justify-between bg-white shadow-xl px-5 py-4 rounded-lg cursor-pointer">
                <div
                    className={`${selectedOption === 'cheapest' ? 'bg-gray-100 p-4 mx-2 rounded-md' : 'p-4 mx-2'
                        }`}
                    onClick={() => handleSelect('cheapest')}
                >
                    <h1 className="text-gray-500 text-2xl mb-2 font-semibold">Cheapest</h1>
                    <p className="text-gray-500">To get the cheapest available flights</p>
                </div>

                <div className="border-r border-gray-300 h-16"></div>

                <div
                    className={`${selectedOption === 'shortest' ? 'bg-gray-100 p-4 mx-2 rounded-md' : 'p-4 mx-2'
                        }`}
                    onClick={() => handleSelect('shortest')}
                >
                    <h1 className="text-gray-500 text-2xl mb-2 font-semibold">Shortest</h1>
                    <p className="text-gray-500">To get the shortest available flights</p>
                </div>
            </div>
            <ShowAirline></ShowAirline>
        </div>
    );
};

export default RightSide;
