import React, { useState } from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

var learnPages = require('../utils/arraySteps');

function Learn(props) {
    const [mainPage, setmainPage] = useState(0)

    const displayVideo = learnPages[mainPage].videoUrl
    // const currentPage[] = (learnPages[mainPage].pasos)
    // console.log(learnPages[mainPage].pasos[1]);
// console.log(steps[mainPage].length)
    // console.log(steps);

    const steps = learnPages.map( i => i.pasos)
    

    return (
        <div className='grid grid-rows-6 grid-flow-row h-screen bg-black-200 pt-[80px]'>
            <div className='row-span-1 grid grid-rows-3 justify-items-center'>
                <h1 className='basis-10 text-center row-span-1'>{learnPages[mainPage].step}</h1>
                <h2 className='text-center w-1/2 row-span-3'>{learnPages[mainPage].mainText}</h2>
            </div>
            <Swiper className='row-span-4'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                    {steps[mainPage].map((currentCard, index) => {
                        return (
                            <SwiperSlide>{learnPages[mainPage].pasos[index]}</SwiperSlide>
                        )
                    })};
            </Swiper>
            <div className='row-span-1 grid grid-rows-3 justify-items-center'>
                <div className='row-start-2 row-span-2'>
                    <button className='' onClick={() => setmainPage((mainPage === (learnPages.length) - 1) ? 0 : mainPage + 1)}>Next Step</button>
                </div>
            </div>
        </div>
    )
}

export default Learn