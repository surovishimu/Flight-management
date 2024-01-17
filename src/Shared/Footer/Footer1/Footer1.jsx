import image from '../../../../public/Image/images-removebg-preview.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
const Footer1 = () => {
    return (
       <div>
         <div className='flex justify-between lg:flex-row flex-col mt-20 gap-4 mb-5'> 
            <div>
                <img className='w-56 h-20' src={image} alt="" />
                <h1 className='text-red-600 w-80'>Flight Expert Dhaka (Main branch)90/1 Motijheel City Centre Level 25-B-1, Lift 26 Dhaka 1000, Bangladesh</h1>
                <div className='flex items-center mt-4 gap-5  text-2xl '>
                    <a href=""><FaFacebookF className='text-red-600' /></a>
                    <a href=""><FaInstagram className='text-red-600' /></a>
                    <a href=""><FaXTwitter className='text-red-600' /></a>
                    <a href=""><FaLinkedinIn className='text-red-600' /></a>
                    <a href=""><SlSocialPintarest className='text-red-600' /></a>
                </div>
            </div>
            <div className='w-72'>
                <h1 className='text-gray-500 font-semibold text-2xl mb-5'>About</h1>
                <div className='grid grid-cols-1 gap-3 '>
                    <a className='hover:text-red-600 text-xl text-gray-500' href="">About Flight Expert</a>
                    <a className='hover:text-red-600 text-xl text-gray-500' href="">Best Price Guarantee</a>
                    <a className='hover:text-red-600 text-xl  text-gray-500' href="">Terms and Conditions</a>
                    <a className='hover:text-red-600 text-xl  text-gray-500' href="">Privacy Policy</a>
                    <a className='hover:text-red-600 text-xl  text-gray-500' href="">Cookie Policy</a>
                    <a className='hover:text-red-600 text-xl text-gray-500' href="">Blog</a>
                </div>

            </div>
            <div className='w-72'>
                <h1 className='text-gray-500 font-semibold text-2xl mb-5'>Help</h1>
                <div className='grid grid-cols-1 gap-3'>
                    <a className='hover:text-red-600 text-xl text-gray-500' href="">FAQS</a>
                    <a className='hover:text-red-600 text-xl text-gray-500' href="">Easy EMI</a>
                    <a className='hover:text-red-600 text-xl text-gray-500' href="">Payment Methods</a>

                    <a className='hover:text-red-600 text-xl text-gray-500' href="">Contact Us</a>

                </div>

            </div>
            <div className='w-72'>
                <h1 className='text-gray-500 font-semibold text-2xl mb-5'>Have Questions?</h1>
                <div className='grid grid-cols-1 w-48'>
                    <a className='text-red-600 text-xl mb-2' href="">+88-09617-111-888</a>
                    <a className='text-red-600 text-xl mb-2 ' href="">sales@flightexpert.com</a>
                    <p className='text-black text-md font-semibold mb-2'>Dedicated Customer Support</p>

                    <p className='text-sm'>Sat-Thurs: 9AM-9PM
                        Friday/Govt. Holidays: 10AM-6PM</p>

                </div>

            </div>
            <div className=''>
                <h1 className='text-gray-500 font-semibold text-2xl mb-5 '>Accepted Payments</h1>
                <div className='grid lg:grid-cols-6 grid-cols-4 gap-4'>
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/visa.jpeg" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/mastercard.jpg" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/americanexpress.png" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/brackbank.png" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/dbbl.jpg" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/mycash.png" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/citybank.png" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/bankasia.webp" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/islami.webp" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/takapay.jpg" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/qcash.jpeg" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/nagad.png" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/fastcash.jpg" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/mtb.png" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/bkash.jpeg" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/rocket.png" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/islamimcash.png" alt="" />
                    <img className='border border-gray-500 rounded-md h-10 w-10 shadow-2xl' src="../../../../public/Image/upay.png" alt="" />

                </div>

            </div>
        </div>
        <hr />
       </div>
    );
};

export default Footer1;
