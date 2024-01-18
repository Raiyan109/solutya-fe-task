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
import FindPropBtn from './FindPropBtn';

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
                <div className='ourServicesHeader'>
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
                    <img src={img1} alt="" />
                    <div className='flex items-center justify-between gap-32'>
                        <div className='space-y-3 py-2 px-3'>
                            <h1 className='text-orange-500 font-bold'>Forture Condo Town</h1>
                            <div className='flex items-center gap-1 text-[#010F58]'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStarHalf />
                            </div>
                        </div>
                        <div>
                            <img src={squrFt} alt="" className='sqft' />
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />

                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default FindProperties;