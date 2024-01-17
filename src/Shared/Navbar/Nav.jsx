import navimage from '../../../public/Image/images-removebg-preview.png'

const Nav = () => {
    return (
        <div className='flex justify-between items-center'>
            <nav>
                <img className='w-72 h-20' src={navimage} alt="" />
            </nav>
            <button className='bg-red-600 btn btn-lg text-white hover:bg-red-500'>Sign In</button>
        </div>
    );
};

export default Nav;