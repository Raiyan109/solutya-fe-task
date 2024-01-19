import img1 from '../assets/testi-1.png'
import img2 from '../assets/testi-2.png'
import img3 from '../assets/testi-3.png'
import { IoStar, IoStarHalf } from "react-icons/io5";
import underline from '../assets/head underline.png'

const Testimonials = () => {
    const data = [
        {
            id: 1,
            image: img1,
            name: "Courtney Henry",
            desc: "Dramatically supply transparent deliverab before & you backward comp internal or sources. ",
            desig: 'Sr. UX/UI Designer'
        },
        {
            id: 2,
            image: img2,
            name: "Leslie Alexander",
            desc: "Dramatically supply transparent deliverab before & you backward comp internal or sources. ",
            desig: 'Bank of America'
        },
        {
            id: 3,
            image: img3,
            name: "Madge Marvin",
            desc: "Dramatically supply transparent deliverab before & you backward comp internal or sources. ",
            desig: 'Web Developer'
        }
    ]
    return (
        <div className='py-12 space-y-28'>
            <div className='space-y-5'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-sm font-bold text-center text-navy-blue'>Testimonials</h1>
                    <img src={underline} alt="" className='w-20 h-2 object-contain' />
                </div>
                <h1 className='text-3xl font-bold text-center'>Clients Feedback</h1>
            </div>

            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        data.map(({ image, name, desc, desig, id }) => (
                            <div key={id} className='bg-gray-100 rounded-xl shadow-lg p-4 space-y-3 relative'>
                                <img src={image} alt="" className='absolute -top-10 w-20 h-20 -left-5' />
                                <div className='text-orange-600 flex items-center gap-2'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStarHalf />
                                </div>
                                <p className='max-w-[300px] text-gray-600 text-sm'>{desc}</p>
                                <h1 className='text-xl text-navy-blue font-semibold'>{name}</h1>
                                <h1 className='text-md text-orange-600'>{desig}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;