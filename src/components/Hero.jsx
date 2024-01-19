import heroImg from '../assets/hero-right-img.png'
import blue from '../assets/hero-left-blue.png'
import orange from '../assets/hero-left-orange.png'

const Hero = () => {
    return (
        <div className='flex items-center justify-between bg-navy-blue'>
            <div className='flex-1 relative'>

                <img src={orange} alt="" className='absolute -top-[400px] left-44 z-0 h-[800px] w-[1200px]' />
                <img src={blue} alt="" className='absolute -top-[400px] left-40 z-20 h-[800px] w-[1200px]' />
            </div>
            <div className='flex-3'>
                <img src={heroImg} alt=""
                // className='w-[800px] h-[800px] object-contain' 
                />
            </div>
        </div>
    );
};

export default Hero;