import locationImg from '../assets/location.png'
import emailImg from '../assets/Email Icon.png'
import phoneImg from '../assets/Ellipse 1.png'
import fImg from '../assets/Facebook.png'
import tImg from '../assets/Twitter.png'
import lImg from '../assets/Linkdin.png'
import yImg from '../assets/Youtube.png'
import iIMg from '../assets/instagram.png'
import logoImg from '../assets/footer-logo.png'
import underline from '../assets/head underline.png'
import arrow from '../assets/footer-arrow.png'
import arrowWhite from '../assets/footer-arrow-white.png'
import footerImg from '../assets/footer-img.png'
const Footer = () => {
    return (
        <footer className="bg-[#010F58]">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-center text-white sm:justify-start">
                            <img src={logoImg} alt="" />
                        </div>

                        <p className="mt-6 max-w-md text-center leading-relaxed text-white/75 sm:max-w-xs sm:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                            cum itaque neque.
                        </p>

                        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <img src={fImg} alt="" className='w-10 h-10' />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <img src={iIMg} alt="" className='w-10 h-10' />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <img src={tImg} alt="" className='w-10 h-10' />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                >
                                    <span className="sr-only">GitHub</span>
                                    <img src={lImg} alt="" className='w-10 h-10' />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                >
                                    <span className="sr-only">Dribbble</span>
                                    <img src={yImg} alt="" className='w-10 h-10' />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                        <div className="text-center sm:text-left">

                            <div>
                                <p className="text-lg font-medium text-white">Quick Links</p>
                                <img src={underline} alt="" className='' />
                            </div>
                            <ul className="mt-8 space-y-4 text-sm ">
                                <li className='flex items-center gap-2'>
                                    <img src={arrow} alt="" className='w-4 h-4' />
                                    <a className="text-white/80 transition hover:text-gray-700/75 text-sm" href="/">
                                        About Us
                                    </a>
                                </li>

                                <li className='flex items-center gap-2'>
                                    <img src={arrowWhite} alt="" className='w-4 h-4' />
                                    <a className="text-white/80 transition hover:text-gray-700/75 text-sm" href="/">
                                        Property
                                    </a>
                                </li>

                                <li className='flex items-center gap-2'>
                                    <img src={arrowWhite} alt="" className='w-4 h-4' />
                                    <a className="text-white/80 transition hover:text-gray-700/75 text-sm" href="/">
                                        Our Agents
                                    </a>
                                </li>

                                <li className='flex items-center gap-2'>
                                    <img src={arrowWhite} alt="" className='w-4 h-4' />
                                    <a className="text-white/80 transition hover:text-gray-700/75 text-sm" href="/">
                                        Careers
                                    </a>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <img src={arrowWhite} alt="" className='w-4 h-4' />
                                    <a className="text-white/80 transition hover:text-gray-700/75 text-sm" href="/">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center space-y-8">
                            <div>
                                <p className="text-lg font-medium text-white">Recent Posts</p>
                                <img src={underline} alt="" className='' />
                            </div>

                            <ul className="grid grid-cols-2 gap-2">
                                <li>
                                    <img src={footerImg} alt="" />
                                </li>

                                <li>
                                    <img src={footerImg} alt="" />
                                </li>

                                <li>
                                    <img src={footerImg} alt="" />
                                </li>

                                <li>
                                    <img src={footerImg} alt="" />
                                </li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">

                            <div>
                                <p className="text-lg font-medium text-white">Contact Us</p>
                                <img src={underline} alt="" className='' />
                            </div>
                            <ul className="mt-8 space-y-4 text-sm ">
                                <li className='flex items-center gap-2'>
                                    <img src={phoneImg} alt="" className='w-10 h-10' />
                                    <div className='flex flex-col text-white/80 text-xs'>
                                        <h5>Phone</h5>
                                        <h5>+44 (0) 20 9994 7740</h5>
                                    </div>
                                </li>

                                <li className='flex items-center gap-2'>
                                    <img src={emailImg} alt="" className='w-10 h-10' />
                                    <div className='flex flex-col text-white/80 text-xs'>
                                        <h5>Email</h5>
                                        <h5>Support@your.domain</h5>
                                    </div>
                                </li>

                                <li className='flex items-center gap-2'>
                                    <img src={locationImg} alt="" className='w-10 h-10' />
                                    <div className='flex flex-col text-white/80 text-xs'>
                                        <h5>Address</h5>
                                        <h5>7124 Landmark Tower,New York</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;