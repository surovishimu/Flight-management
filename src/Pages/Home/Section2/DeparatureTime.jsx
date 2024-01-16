import { useState } from 'react';
import { PiSunHorizonFill, PiSunHorizonBold, PiSunBold } from 'react-icons/pi';

const DepartureTime = () => {
    const [selected, setSelected] = useState([]);

    const handleSelect = (index) => {
        setSelected((prevSelected) => (prevSelected.includes(index) ? prevSelected.filter((item) => item !== index) : [...prevSelected, index]));
    };


    const isSelected = (index) => selected.includes(index) ? 'bg-red-500 text-white border-none' : 'bg-white';

    return (
        <div className="my-4">
            <h1 className="ml-3 text-lg font-semibold">Departure time in Dhaka</h1>
            <div className="flex flex-wrap gap-5 p-3">
                <div
                    className={`border border-gray-500 p-2 rounded-lg flex flex-col items-center  cursor-pointer ${isSelected(0)}`}
                    onClick={() => handleSelect(0)}
                >
                    <PiSunHorizonBold className=" text-xl" />
                    <small>Morning</small>
                    <small>06:00 - 11:59 (3)</small>
                </div>
                <div
                    className={`border border-gray-500 flex flex-col items-center  p-2 rounded-lg cursor-pointer ${isSelected(1)}`}
                    onClick={() => handleSelect(1)}
                >
                    <PiSunBold className=" text-lg" />
                    <small>After Noon</small>
                    <small>12:00 - 17:59 (3)</small>
                </div>
                <div
                    className={`border border-gray-500 flex flex-col items-center  p-2 rounded-lg cursor-pointer ${isSelected(2)}`}
                    onClick={() => handleSelect(2)}
                >
                    <PiSunHorizonFill className=" text-xl" />
                    <small>Evening</small>
                    <small>18:00 - 23:59 (7)</small>
                </div>
            </div>

        </div>
    );
};

export default DepartureTime;
