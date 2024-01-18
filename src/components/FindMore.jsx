import findMoreImg from '../assets/findmoreImg.png'
import findMoreTick from '../assets/find more tick.png'
import findMoreBtn from '../assets/find more btn icon.png'
const FindMore = () => {
    return (
        <div className='flex justify-center items-center mx-auto container px-80'>
            <div className='flex-1'>
                <img src={findMoreImg} alt="" className='w-96 h-96 object-contain' />
            </div>
            <div className='flex-1'>
                <div className='space-y-2'>
                    <h1 className='text-[#010F58] text-sm'>Find More Choose</h1>
                    <h1 className='text-3xl font-semibold'>Why You Choose Our Kavinax Property</h1>
                    <p className='text-xs text-gray-400'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur </p>
                    <div className='space-y-2 grid grid-cols-2 gap-1'>
                        <div className='max-w-[200px]'>
                            <div className='flex items-center gap-2'>
                                <img src={findMoreTick} alt="" />
                                <h1 className='font-bold text-sm'>Trusted by thousands</h1>
                            </div>
                            <h2 className='text-gray-400 text-xs '>Donec sit amet urna libero Quisque efficitur nulla et odio hendrerit </h2>
                        </div>
                        <div className='max-w-[200px]'>
                            <div className='flex items-center gap-2'>
                                <img src={findMoreTick} alt="" />
                                <h1 className='font-bold text-sm'>Trusted by thousands</h1>
                            </div>
                            <h2 className='text-gray-400 text-xs '>Donec sit amet urna libero Quisque efficitur nulla et odio hendrerit </h2>
                        </div>
                        <div className='max-w-[200px]'>
                            <div className='flex items-center gap-2'>
                                <img src={findMoreTick} alt="" />
                                <h1 className='font-bold text-sm'>Trusted by thousands</h1>
                            </div>
                            <h2 className='text-gray-400 text-xs '>Donec sit amet urna libero Quisque efficitur nulla et odio hendrerit </h2>
                        </div>
                        <div className='max-w-[200px]'>
                            <div className='flex items-center gap-2'>
                                <img src={findMoreTick} alt="" />
                                <h1 className='font-bold text-sm'>Trusted by thousands</h1>
                            </div>
                            <h2 className='text-gray-400 text-xs '>Donec sit amet urna libero Quisque efficitur nulla et odio hendrerit </h2>
                        </div>
                    </div>
                    <div className='w-28 h-12 bg-[#010F58] flex items-center justify-around gap-2 px-2'>
                        <button className='text-white text-xs'>Explore more</button>
                        <img src={findMoreBtn} alt="" className='w-6 h-6' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindMore;