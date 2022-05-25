import React from 'react';


const Banner = () => {

    return (
        <div id="animation-carousel" className="relative" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div className="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                {/* <!-- Item 1 --> */}
                <div className="hidden duration-200 ease-linear" data-carousel-item>
                    <img src="https://i.ibb.co/ZY6kSLV/istockphoto-1176295972-612x612.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="1" />
                </div>
                {/* <!-- Item 2 --> */}
                <div className="hidden duration-200 ease-linear" data-carousel-item>
                    <img src="https://i.ibb.co/ZY6kSLV/istockphoto-1176295972-612x612.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="2" />
                </div>
                {/* <!-- Item 3 --> */}
                <div className="hidden duration-200 ease-linear" data-carousel-item="active">
                    <img src="https://i.ibb.co/ZY6kSLV/istockphoto-1176295972-612x612.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="3" />
                </div>
                {/* <!-- Item 4 --> */}
                <div className="hidden duration-200 ease-linear" data-carousel-item>
                    <img src="https://i.ibb.co/ZY6kSLV/istockphoto-1176295972-612x612.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="4" />
                </div>
                {/* <!-- Item 5 --> */}
                <div className="hidden duration-200 ease-linear" data-carousel-item>
                    <img src="https://i.ibb.co/ZY6kSLV/istockphoto-1176295972-612x612.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="5" />
                </div>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="hidden">Previous</span>
                </span>
            </button>
            <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="hidden">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Banner;