import '../styles/browse.css'
import img1 from '../assets/Image(1).png'
import img2 from '../assets/Image(2).png'
import img3 from '../assets/Image(3).png'
import BrowseSlider from './BrowseSlider';
const Browse = () => {
    const slides = [
        { image: img1, title: "beach" },
        { image: img2, title: "boat" },
        { image: img3, title: "forest" }
    ];
    const containerStyles = {
        // width: "500px",
        height: "280px",
        margin: "0 auto",
    };
    return (
        <div className='py-36 flex justify-center items-center'>
            <div style={containerStyles}>
                <BrowseSlider slides={slides} />
            </div>
        </div>
    );
};

export default Browse;