import underline from '../assets/head underline.png'
import img1 from '../assets/our property img-1.png'
import img2 from '../assets/our property img-2.png'
import img3 from '../assets/our property img-3.png'
import img4 from '../assets/our property img-4.png'
import img5 from '../assets/our property img-5.png'

import icon from '../assets/our property specs icon.png'
import arrow from '../assets/our-property-arrow-orange.png'
import btnIcon from '../assets/find more btn icon.png'
import rent from '../assets/our-property-for-rent-orange.png'
import sell from '../assets/our-property-for-sell.png'
import buy from '../assets/our-property-for-buy.png'
import loveYellow from '../assets/our-property-love-orange.png'

const OurProperty = () => {
    const data = [
        {
            id: 1,
            image: img1,
            name: "Ready Resort for Sell",
            desc: "Lorem ipsum dolor sit amet consectetur amet consectetur, adipisicing elit.",
            price: 2525,
            // for: "For Rent",
            beds: 3,
            baths: 4,
            parking: 1,
            love: loveYellow,
            for: rent
        },
        {
            id: 2,
            image: img2,
            name: "Ready Resort for Sell",
            desc: "Lorem ipsum dolor sit amet consectetur amet consectetur, adipisicing elit.",
            price: 2525,
            // for: "For Rent",
            beds: 3,
            baths: 4,
            parking: 1,
            love: loveYellow,
            for: sell
        },
        {
            id: 3,
            image: img3,
            name: "Ready Resort for Sell",
            desc: "Lorem ipsum dolor sit amet consectetur amet consectetur, adipisicing elit.",
            price: 2525,
            // for: "For Rent",
            beds: 3,
            baths: 4,
            parking: 1,
            love: loveYellow,
            for: buy
        },
        {
            id: 4,
            image: img4,
            name: "Ready Resort for Sell",
            desc: "Lorem ipsum dolor sit amet consectetur amet consectetur, adipisicing elit.",
            price: 2525,
            // for: "For Rent",
            beds: 3,
            baths: 4,
            parking: 1,
            love: loveYellow,
            for: sell
        },
        {
            id: 5,
            image: img5,
            name: "Ready Resort for Sell",
            desc: "Lorem ipsum dolor sit amet consectetur amet consectetur, adipisicing elit.",
            price: 2525,
            // for: "For Rent",
            beds: 3,
            baths: 4,
            parking: 1,
            love: loveYellow,
            for: rent
        },
        {
            id: 6,
            image: img5,
            name: "Ready Resort for Sell",
            desc: "Lorem ipsum dolor sit amet consectetur amet consectetur, adipisicing elit.",
            price: 2525,
            // for: "For Rent",
            beds: 3,
            baths: 4,
            parking: 1,
            love: loveYellow,
            for: buy
        },
    ]
    return (
        <div className='space-y-9 pb-20'>
            <div className='space-y-3'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[#010F58] text-sm font-bold text-center'>Our Property</h1>
                    <img src={underline} alt="" className='w-20 h-2 object-contain' />
                </div>
                <h1 className='text-3xl font-bold text-center'>Our Explore Property</h1>
            </div>

            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {data.map((item) => (
                        <div key={item.id} className='p-4 space-y-3 hover:bg-navy-blue group transition-all cursor-pointer relative'>
                            <img src={item.image} alt="" className='w-72 h-56' />
                            <div className='absolute top-0 left-4 flex justify-between'>
                                <img src={item.for} alt="" className='w-20 h-20 object-contain' />
                            </div>
                            <div className='absolute top-4 right-8 flex justify-between'>
                                <img src={item.love} alt="" className='w-10 h-10 object-contain' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-orange-500 font-bold group-hover:text-white/75'>{item.name}</h1>
                                <div className='bg-orange-500 text-white px-3'>
                                    <h1>{item.price}</h1>
                                </div>
                            </div>
                            <p className='max-w-[250px] text-xs text-gray-600 group-hover:text-white/75'>{item.desc}</p>
                            <hr />
                            <div className='flex items-center gap-3 group-hover:text-white/75'>
                                <div className='flex items-center gap-2'>
                                    <img src={icon} alt="" />
                                    <h1>Beds: {item.beds}</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={icon} alt="" />
                                    <h1>Baths: {item.baths}</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={icon} alt="" />
                                    <h1>Parking: {item.parking}</h1>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center group-hover:text-white/75'>
                                <button>View Details</button>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-40 h-10  bg-[#010F58] flex items-center justify-around gap-2 px-3'>
                    <button className='text-white text-xs'>View All Property</button>
                    <img src={btnIcon} alt="" className='w-6 h-6' />
                </div>
            </div>
        </div>
    );
};

export default OurProperty;