import { useState } from "react";


const PriceRange = () => {
    const [rangeValues, setRangeValues] = useState({ min: 3240, max: 6822 });
    const handleRangeChange = (event) => {
        const value = parseInt(event.target.value);
        setRangeValues({ ...rangeValues, max: value });
    };
    return (
        <div className=" my-4">
            <h1 className="ml-3 text-lg font-semibold">One Way Price</h1>
            <input
                type="range"
                min={3240}
                max="6822"
                value={rangeValues.max}
                onChange={handleRangeChange}
                className="range range-xs range-error mt-5 w-11/12 ml-2"
               
            /> 
            
            <div className="flex justify-center items-center font-semibold text-md mb-">
                <span>{rangeValues.min.toLocaleString()} tk</span>
                <span className='mx-2'>-</span>
                <span>{rangeValues.max.toLocaleString()} tk</span>
            </div>
        </div>
    );
};

export default PriceRange;