import underline from '../assets/head underline.png'
import img1 from '../assets/agent-1.png'
import img2 from '../assets/agent-2.png'
import img3 from '../assets/agent-3.png'


const OurAgents = () => {
    return (
        <div className='py-12 space-y-12'>
            <div className='space-y-5'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-sm font-bold text-center text-navy-blue'>Our Agents</h1>
                    <img src={underline} alt="" className='w-20 h-2 object-contain' />
                </div>
                <h1 className='text-3xl font-bold text-center'>Meet Our Agents</h1>
            </div>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    <div>
                        <img src={img1} alt="" className='w-96 h-96 object-contain' />
                    </div>
                    <div>
                        <img src={img2} alt="" className='w-96 h-96 object-contain' />
                    </div>
                    <div>
                        <img src={img3} alt="" className='w-96 h-96 object-contain' />
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default OurAgents;