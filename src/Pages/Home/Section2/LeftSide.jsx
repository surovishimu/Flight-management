import { useState, useEffect } from 'react';


const LeftSide = () => {
    const initialTime = 20 * 60;
    
    const [remainingTime, setRemainingTime] = useState(initialTime);
    const [rangeValues, setRangeValues] = useState({ min: 3240, max: 6822 });
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (remainingTime > 0) {
                setRemainingTime(remainingTime - 1);
            } else {
                setRemainingTime(0);
                clearInterval(intervalId);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [remainingTime]);
    const handleRangeChange = (event) => {
        const value = parseInt(event.target.value);
        setRangeValues({ ...rangeValues, max: value });
    };
    const formatTime = () => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return (
            <div>
                <div className='flex items-center justify-center gap-5'>
                    <span className='bg-red-600 px-4 py-2 rounded-md text-white text-2xl'>{String(minutes).padStart(2, '0')} </span> <span className='text-red-600 text-3xl'>:</span>
                    <span className='bg-red-600 px-4 py-2 rounded-md text-white text-2xl'>{String(seconds).padStart(2, '0')}</span>
                </div>
                <div className='flex items-center justify-center gap-24'>
                    <span className='text-sm font-normal'>min</span>
                    <span className='text-sm font-normal mr-1'>sec</span>
                </div>
            </div>


        );
    };

    return (
        <div className="bg-zinc-50 shadow-xl w-3/12 rounded-lg">
            <h1 className="text-center mt-5 text-xl font-semibold">Session Timeout in</h1>
            <div className="text-center text-4xl font-bold mt-5 mb-4">{formatTime()}</div>
            <hr />
           
            <input
                type="range"
                min={3240}
                max="6822"
                value={rangeValues.max}
                onChange={handleRangeChange}
                className="range range-xs range-error mt-5 w-11/12 ml-2"
               
            /> 
            
            <div className="flex justify-center items-center font-semibold text-md">
                <span>{rangeValues.min.toLocaleString()} tk</span>
                <span className='mx-2'>-</span>
                <span>{rangeValues.max.toLocaleString()} tk</span>
            </div>
        </div>
    );
};

export default LeftSide;
