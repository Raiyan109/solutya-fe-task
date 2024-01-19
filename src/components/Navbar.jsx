import locationImg from '../assets/location.png'
import emailImg from '../assets/Email Icon.png'
import phoneImg from '../assets/Phone.png'
import fImg from '../assets/Facebook.png'
import tImg from '../assets/Twitter.png'
import lImg from '../assets/Linkdin.png'
import yImg from '../assets/Youtube.png'
import iIMg from '../assets/instagram.png'
const Navbar = () => {
    return (
        <div>
            <header className=" bg-[#010F58]">
                <div className="flex p-5 items-center justify-around gap-3">
                    <div className='flex gap-3'>
                        <div className='lg:flex hidden items-center gap-2 '>
                            <div>
                                <img src={locationImg} alt="" className='w-10 h-10' />
                            </div>
                            <h3 className='text-xs text-white'>7124 Landmark Tower,New York</h3>
                        </div>
                        <div className='lg:flex hidden items-center gap-2'>
                            <div>
                                <img src={emailImg} alt="" className='w-10 h-10' />
                            </div>
                            <h3 className='text-xs text-white'>support@yourdomain.com</h3>
                        </div>
                        <div className='lg:flex hidden items-center gap-2'>
                            <div>
                                <img src={phoneImg} alt="" className='w-10 h-10' />
                            </div>
                            <h3 className='text-xs text-white'>+61383766284</h3>
                        </div>
                    </div>
                    <nav className="flex items-center justify-center gap-3">
                        <img src={fImg} alt="" className='w-10 h-10' />
                        <img src={iIMg} alt="" className='w-10 h-10' />
                        <img src={tImg} alt="" className='w-10 h-10' />
                        <img src={lImg} alt="" className='w-10 h-10' />
                        <img src={yImg} alt="" className='w-10 h-10' />
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;