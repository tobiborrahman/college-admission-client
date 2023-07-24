import React from 'react';

const Gallery = () => {
	return (
		<div className="py-20">
			<h1 className="text-5xl md:text-8xl font-bold text-center mb-14">
				Gallery
			</h1>
			<div className="md:flex gap-3 mx-[62px]">
				<div className="group relative">
					<img
						className="md:w-[370px] h-[250px] bg-red-600 mb-3 md:mb-0 backdrop-brightness-25"
						src="https://i.ibb.co/syLNQjH/michael-marsh-U0d-BV-Qei-Yk-unsplash.jpg"
						alt=""
					/>
					<div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
						<p className="text-xl text-white text-center p-4">
							This is the best college in our area. If you can
							join this college then you will have a fantastic
							life.
						</p>
					</div>
				</div>
				<div className="group relative">
					<img
						className="md:w-[370px] h-[250px] bg-red-600 mb-3 md:mb-0 backdrop-brightness-25"
						src="https://i.ibb.co/MhMstGK/olu-famule-Dv2-PNb-MWts-E-unsplash.jpg"
						alt=""
					/>
					<div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
						<p className="text-xl text-white text-center p-4">
							This is the best college in our area. If you can
							join this college then you will have a fantastic
							life.
						</p>
					</div>
				</div>
				<div className="group relative">
					<img
						className="md:w-[370px] h-[250px] bg-red-600 mb-3 md:mb-0 backdrop-brightness-25"
						src="https://i.ibb.co/R3FBXDN/parker-gibbons-kfw-PJie-ZVw-I-unsplash.jpg"
						alt=""
					/>
					<div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
						<p className="text-xl text-white text-center p-4">
							This is the best college in our area. If you can
							join this college then you will have a fantastic
							life.
						</p>
					</div>
				</div>
			</div>
			<div className="md:flex gap-3 mx-[62px] mt-3">
				<div className="group relative">
					<img
						className="md:w-[370px] h-[250px] bg-red-600 mb-3 md:mb-0 backdrop-brightness-25"
						src="https://i.ibb.co/pRxfQrs/porter-raab-gnj9vj-FRY-unsplash.jpg"
						alt=""
					/>
					<div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
						<p className="text-xl text-white text-center p-4">
							This is the best college in our area. If you can
							join this college then you will have a fantastic
							life.
						</p>
					</div>
				</div>
				<div className="group relative">
					<img
						className="md:w-[370px] h-[250px] bg-red-600 mb-3 md:mb-0 backdrop-brightness-25"
						src="https://i.ibb.co/f4LfdVt/porter-raab-Ucr4-Yp-t364-unsplash.jpg"
						alt=""
					/>
					<div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
						<p className="text-xl text-white text-center p-4">
							This is the best college in our area. If you can
							join this college then you will have a fantastic
							life.
						</p>
					</div>
				</div>
				<div className="group relative">
					<img
						className="md:w-[370px] h-[250px] bg-red-600 mb-3 md:mb-0 backdrop-brightness-25"
						src="https://i.ibb.co/ZfWV3SW/ronni-kurtz-e17b7-HW89vc-unsplash.jpg"
						alt=""
					/>
					<div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
						<p className="text-xl text-white text-center p-4">
							This is the best college in our area. If you can
							join this college then you will have a fantastic
							life.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
