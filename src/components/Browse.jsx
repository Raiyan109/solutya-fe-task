import '../styles/browse.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import BrowseBtn from './BrowseBtn';
import img1 from '../assets/Image(1).png'
import img2 from '../assets/Image(2).png'
import img3 from '../assets/Image(3).png'
const Browse = () => {
    return (
        <div className='browseContainer px-2 md:px-10 lg:px-52'>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className='browseHeader'>
                    <h1 className='font-medium'>Popular</h1>
                </div>
                <div className='browseArrow'>
                    {/* <div>
                        <button className="text-orange-400"

                        >Add More</button>
                    </div> */}

                    <BrowseBtn />
                </div>
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h5 className='text-center text-gray-500 content'>appartment</h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h5 className='text-center text-gray-500'>appartment</h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h5 className='text-center text-gray-500'>appartment</h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h5 className='text-center text-gray-500'>appartment</h5>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Browse;