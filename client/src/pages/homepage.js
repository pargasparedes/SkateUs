import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Parallax } from 'swiper';
import React, { useRef, useState } from "react";
import styles from './styles/homepage.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Homepage() {

    return (
        <div className=' h-screen'>
        <Swiper
            style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation]}
            className="mySwiper"
        >
            <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
            <div className="title pt-[80px]" data-swiper-parallax="-300">
                <h1 className=' font-thin text-[#00477A] text-7xl'>Want To Pass Your Freeskate Test?</h1>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
                <h2 className='pt-[10px] font-normal text-white text-4xl'>Login Or Create Account</h2>
            </div>
            <div className="text" data-swiper-parallax="-100">
                <p className=' font-light text-[#00477A] pt-[10px] text-4xl'>
                We know how difficul it is to find good documentation on ice skating elements, techniques, how to do them properly. That is why created SkateUs. Swipe for more...
                </p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=" title pt-[80px]" data-swiper-parallax="-300">
                <h1 className='text-7xl font-thin'>Learn Everything You Need Online</h1>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
                <h2 className='text-[#00477A] pt-[10px] text-4xl'>That's right we'll teach you what you need!</h2>
            </div>
            <div className="text" data-swiper-parallax="-100">
                <p className=' font-light pt-[10px] text-3xl'>
                    We found the best professional coaches in ice skating to teach you all you need to know about all the elements required to submit your test. We have listed all the elements you need for the video submition, each elements has a step-by-step tutorial and as a bonus for you one of our top coaches explains and demonstartes you how to execute them. Swipe for more...
                </p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="title pt-[80px]" data-swiper-parallax="-300">
                <h1 className=' font-thin text-7xl'>Yes! Submit Your Program And Finally Pass Dat Test!</h1>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
                <h2 className=' text-[#00477A] pt-[10px] text-4xl'>Of course we created a platform for tests submition.</h2>
            </div>
            <div className="text" data-swiper-parallax="-100">
                <p className=' font-light pt-[10px] text-3xl'>
                    In our text submition platform you find a form to fill out. All you need is your basic information, your video url, meaning you can submit your video to any of your favorite websites like Youtube or Vinmeo, just use the link the provide and boom! That is ir! Wait for an email when your test gets scored! Good Luck!
                </p>
            </div>
            </SwiperSlide>
        </Swiper>
    </div>
    )
};

export default Homepage;