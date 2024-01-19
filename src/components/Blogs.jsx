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
            desc: "Duis aute irure dolor in reprehenderit into volupjl tate velit esse cillum dolore eu fugiat nulla partr iatur sunt in culp qui officia deserunt mollit",
            date: '05 Dec 2022',
            views: 1000,
            comments: 12,
            authorName: 'David Smith',
            authorImg: author1
        },
        {
            id: 2,
            image: img2,
            name: "Renovating a Living Room? Experts Share Their Secrets",
            desc: "Duis aute irure dolor in reprehenderit into volupjl tate velit esse cillum dolore eu fugiat nulla partr iatur sunt in culp qui officia deserunt mollit",
            date: '05 Dec 2022',
            views: 1000,
            comments: 12,
            authorName: 'John Doe',
            authorImg: author2
        },
        {
            id: 3,
            image: img3,
            name: "Recent Commercial Real Estate Transactions",
            desc: "Duis aute irure dolor in reprehenderit into volupjl tate velit esse cillum dolore eu fugiat nulla partr iatur sunt in culp qui officia deserunt mollit",
            date: '05 Dec 2022',
            views: 1000,
            comments: 12,
            authorName: 'David Smith',
            authorImg: author3
        }
    ]
    return (
        <div className='my-32 space-y-10'>
            <div className='space-y-5 pl-[400px]'>
                <div className='flex flex-col'>
                    <h1 className='text-sm font-bold text-navy-blue'>Blogs & News</h1>
                    <img src={underline} alt="" className='w-20 h-2 object-contain' />
                </div>
                <h1 className='text-3xl font-bold'>Our Latest Blogs and News</h1>
            </div>

            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {data.map((item) => (
                        <div key={item.id} className='p-5 space-y-5  shadow-lg'>
                            <div className='flex justify-center items-center'>
                                <img src={item.image} alt="" className='w-80 h-60' />
                            </div>
                            <div className='flex items-center justify-around text-sm'>
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
                                <h1 className='underline text-lg text-orange-600 font-semibold max-w-xs'>{item.name}</h1>
                            </div>
                            <p className='max-w-xs text-xs text-gray-600'>{item.desc}</p>
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