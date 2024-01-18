import leftArr from '../assets/LHS Arrow Icon.png'
import rightArr from '../assets/RHS arrow Icon.png'
import { useSwiper } from 'swiper/react';
const OurServBtn = () => {
    const swiper = useSwiper();
    return (
        <div className=''>
            <button className='' onClick={() => swiper.slidePrev()}>
                <img src={rightArr} alt="" className='w-10 h-10' />
            </button>
            <button className='' onClick={() => swiper.slideNext()}>
                <img src={leftArr} alt="" className='w-10 h-10' />
            </button>
        </div>
    );
};

export default OurServBtn;