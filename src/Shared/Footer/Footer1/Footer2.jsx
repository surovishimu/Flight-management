

const Footer2 = () => {
    return (
        <div>
            <div className="py-4 flex lg:flex-row flex-col justify-center items-center gap-24">
                <div>
                    <h1 className="text-gray-500 font-semibold text-xl mb-5 mt-5">Accredited Member</h1>
                    <div className="flex items-center">
                        <img className="w-40 h-12" src="../../../../public/Image/basic.webp" alt="" />
                        <img className="w-32 h-16" src="../../../../public/Image/ecab.webp" alt="" />
                    </div>
                </div>
                <div>
                    <h1 className="text-gray-500 font-semibold text-xl mb-5 mt-5">Registered at</h1>
                    <img className="w-28 h-16" src="../../../../public/Image/registered.webp" alt="" />
                </div>
                <div>
                    <h1 className="text-gray-500 font-semibold text-xl mb-5 mt-5">Authorised by</h1>
                    <img className="w-32 h-14" src="../../../../public/Image/iata.webp" alt="" />
                </div>
                <div>
                    <h1 className="text-gray-500 font-semibold text-xl mb-5 mt-7">Our Partners</h1>
                    <img className="w-32 h-16" src="../../../../public/Image/google.webp" alt="" />
                </div>
                

            </div>
            <hr />
            <h1 className="text-center text-xl text-gray-500 font-semibold my-10">Copyright @2024 FEBD Ltd. All rights reserved by Flight Expert</h1>
        </div>
    );
};

export default Footer2;