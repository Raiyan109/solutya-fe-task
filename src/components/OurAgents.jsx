import underline from '../assets/head underline.png'
import img1 from '../assets/agent-1.png'
import img2 from '../assets/agent-2.png'
import img3 from '../assets/agent-3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const OurAgents = () => {
    return (
        <div>
            <div>
                <h1 className='text-[#010F58] text-sm font-bold text-center'>Our Agents</h1>
                <img src={underline} alt="" className='' />
            </div>
            <h1 className='text-3xl font-semibold text-center'>Meet Our Agents</h1>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OurAgents;