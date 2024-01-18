import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import '../styles/browseBtn.css'
import { useSwiper } from 'swiper/react';
const BrowseBtn = () => {
    const swiper = useSwiper();
    return (
        <div className='browseButtonContainer'>
            <button className='browseBtn1' onClick={() => swiper.slidePrev()}>
                <IoIosArrowBack />
            </button>
            <button className='browseBtn2' onClick={() => swiper.slideNext()}>
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default BrowseBtn;