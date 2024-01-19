import aboutImg from '../assets/aboutus-image.png'
import tickImg from '../assets/tick vector about.png'
import underline from '../assets/head underline.png'
const About = () => {
    return (
        <div className='flex px-[250px] pb-20'>
            <div className='flex-1'>
                <img src={aboutImg} alt="" className='w-[700px] h-[500px] object-contain' />
            </div>
            <div className='flex-1 py-10'>
                <div className='space-y-8'>
                    <div className='space-y-5'>
                        <div className='flex flex-col '>
                            <h1 className='text-[#010F58] text-sm font-bold'>About Us</h1>
                            <img src={underline} alt="" className='w-20 h-2 object-contain' />
                        </div>
                        <h1 className='text-4xl font-semibold'>We Specialize In Quality
                            Home Renovations</h1>
                    </div>
                    <p className='text-xs text-black/75'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='space-y-2'>
                        <div className='flex items-center gap-4'>
                            <img src={tickImg} alt="" className='w-6 h-6' />
                            <h1 className='font-medium'>Outstanding property</h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={tickImg} alt="" className='w-6 h-6' />
                            <h1 className='font-medium'>Provide the best services for users</h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={tickImg} alt="" className='w-6 h-6' />
                            <h1 className='font-medium'>Modern city location & ecceptional lifestyle</h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={tickImg} alt="" className='w-6 h-6' />
                            <h1 className='font-medium'>Professional & experienced human resources</h1>
                        </div>
                    </div>
                    <p className='text-xs text-black/75 max-w-xs'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore .</p>
                </div>
            </div>
        </div>
    );
};

export default About;