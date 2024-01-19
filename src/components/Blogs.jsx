import underline from '../assets/head underline.png'
import img1 from '../assets/blogs-1.png'
import img2 from '../assets/blogs-2.png'
import img3 from '../assets/blogs-3.png'
import author1 from '../assets/author-1.png'
import author2 from '../assets/author-2.png'
import author3 from '../assets/author-3.png'
import calender from '../assets/blog-calender.png'
import eye from '../assets/blog-eye.png'
import comment from '../assets/blog-comment.png'
import clockIcon from '../assets/blog-clock-icon.png'
import plusIcon from '../assets/blog-plus-icon.png'
const Blogs = () => {
    const data = [
        {
            id: 1,
            image: img1,
            name: "7 Home Trends That will Shape Your House",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            date: '05 Dec 2022',
            views: 1000,
            comments: 12,
            authorName: 'David Smith',
            authorImg: author1
        },
        {
            id: 2,
            image: img2,
            name: "Ready Resort for Sell",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            date: '05 Dec 2022',
            views: 1000,
            comments: 12,
            authorName: 'John Doe',
            authorImg: author2
        },
        {
            id: 3,
            image: img3,
            name: "Ready Resort for Sell",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            date: '05 Dec 2022',
            views: 1000,
            comments: 12,
            authorName: 'David Smith',
            authorImg: author3
        }
    ]
    return (
        <div>
            <div>
                <h1 className='text-[#010F58] text-sm font-bold'>Blogs and News</h1>
                <img src={underline} alt="" className='' />
            </div>
            <h1 className='text-3xl font-semibold'>Our Latest Blogs and News</h1>

            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {data.map((item) => (
                        <div key={item.id} className='p-2 space-y-5'>
                            <img src={item.image} alt="" />
                            <div className='flex items-center justify-around'>
                                <div className='flex items-center gap-1'>
                                    <img src={calender} alt="" />
                                    <h1>{item.date}</h1>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img src={eye} alt="" />
                                    <h1>{item.views}</h1>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img src={comment} alt="" />
                                    <h1>{item.comments} Comments </h1>
                                </div>
                            </div>
                            <div>
                                <h1 className='underline text-xl text-orange-600 '>{item.name}</h1>
                            </div>
                            <p className='max-w-md text-xs text-gray-600'>{item.desc}</p>
                            <hr />
                            <div className='flex items-center justify-between gap-3 text-sm text-gray-600'>
                                <div className='flex items-center gap-2'>
                                    <img src={item.authorImg} alt="" />
                                    <h1>{item.authorName}</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={clockIcon} alt="" />
                                    <h1>2 minutes ago</h1>
                                </div>

                            </div>
                            <hr />
                            <div className='flex justify-between items-center'>
                                <button className='text-orange-600'>Read More</button>
                                <img src={plusIcon} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;