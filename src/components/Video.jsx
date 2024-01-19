import bgImg from '../assets/video image.png'
import playImg from '../assets/Play.png'
import cardImg1 from '../assets/Properties Listed.png'
import cardImg2 from '../assets/Realtor Awards.png'
import cardImg3 from '../assets/Properties Sold.png'
import cardImg4 from '../assets/Satisfied Clients.png'
const Video = () => {
    return (
        <div className='py-10'>
            <div className='bg-no-repeat bg-cover bg-center h-[500px] relative ' style={{ backgroundImage: `url("${bgImg}")` }}>
                <div className='flex justify-center items-center flex-col absolute top-20 left-80 lg:left-[700px] z-10'>
                    <img src={playImg} alt="" />
                    <h1 className='text-4xl text-white font-semibold'>Watch Our Video Tutorial</h1>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 bg-white absolute -bottom-32 left-[430px] py-9 px-16 z-10 shadow-lg'>
                    <img src={cardImg1} alt="" className='w-52 h-52 object-contain' />
                    <img src={cardImg2} alt="" className='w-52 h-52 object-contain' />
                    <img src={cardImg3} alt="" className='w-52 h-52 object-contain' />
                    <img src={cardImg4} alt="" className='w-52 h-52 object-contain' />
                </div>
                <div
                    className="absolute top-0 inset-0  bg-transparent bg-gradient-to-r from-indigo-800/60 to-indigo-800/60 bg-blend-overlay"
                ></div>
            </div>
        </div>
    );
};

export default Video;