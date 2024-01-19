import heroImg from '../assets/hero-right-img.png'
import blue from '../assets/hero-left-blue.png'
import orange from '../assets/hero-left-orange.png'
import heroPlus from '../assets/hero-plus.png'
import heroSearch from '../assets/hero-search.png'
import rightArrow from '../assets/hero-arrow-right.png'
import leftArrow from '../assets/hero-arrow-left.png'

const Hero = () => {
    return (
        <div className='flex items-center justify-between bg-navy-blue relative mb-10'>
            <div className='flex-1 relative'>

                <img src={orange} alt="" className='absolute -top-[400px] left-44 z-0 h-[800px] w-[1200px]' />
                <img src={blue} alt="" className='absolute -top-[400px] left-40 z-20 h-[800px] w-[1200px]' />
                <div className='absolute z-20 left-52 lg:left-72 -top-44 lg:-top-56 space-y-8'>
                    <h1 className='text-4xl lg:text-5xl text-white max-w-sm leading-tight'>Discover More Suitable Property</h1>
                    <p className='text-sm text-white/95 max-w-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sit ad, accusantium mollitia nulla beatae officiis </p>
                    <div className='hidden lg:block'>
                        <div className='bg-orange-600 px-4 pb-3 flex gap-3 w-1/4'>
                            <div className='text-white py-1 '>Sell</div>
                            <div className='bg-white text-orange-600 rounded-b py-1 px-1 font-medium'>Rent</div>
                            <div className='text-white py-1 '>Buy</div>
                        </div>
                        <div className='bg-orange-600 px-4 py-3 flex gap-3 w-[880px]'>
                            <div className='relative space-y-1'>
                                <span className='text-white/90'>Type</span>

                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Property Type"
                                    className="w-full py-1 px-1 shadow-sm placeholder:text-navy-blue placeholder:text-sm placeholder:font-medium"
                                />

                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center top-5">
                                    <button type="button" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>

                                        <img src={heroPlus} alt="" />
                                    </button>
                                </span>
                            </div>
                            <div className='relative space-y-1'>
                                <span className='text-white/90'>Your Location</span>

                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Your Location"
                                    className="w-full py-1 px-1 shadow-sm placeholder:text-navy-blue placeholder:text-sm placeholder:font-medium"
                                />

                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center top-5">
                                    <button type="button" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>

                                        <img src={heroPlus} alt="" />
                                    </button>
                                </span>
                            </div>
                            <div className='relative space-y-1'>
                                <span className='text-white/90'>Bed/Bathrooms</span>

                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="00 Bed/00 Bath"
                                    className="w-full py-1 px-1 shadow-sm placeholder:text-navy-blue placeholder:text-sm placeholder:font-medium"
                                />

                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center top-5">
                                    <button type="button" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>

                                        <img src={heroPlus} alt="" />
                                    </button>
                                </span>
                            </div>
                            <div className='relative space-y-1'>
                                <span className='text-white/90'>Price</span>

                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Price"
                                    className="w-full py-1 px-1 shadow-sm placeholder:text-navy-blue placeholder:text-sm placeholder:font-medium"
                                />

                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center top-5">
                                    <button type="button" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>

                                        <img src={heroPlus} alt="" />
                                    </button>
                                </span>
                            </div>
                            <div className='relative top-5'>
                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Search"
                                    className="w-full py-2 px-1 shadow-sm placeholder:text-navy-blue placeholder:text-sm placeholder:font-medium"
                                />

                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center -top-5">
                                    <button type="button" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>

                                        <img src={heroSearch} alt="" />
                                    </button>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-3'>
                <img src={heroImg} alt=""
                // className='w-[800px] h-[800px] object-contain' 
                />
            </div>
            <div className='absolute left-5 hidden lg:block'>
                <img src={leftArrow} alt="" className='w-16 h-16' />
            </div>
            <div className='absolute right-5 hidden lg:block'>
                <img src={rightArrow} alt="" className='w-16 h-16' />
            </div>
        </div>
    );
};

export default Hero;