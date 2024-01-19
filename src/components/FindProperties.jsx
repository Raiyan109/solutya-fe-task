import underline from '../assets/head underline.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/findProperties.css'
import img1 from '../assets/find-properties-1.png'
import img2 from '../assets/find-properties-2.png'
import img3 from '../assets/find-properties-3.png'
import { IoStar, IoStarHalf } from "react-icons/io5";
import squrFt from '../assets/Sqft.png'
import squrFtYellow from '../assets/Sqft-yellow.png'
import FindPropBtn from './FindPropBtn';
import hoverIcon1 from '../assets/find-property-hover-1.png'
import hoverIcon2 from '../assets/find-property-hover-2.png'

const FindProperties = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                // modules={[Pagination]}
                className="mySwiper"
            >
                <div className='ourServicesHeader space-y-3'>
                    <div>
                        <h1 className='text-[#010F58] text-sm font-bold'>Find Properties</h1>
                        <img src={underline} alt="" className='' />
                    </div>
                    <h1 className='text-3xl font-semibold'>Explore Our Cities</h1>
                </div>
                <div className='ourServicesArrow'>
                    <FindPropBtn />
                </div>
                <SwiperSlide>
                    <div className='group relative'>
                        <img src={img1} alt="" />
                        <div className='bg-orange-600 absolute top-32 left-40 py-1 px-3 font-semibold text-white group-hover:hidden'>
                            Bangkok
                        </div>
                        <div className="middle">
                            <div className="text flex flex-col gap-3">
                                <div className='flex items-center gap-3'>
                                    <img src={hoverIcon1} alt="" />
                                    <img src={hoverIcon2} alt="" />
                                </div>
                                <h1 className='text-xl text-white'>John Doe</h1>

                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-32 group-hover:border-b-2 group-hover:border-orange-600'>
                            <div className='space-y-3 py-2 px-3'>
                                <h1 className='text-orange-500 font-bold'>Forture Condo Town</h1>
                                <div className='flex items-center gap-1 text-[#010F58] text-sm font-medium'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStarHalf />
                                    <p>4.5</p>
                                </div>
                            </div>
                            <div>
                                <img src={squrFt} alt="" className='sqft' />
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='group relative'>
                        <img src={img2} alt="" />
                        <div className='bg-orange-600 absolute top-32 left-40 py-1 px-3 font-semibold text-white group-hover:hidden'>
                            Sydney
                        </div>
                        <div className="middle">
                            <div className="text flex flex-col gap-3">
                                <div className='flex items-center gap-3'>
                                    <img src={hoverIcon1} alt="" />
                                    <img src={hoverIcon2} alt="" />
                                </div>
                                <h1 className='text-xl text-white'>John Doe</h1>

                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-32 group-hover:border-b-2 group-hover:border-orange-600'>
                            <div className='space-y-3 py-2 px-3'>
                                <h1 className='text-orange-500 font-bold'>Farmhouse for Buy</h1>
                                <div className='flex items-center gap-1 text-orange-600 text-sm font-medium'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStarHalf />
                                    <p>4.5</p>
                                </div>
                            </div>
                            <div>
                                <img src={squrFtYellow} alt="" className='sqft' />
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='group relative'>
                        <img src={img3} alt="" />
                        <div className='bg-orange-600 absolute top-32 left-40 py-1 px-3 font-semibold text-white group-hover:hidden'>
                            Toronto
                        </div>
                        <div className="middle">
                            <div className="text flex flex-col gap-3">
                                <div className='flex items-center gap-3'>
                                    <img src={hoverIcon1} alt="" />
                                    <img src={hoverIcon2} alt="" />
                                </div>
                                <h1 className='text-xl text-white'>John Doe</h1>

                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-32 group-hover:border-b-2 group-hover:border-orange-600'>
                            <div className='space-y-3 py-2 px-3'>
                                <h1 className='text-orange-500 font-bold'>Apartment for sale</h1>
                                <div className='flex items-center gap-1 text-orange-600 text-sm font-medium'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStarHalf />
                                    <p>4.5</p>
                                </div>
                            </div>
                            <div>
                                <img src={squrFtYellow} alt="" className='sqft' />
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default FindProperties;