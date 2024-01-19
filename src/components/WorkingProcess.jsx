import bgImg from '../assets/video image.png'
import workingImg1 from '../assets/Choose Your Property.png'
import workingImg2 from '../assets/Enjoy Property.png'
import workingImg3 from '../assets/Make Payment.png'
import workingImg4 from '../assets/Make Appointment.png'
import underline from '../assets/head underline.png'
const WorkingProcess = () => {
    return (
        <div className='py-10'>
            <div className='bg-no-repeat bg-cover bg-center h-[500px] relative' style={{ backgroundImage: `url("${bgImg}")` }}>
                <div className='absolute bottom-96 left-[800px] z-10 text-white space-y-3'>
                    <div>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-sm font-bold text-center'>Working Process</h1>
                            <img src={underline} alt="" className='w-20 h-2 object-contain' />
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold text-center'>How Do We Work</h1>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 bg-transparent absolute bottom-20 left-[500px] py-5 px-3 z-10'>
                    <img src={workingImg1} alt="" className='w-56 h-56 object-contain' />
                    <img src={workingImg2} alt="" className='w-56 h-56 object-contain' />
                    <img src={workingImg3} alt="" className='w-56 h-56 object-contain' />
                    <img src={workingImg4} alt="" className='w-56 h-56 object-contain' />
                </div>
                <div
                    className="absolute top-0 inset-0  bg-transparent bg-gradient-to-r from-indigo-800/80 to-indigo-800/80 bg-blend-overlay"
                ></div>
            </div>
        </div>
    );
};

export default WorkingProcess;