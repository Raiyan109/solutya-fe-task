import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/ourServices.css'
import img1 from '../assets/our-services-1.png'
import img2 from '../assets/our-services-2.png'
import img3 from '../assets/our-services-3.png'
import underline from '../assets/head underline.png'
import OurServBtn from './OurServBtn';
import icon from '../assets/our services icon.png'
const OurServices = () => {
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
                <div className='ourServicesHeader space-y-4 pb-10'>
                    <div>
                        <h1 className='text-[#010F58] text-sm font-bold'>Our Services</h1>
                        <img src={underline} alt="" className='' />
                    </div>
                    <h1 className='text-3xl font-bold'>Our Main Focus</h1>
                </div>
                <div className='ourServicesArrow'>
                    <OurServBtn />
                </div>
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <div className='space-y-5 py-5 px-3'>
                        <div className='flex items-center justify-center gap-2'>
                            <img src={icon} alt="" className='ourServicesIcon' />
                            <h3 className='text-[#010F58] font-bold text-sm'>Buy a Property</h3>

                        </div>
                        <p className='text-xs text-gray-400 max-w-xs leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum sint repellendus ex neque harum aperiam quisquam, ducimus odio natus dolores magni ipsam dolorum.</p>
                        <button className='text-sm bg-transparent border border-orange-400 text-orange-400'>Find a home</button>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <div className='space-y-5 py-5 px-3'>
                        <div className='flex items-center justify-center gap-2'>
                            <img src={icon} alt="" className='ourServicesIcon' />
                            <h3 className='text-[#010F58] font-bold text-sm'>Sell a Property</h3>

                        </div>
                        <p className='text-xs text-gray-400 max-w-xs leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum sint repellendus ex neque harum aperiam quisquam, ducimus odio natus dolores magni ipsam dolorum.</p>
                        <button className='text-sm bg-transparent border border-orange-400 text-orange-400'>Find a home</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <div className='space-y-5 py-5 px-3'>
                        <div className='flex items-center justify-center gap-2'>
                            <img src={icon} alt="" className='ourServicesIcon' />
                            <h3 className='text-[#010F58] font-bold text-sm'>Rent a Property</h3>

                        </div>
                        <p className='text-xs text-gray-400 max-w-xs leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum sint repellendus ex neque harum aperiam quisquam, ducimus odio natus dolores magni ipsam dolorum.</p>
                        <button className='text-sm bg-transparent border border-orange-400 text-orange-400 '>Find a home</button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default OurServices;