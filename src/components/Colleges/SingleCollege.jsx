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
			<div className="card card-compact w-96 bg-gray-50 shadow-xl">
				<figure>
					<img
						className="w-full h-[250px] object-cover"
						src={college_image}
						alt="Shoes"
					/>
				</figure>

				<div className="card-body text-black">
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
