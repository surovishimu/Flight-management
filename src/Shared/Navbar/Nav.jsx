import navimage from '../../../public/Image/images-removebg-preview.png'

const Nav = () => {
    return (
        <div className='flex justify-between items-center'>
            <nav>
                <img className='w-64' src={navimage} alt="" />
            </nav>
            <button className='bg-red-600 btn text-white hover:bg-red-500'>Sign In</button>
        </div>
    );
};

export default Nav;