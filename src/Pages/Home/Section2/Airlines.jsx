

const Airlines = () => {
    return (
        <div>
            <div className="my-5">
                <h1 className="ml-3 text-lg font-semibold">Airlines</h1>
                <div className="flex justify-between items-center"> 
                    <div className="flex items-center px-3 mt-2">
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox checkbox-xs  mr-1 checkbox-error rounded-sm border-gray-500 [--chkfg:white]" name="" id="" />
                        </div>
                        <div><h1>Biman Bangladesh Airlines</h1></div>
                    </div>
                    <div className="">
                      <h1  className="mt-2 text-sm mr-2">BDT 3,243</h1>
                    </div>
                </div>
                <div className="flex justify-between items-center"> 
                    <div className="flex items-center px-3 mt-2">
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox checkbox-xs  mr-1 checkbox-error rounded-sm border-gray-500 [--chkfg:white]" name="" id="" />
                        </div>
                        <div><h1>US Bangla Airlines</h1></div>
                    </div>
                    <div className="">
                      <h1  className="mt-2 text-sm mr-2">BDT 3,954</h1>
                    </div>
                </div>
                <div className="flex justify-between items-center"> 
                    <div className="flex items-center px-3 mt-2">
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox checkbox-xs  mr-1 checkbox-error rounded-sm border-gray-500 [--chkfg:white]" name="" id="" />
                        </div>
                        <div><h1>Air Astra</h1></div>
                    </div>
                    <div className="">
                      <h1  className="mt-2 text-sm mr-2">BDT 3,954</h1>
                    </div>
                </div>
                <div className="flex justify-between items-center"> 
                    <div className="flex items-center px-3 mt-2">
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox checkbox-xs  mr-1 checkbox-error rounded-sm border-gray-500 [--chkfg:white]" name="" id="" />
                        </div>
                        <div><h1>Novo Air</h1></div>
                    </div>
                    <div className="">
                      <h1 className="mt-2 text-sm mr-2">BDT 4,139</h1>
                    </div>
                </div>
            </div>
           
           
        </div>
    );
};

export default Airlines;