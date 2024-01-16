import { useState, useEffect } from 'react';
import DeparatureTime from './DeparatureTime';
import PriceRange from './PriceRange';
import StopsDhaka from './StopsDhaka';


const LeftSide = () => {
    const initialTime = 20 * 60;
    
    const [remainingTime, setRemainingTime] = useState(initialTime);
  
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
           
            <PriceRange></PriceRange>
            <hr />
            <DeparatureTime></DeparatureTime>
            <hr />
            <StopsDhaka></StopsDhaka>
        </div>
    );
};

export default LeftSide;
