import React from 'react';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Testimonial.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

const Testimonial = () => {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};
	return (
		<div className="h-[400px] pb-40">
			<h1 className="text-5xl md:text-8xl font-bold text-center">
				Testimonial
			</h1>

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
				className="mySwiper"
			>
				<SwiperSlide>
					<div>
						<p className="px-60 text-center mb-3">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Accusamus dolore exercitationem reprehenderit
							beatae dolores! Corrupti, quos quam? Nesciunt
							voluptas distinctio dignissimos, cupiditate nemo
							facere perferendis.
						</p>
						<Rating
							className="mx-auto"
							style={{ maxWidth: 180 }}
							value={4.5}
							readOnly
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<p className="px-60 text-center mb-3">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Accusamus dolore exercitationem reprehenderit
							beatae dolores! Corrupti, quos quam? Nesciunt
							voluptas distinctio dignissimos, cupiditate nemo
							facere perferendis.
						</p>
						<Rating
							className="mx-auto"
							style={{ maxWidth: 180 }}
							value={4.5}
							readOnly
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<p className="px-60 text-center mb-3">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Accusamus dolore exercitationem reprehenderit
							beatae dolores! Corrupti, quos quam? Nesciunt
							voluptas distinctio dignissimos, cupiditate nemo
							facere perferendis.
						</p>
						<Rating
							className="mx-auto"
							style={{ maxWidth: 180 }}
							value={4.5}
							readOnly
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<p className="px-60 text-center mb-3">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Accusamus dolore exercitationem reprehenderit
							beatae dolores! Corrupti, quos quam? Nesciunt
							voluptas distinctio dignissimos, cupiditate nemo
							facere perferendis.
						</p>
						<Rating
							className="mx-auto"
							style={{ maxWidth: 180 }}
							value={4.5}
							readOnly
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

export default Testimonial;
