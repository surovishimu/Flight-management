

const TransitTime = () => {
    return (
        <div className="my-5 ">
            <div className="my-2">
                <h1 className="ml-3 text-lg font-semibold">Transit Time in (Dhaka - Chittagong)</h1>
                <div className="flex gap-3 items-center px-3 mt-2">
                    <div className="flex items-center">
                        <input type="checkbox" className="checkbox checkbox-xs mr-1 checkbox-error rounded-sm border-gray-500 [--chkfg:white]" name="" id="" />
                    </div>
                    <div><h1>
                        No Transit Time (14)</h1></div>
                </div>
            </div>

            <button className="btn w-11/12 block mx-auto border border-red-600 bg-white hover:bg-red-600 text-red-600 text-lg mt-10 hover:text-white mb-5  ">Clear Filters</button>

        </div>
    );
};

export default TransitTime;