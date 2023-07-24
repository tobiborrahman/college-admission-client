import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleCollege = ({ college }) => {
	const {
		_id,
		college_image,
		college_name,
		college_rating,
		admission_date,
		research_publications,
	} = college;

	const handleCard = (id) => {
		console.log(id);
	};

	return (
		<div>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<div className="group relative">
					<figure>
						<img
							className="w-full h-[250px] object-cover"
							src={college_image}
							alt="Shoes"
						/>
					</figure>
					<div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
						<h1 className="text-2xl text-white">
							Fiction T-Shirt Store
						</h1>
						<a
							className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
							href="#"
						>
							Continue Shopping
						</a>
					</div>
				</div>
				<div className="card-body">
					<h2 className="card-title text-2xl">{college_name}</h2>
					<p className="text-xl">Rating: {college_rating}</p>
					<p className="text-xl">Admission Date: {admission_date}</p>
					<p className="text-xl">
						Research Publications: {research_publications}
					</p>
					<div className="card-actions justify-center">
						<button
							onClick={() => handleCard(_id)}
							className="btn btn-primary w-full"
						>
							<Link to={`/colleges/${_id}`}>Details</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCollege;
