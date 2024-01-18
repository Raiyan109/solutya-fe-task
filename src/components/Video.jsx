import bgImg from '../assets/video image.png'
import playImg from '../assets/Play.png'
import cardImg1 from '../assets/Properties Listed.png'
import cardImg2 from '../assets/Realtor Awards.png'
import cardImg3 from '../assets/Properties Sold.png'
import cardImg4 from '../assets/Satisfied Clients.png'
const Video = () => {
    return (
        <div className=''>
            <div
                className="absolute inset-0  bg-transparent bg-gradient-to-r from-black/75 to-white/35 bg-blend-overlay"
            ></div>
            <div className='bg-no-repeat bg-cover bg-center h-96 relative' style={{ backgroundImage: `url("${bgImg}")` }}>
                <div className='flex justify-center items-center flex-col absolute top-20 left-80 lg:left-[700px]'>
                    <img src={playImg} alt="" />
                    <h1 className='text-4xl text-white'>Watch Our Video Tutorial</h1>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 bg-white absolute -bottom-32 left-[500px] py-5 px-3'>
                    <img src={cardImg1} alt="" className='w-52 h-52 object-contain' />
                    <img src={cardImg2} alt="" className='w-52 h-52 object-contain' />
                    <img src={cardImg3} alt="" className='w-52 h-52 object-contain' />
                    <img src={cardImg4} alt="" className='w-52 h-52 object-contain' />
                </div>
            </div>
        </div>
    );
};

export default Video;