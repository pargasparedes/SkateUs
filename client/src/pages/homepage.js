import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Parallax } from 'swiper';
import React, { useRef, useState } from "react";
import './styles/homepage.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Homepage() {

    return (
        <div className=' h-screen py-[80px]'>
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
            style={{
                "backgroundImage":
                "url(https://swiperjs.com/demos/images/nature-1.jpg)",
            }}
            data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
                Slide 1
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
                <p>
                hi
                </p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
                Slide 2
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
                <p>
                hi
                </p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
                Slide 3
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
                <p>
                hi
                </p>
            </div>
            </SwiperSlide>
        </Swiper>
    </div>
    )
};

export default Homepage;