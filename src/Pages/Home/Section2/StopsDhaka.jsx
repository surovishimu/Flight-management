

const StopsDhaka = () => {
    return (
        <div className="">
            <div className="my-2">
                <h1 className="ml-3 text-lg font-semibold">Stops From Dhaka</h1>
                <div className="flex justify-between items-center px-3 mt-2">
                    <div className="flex items-center">
                        <input type="checkbox" className="checkbox checkbox-xs mr-1 checkbox-error rounded-sm border-gray-500 [--chkfg:white]" name="" id="" />
                    </div>
                    <div><h1>BDT 3,240</h1></div>
                </div>
            </div>
            <hr />
            <div className="my-2">
                <h1 className="ml-3 text-lg font-semibold">Check in Baggage Allowance</h1>
                <div className="flex  items-center px-3 mt-2 gap-3">
                    <div className="flex items-center">
                        <input type="checkbox" className="checkbox checkbox-xs mr-1 checkbox-error rounded-sm border-gray-500 [--chkfg:white]" name="" id="" />
                    </div>
                    <div><h1>20 KG (13)</h1></div>
                </div>
            </div>
            <hr />
            <div className="my-2">
                <h1 className="ml-3 text-lg font-semibold">Refundable</h1>
                <div className="flex  items-center px-3 mt-2 gap-3">
                    <div className="flex items-center">
                        <input type="checkbox" className="checkbox checkbox-xs mr-1 checkbox-error rounded-sm border-gray-500 [--chkfg:white]" name="" id="" />
                    </div>
                    <div><h1>Partially Refundable (15)</h1></div>
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <div className="flex  items-center  mt-2 gap-3">
                    <div className="my-2">
                        <h1 className="ml-3 text-lg font-semibold">Departing from</h1>
                        <div className="flex  items-center px-3 mt-2 gap-3">
                            <div className="flex items-center">
                                <input type="checkbox" className="checkbox checkbox-xs mr-1 checkbox-error rounded-sm border-gray-500 [--chkfg:white]" name="" id="" />
                            </div>
                            <div><h1>DAC</h1></div>
                        </div>
                    </div>
                </div>
                <div className="flex  items-center px-2 mt-2 gap-3">
                    <div className="my-2">
                        <h1 className="ml-3 text-lg font-semibold">Arriving at</h1>
                        <div className="flex  items-center px-3 mt-2 gap-3">
                            <div className="flex items-center">
                                <input type="checkbox" className="checkbox checkbox-xs mr-1 checkbox-error rounded-sm border-gray-500 [--chkfg:white]" name="" id="" />
                            </div>
                            <div><h1>CGP</h1></div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default StopsDhaka;