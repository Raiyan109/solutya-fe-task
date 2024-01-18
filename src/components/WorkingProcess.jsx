import bgImg from '../assets/video image.png'
import workingImg1 from '../assets/Choose Your Property.png'
import workingImg2 from '../assets/Enjoy Property.png'
import workingImg3 from '../assets/Make Payment.png'
import workingImg4 from '../assets/Make Appointment.png'
const WorkingProcess = () => {
    return (
        <div className=''>
            <div
                className="absolute inset-0  bg-transparent bg-gradient-to-r from-black/75 to-white/35 bg-blend-overlay"
            ></div>
            <div className='bg-no-repeat bg-cover bg-center h-96 relative' style={{ backgroundImage: `url("${bgImg}")` }}>
                <div className='grid grid-cols-2 lg:grid-cols-4 bg-transparent absolute bottom-10 left-[500px] py-5 px-3'>
                    <img src={workingImg1} alt="" className='w-52 h-52 object-contain' />
                    <img src={workingImg2} alt="" className='w-52 h-52 object-contain' />
                    <img src={workingImg3} alt="" className='w-52 h-52 object-contain' />
                    <img src={workingImg4} alt="" className='w-52 h-52 object-contain' />
                </div>

            </div>
        </div>
    );
};

export default WorkingProcess;