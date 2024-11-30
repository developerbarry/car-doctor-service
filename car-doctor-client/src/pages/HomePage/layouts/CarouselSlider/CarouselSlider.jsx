import { useState } from "react";

const CarouselSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'https://i.ibb.co.com/cQNfZM6/1.jpg',
        'https://i.ibb.co.com/9ZBvdGr/2.jpg',
        'https://i.ibb.co.com/dmjF99b/3.jpg',
        'https://i.ibb.co.com/KLnSHnR/4.jpg',
        'https://i.ibb.co.com/PcWnVS5/5.jpg',
        'https://i.ibb.co.com/LhGgbSZ/6.jpg',
    ];


    const handleNext = (idx) => {
        let nextIndex = idx;
        const imgLength = images.length - 1;
        if (nextIndex === imgLength) {
            nextIndex = 0;
        } else {
            nextIndex = nextIndex + 1;
        }

        setCurrentIndex(nextIndex)
    };


    const handlePrev = (idx) => {
        let prevIndex = idx;
        if (prevIndex === 0) {
            prevIndex = images.length - 1;
        } else {
            prevIndex = prevIndex - 1;
        }

        setCurrentIndex(prevIndex);
    };


    return (
        <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
            <div className="relative w-full">
                
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <img
                                src={image}
                                className="absolute block w-full h-full object-cover"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Slider controls */}
                <button
                    type="button"
                    onClick={() => handlePrev(currentIndex)}
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    onClick={() => handleNext(currentIndex)}
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CarouselSlider;
