import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
	const singleCollege = useLoaderData();

	const {
		college_image,
		college_name,
		college_rating,
		admission_date,
		research_publications,
		details,
	} = singleCollege;

	return (
		<div className="mx-20 py-20">
			<h2 className="text-5xl text-center py-10 font-bold">
				{college_name}
			</h2>
			<div className=" bg-base-100 shadow-xl p-10">
				<figure>
					<img
						className="w-full h-[400px]"
						src={college_image}
						alt="Album"
					/>
				</figure>
				<div className="mt-5">
					<p className="text-xl">
						<span className="font-bold">Admission Open from:</span>{' '}
						{admission_date}
					</p>
					<p className="text-xl">
						<span className="font-bold">College rating:</span>{' '}
						{college_rating}
					</p>
					<p className="text-xl">
						<span className="font-bold">
							Research that our students completed:{' '}
						</span>{' '}
						{research_publications}
					</p>
					<p className="text-xl">
						<span className="font-bold">
							Different events that students can join:{' '}
						</span>
						{details.events}
					</p>
					<p className="text-xl">
						<span className="font-bold">Sports facilities:</span>{' '}
						{details.sports_facilities}
					</p>
					<div className="card-actions justify-center mt-5">
						<button className="btn btn-primary w-[200px]">
							Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CollegeDetails;
