import React, { useState } from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import './styles/learn.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

var learnPages = require('../utils/arraySteps');

function Learn(props) {
    const [mainPage, setmainPage] = useState(0)

    const steps = learnPages.map( i => i.pasos)
    
    function buttonClick() {
        setmainPage((mainPage === (learnPages.length) - 1) ? 0 : mainPage + 1)
        window.scroll({
            top: 0,
            left: 100,
            behavior: 'smooth'
          });
    };

    return (
        <div className=' learnBg bg-cover grid grid-rows-6 grid-flow-row h-200vh bg-black-200 pt-[80px]'>
            <div className='row-span-2 grid grid-rows-3 justify-items-center'>
                <h1 className=' stepTitle pt-[10px] basis-10 text-3xl text-center row-span-1'>{learnPages[mainPage].step}</h1>
                <h2 className='text-center text-lg w-1/2 row-span-3'>{learnPages[mainPage].mainText}</h2>
            </div>
            <Swiper className='row-span-3'
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                pagination={{
                    clickable: true,
                    }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                    {steps[mainPage].map((currentCard, index) => {
                        return (
                            <SwiperSlide className='stepSlide'>
                                <div>
                                    <figure className='image-block'>
                                        <h1>Step {index}</h1>
                                        <img src="https://images.pexels.com/photos/6726337/pexels-photo-6726337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        <figcaption>
                                            <h3>
                                                Step {index}
                                            </h3>
                                            <p>{learnPages[mainPage].pasos[index]}</p>
                                        </figcaption>
                                    </figure> 
                                </div>
                            </SwiperSlide>
                        )
                    })};
            </Swiper>
            <div className='row-span-1 grid grid-rows-3 justify-items-center'>
                <div className='row-start-2 row-span-2'>
                </div>
            </div>
            <div className='h-screen grid grid-rows-6 justify-items-center'>
                <h1 className=' videoTitle text-4xl self-end pb-[10px] text-[#00477A] row-span-1'>Video Demonstration</h1>
                <iframe className='self-center row-span-4' width="1080" height="607" src={learnPages[mainPage].videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button className=' font-thin elButton text-xl self-center row-span-1 h-[50px] w-[150px]' 
                onClick={buttonClick}
                >
                        Next Element
                        </button>
            </div>
        </div>
    )
}

export default Learn