import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleCollege = ({ college }) => {
	const [collegeCard, setCollegeCard] = useState();

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
		useEffect(() => {
			fetch(`http://localhost:5000/colleges/${id}`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				});
		}, []);
	};

	return (
		<div>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img
						className="w-full h-[250px]"
						src={college_image}
						alt="Shoes"
					/>
				</figure>
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
							<Link>Details</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCollege;
