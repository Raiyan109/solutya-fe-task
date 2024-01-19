import { useState } from "react";
import leftArr from '../assets/LHS Arrow Icon.png'
import rightArr from '../assets/RHS arrow Icon.png'
const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const rightArrowStyles = {
    position: "absolute",
    top: "-75px",
    // transform: "translate(0, -50%)",
    right: "40px",
    zIndex: 1,
    cursor: "pointer",
};

const leftArrowStyles = {
    position: "absolute",
    top: "-75px",
    // transform: "translate(0, -50%)",
    right: "90px",
    zIndex: 1,
    cursor: "pointer",
};

const sliderStyles = {
    position: "relative",
    height: "100%",
};


const BrowseSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const slideStylesWidthBackground = {
        // ...slideStyles,
        // backgroundImage: `url(${slides[currentIndex].image})`,
    };
    return (
        <div style={sliderStyles}>
            <div>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    <img src={rightArr} alt="" className="w-10 h-10" />
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    <img src={leftArr} alt="" className="w-10 h-10" />
                </div>
            </div>
            <div className="absolute -top-20">
                <h1 className="text-4xl text-navy-blue font-bold">Browse By Categories</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div
                    // style={slideStylesWidthBackground} 
                    className="flex gap-3 items-center bg-gray-50"
                >
                    <img src={slides[currentIndex].image} alt="" />
                    <div className="flex flex-col justify-center space-y-3">
                        <h1 className="text-navy-blue font-medium">Apartment</h1>
                        <h4 className="text-xs text-gray-600 max-w-[120px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                        <h5 className="text-xs text-navy-blue">22 Property</h5>
                    </div>
                </div>
                <div
                    // style={slideStylesWidthBackground} 
                    className="flex gap-3 items-center bg-gray-50"
                >
                    <img src={slides[currentIndex].image} alt="" />
                    <div className="flex flex-col justify-center space-y-3">
                        <h1 className="text-navy-blue font-medium">Apartment</h1>
                        <h4 className="text-xs text-gray-600 max-w-[120px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                        <h5 className="text-xs text-navy-blue">22 Property</h5>
                    </div>
                </div>
                <div
                    // style={slideStylesWidthBackground} 
                    className="flex gap-3 items-center bg-gray-50 w-96"
                >
                    <img src={slides[currentIndex].image} alt="" />
                    <div className="flex flex-col justify-center space-y-3">
                        <h1 className="text-navy-blue font-medium">Apartment</h1>
                        <h4 className="text-xs text-gray-600 max-w-[120px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                        <h5 className="text-xs text-navy-blue">22 Property</h5>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BrowseSlider;