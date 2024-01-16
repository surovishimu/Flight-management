

const StopsDhaka = () => {
    return (
        <div>
            <div>
                <h1 className="ml-3 text-lg font-semibold">Stops From Dhaka</h1>
                <div className="flex justify-between items-center px-2 mt-2">
                    <div>
                        <input type="checkbox" className="checkbox checkbox-xs mr-1 checkbox-error rounded-none border-gray-500 [--chkfg:white]" name="" id="" />
                    </div>
                    <div><h1>BDT 3,240</h1></div>
                </div>
            </div>
            <hr />
            <div>
                <h1 className="ml-3 text-lg font-semibold">Check in Baggage Allowance</h1>
                <div className="flex  items-center px-2 mt-2 gap-3">
                    <div>
                        <input type="checkbox" className="checkbox checkbox-xs mr-1 checkbox-error rounded-none border-gray-500 [--chkfg:white]" name="" id="" />
                    </div>
                    <div><h1>20 KG (13)</h1></div>
                </div>
            </div>

        </div>
    );
};

export default StopsDhaka;