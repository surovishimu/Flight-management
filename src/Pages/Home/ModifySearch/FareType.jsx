import { useState } from 'react';
import { Tooltip } from 'react-tooltip';



const FareType = () => {
    const [selectedFare, setSelectedFare] = useState('Regular');

    const handleFareChange = (fareType) => {
        setSelectedFare(fareType === selectedFare ? null : fareType);
    };


    return (
        <div className="flex items-center gap-4 mt-4">
            <h1 className='font-bold'>Fare Type:</h1>
            <div className='flex items-center bg-red-50 p-2 rounded-md'>
                <input
                    type="checkbox"
                    id="regularFare"
                    name="fareType"
                    className="checkbox checkbox-xs mr-1 checkbox-error [--chkfg:white]"
                    checked={selectedFare === 'Regular'}
                    onChange={() => handleFareChange('Regular')}
                />
                <label htmlFor="regularFare">Regular Fares</label>
            </div>
            <div className='flex items-center bg-red-50 p-2 rounded-md tooltip tooltip-bottom text-left example-container'>


                <input
                    type="checkbox"
                    id="seamanFare"
                    name="fareType"
                    className="checkbox checkbox-xs mr-1 checkbox-error [--chkfg:white]"
                    checked={selectedFare === 'Seaman'}
                    onChange={() => handleFareChange('Seaman')}
                />
                <label  data-tooltip-id="my-tooltip-border" htmlFor="seamanFare">Seaman Fares</label>
                <Tooltip id="my-tooltip-border" className="" border="1px solid red" place='bottom' style={{ backgroundColor: "rgb(255, 255, 255)", color: "#222", borderRadius: "15px"}}>
                    <div className='w-72 text-black'>
                        <h3 className='font-bold text-lg'>Seaman Fares</h3>
                        <p>Individuals employed aboard vessels such as tankers, cruise ships and in onshore or offshore oil or energy production zones fall under the category of seafarers. These can include administrators, engineers, captains, technicians, workers, or support staff certified by authorized organizations as licensed personnel. It is crucial for them to carry a valid identification and letters, as failure to do so could result in denial of boarding.</p>

                    </div>
                </Tooltip>
            </div>
        </div >
    );
};

export default FareType;