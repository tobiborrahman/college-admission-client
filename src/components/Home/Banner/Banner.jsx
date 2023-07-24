import React from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	return (
		<div className="mb-10 w-[100%]">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				className="mySwiper w-full"
			>
				<SwiperSlide>
					<div>
						<img
							className="w-[100%] h-[100vh]"
							src="https://i.ibb.co/MhMstGK/olu-famule-Dv2-PNb-MWts-E-unsplash.jpg"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img
							className="w-[100%] h-[100vh]"
							src="https://i.ibb.co/R3FBXDN/parker-gibbons-kfw-PJie-ZVw-I-unsplash.jpg"
							alt=""
						/>
					</div>
				</SwiperSlide>

				<div className="autoplay-progress" slot="container-end">
					<svg viewBox="0 0 48 48" ref={progressCircle}>
						<circle cx="24" cy="24" r="20"></circle>
					</svg>
					<span ref={progressContent}></span>
				</div>
			</Swiper>
		</div>
	);
};

export default Banner;
