import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

import img1 from '../images/related-1.jpg'
import img2 from '../images/related-2.jpg'
import img3 from '../images/related-3.jpg'
import img4 from '../images/related-4.jpg'
import img5 from '../images/related-5.jpg'
import img6 from '../images/related-6.jpg'

export default function RelatedProducts() {

    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}           // Show 4 slides at a time
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

            >
                <SwiperSlide>
                    <div>
                        <img src={img1} className='img-fluid p-4' />
                        <h6>VOGARD Unisex Genuine Leather Wallet with Zipper</h6>
                        <span>Rs. 459/-</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img2} className='img-fluid p-4' />
                        <h6>VOGARD Unisex Genuine Leather Wallet with Zipper</h6>
                        <span>Rs. 459/-</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img3} className='img-fluid p-4' />
                        <h6>VOGARD Unisex Genuine Leather Wallet with Zipper</h6>
                        <span>Rs. 459/-</span>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img4} className='img-fluid p-4' />
                        <h6>VOGARD Unisex Genuine Leather Wallet with Zipper</h6>
                        <span>Rs. 459/-</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img5} className='img-fluid p-4' />
                        <h6>VOGARD Unisex Genuine Leather Wallet with Zipper</h6>
                        <span>Rs. 459/-</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img6} className='img-fluid p-4' />
                        <h6>VOGARD Unisex Genuine Leather Wallet with Zipper</h6>
                        <span>Rs. 459/-</span>
                    </div>
                </SwiperSlide>
            </Swiper >
        </>
    );
}