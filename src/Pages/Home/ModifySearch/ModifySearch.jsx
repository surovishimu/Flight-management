import { useState } from "react";
import FromTo from "./FromTo";
import FareType from "./FareType";


const ModifySearch = () => {
    const [selectedOption, setSelectedOption] = useState("One Way");

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="relative">
            <div className="rounded-lg shadow-xl mt-5 p-5 bg-white">
                <div className="flex">
                    <div className="form-control mr-4">
                        <label className="label cursor-pointer">
                            <input
                                type="radio"
                                name="radio-1"
                                className="radio radio-xs radio-error  mr-1"
                                checked={selectedOption === "One Way"}
                                onChange={() => handleOptionChange("One Way")}
                            />
                            <span className="label-text text-gray-500 font-semibold">One Way</span>
                        </label>
                    </div>
                    <div className="form-control mr-4">
                        <label className="label cursor-pointer">
                            <input
                                type="radio"
                                name="radio-1"
                                className="radio radio-xs radio-error mr-1"
                                checked={selectedOption === "Round Trip"}
                                onChange={() => handleOptionChange("Round Trip")}
                            />
                            <span className="label-text text-gray-500 font-semibold">Round Trip</span>
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label cursor-pointer">
                            <input
                                type="radio"
                                name="radio-1"
                                className="radio radio-xs radio-error mr-1"
                                checked={selectedOption === "Multi City"}
                                onChange={() => handleOptionChange("Multi City")}
                            />
                            <span className="label-text text-gray-500 font-semibold">Multi City</span>
                        </label>
                    </div>
                </div>
                <FromTo></FromTo>
                <FareType></FareType>
                <div className="flex justify-center ">
                    <button className="btn bg-red-600 lg:btn-lg absolute lg:-bottom-9 btn-md hover:bg-red-600  text-white">Modisy Search</button>
                </div>
            </div>

        </div>
    );
};

export default ModifySearch;
