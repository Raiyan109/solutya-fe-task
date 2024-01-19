import bg from '../assets/newsletter-bg.png'
import icon from '../assets/news-icon.png'
const NewsLetter = () => {
    return (
        <div className='relative'>
            <div
                className="absolute inset-0  bg-transparent bg-gradient-to-r from-navy-blue to-navy-blue bg-blend-overlay"
            ></div>
            <div className='bg-no-repeat bg-cover bg-center h-[500px] relative' style={{ backgroundImage: `url("${bg}")` }}>
                <div className='absolute bottom-44 left-[700px] space-y-8 flex flex-col items-center justify-center'>
                    <h1 className='text-5xl font-semibold text-center text-white'>Subscribe our Newsletter</h1>
                    <p className='text-white/75 text-xs max-w-sm text-center'>Be the first one to know  about discounts, offers and events. Unsubscribe whenever you like.</p>
                    <div className="flex items-center bg-white pl-2 pr-2 h-20 md:h-12">
                        <input type="text"
                            className="inputText px-12 md:px-[115px] py-2 md:py-0 placeholder:text-gray-300"
                            placeholder="Enter your Email"
                        />
                        <div className='bg-transparent md:bg-orange-600 text-orange-400 md:text-white text-md md:text-sm font-bold md:font-normal py-2 px-7  flex items-center'>
                            <button className=''>Subscribe Now</button>

                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 bg-transparent absolute bottom-20 left-[500px] py-5 px-3'>
                    {/* <img src={workingImg1} alt="" className='w-52 h-52 object-contain' />
                    <img src={workingImg2} alt="" className='w-52 h-52 object-contain' />
                    <img src={workingImg3} alt="" className='w-52 h-52 object-contain' />
                    <img src={workingImg4} alt="" className='w-52 h-52 object-contain' /> */}
                </div>

            </div>
        </div>
    );
};

export default NewsLetter;