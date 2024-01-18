import aboutImg from '../assets/aboutus-image.png'
import tickImg from '../assets/tick vector about.png'

const About = () => {
    return (
        <div className='flex justify-center items-center mx-auto container px-96'>
            <div className='flex-1'>
                <img src={aboutImg} alt="" className='w-80 h-80 object-contain' />
            </div>
            <div className='flex-1'>
                <div>
                    <h1 className='text-[#010F58] text-sm'>About us</h1>
                    <h1 className='text-3xl font-semibold'>We Specialize In Quality
                        Home Renovations</h1>
                    <p className='text-xs text-gray-400'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='space-y-2'>
                        <div className='flex items-center gap-2'>
                            <img src={tickImg} alt="" />
                            <h1>Outstanding property</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={tickImg} alt="" />
                            <h1>Outstanding property</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={tickImg} alt="" />
                            <h1>Outstanding property</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={tickImg} alt="" />
                            <h1>Outstanding property</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={tickImg} alt="" />
                            <h1>Outstanding property</h1>
                        </div>
                    </div>
                    <p className='text-xs text-gray-400'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
};

export default About;