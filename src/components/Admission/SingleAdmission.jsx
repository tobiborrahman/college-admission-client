import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleAdmission = ({ college }) => {
	console.log(college);
	const { _id, college_name } = college;

	const handleAdmission = (id) => {
		console.log(id);
	};
	return (
		<Link to={`/admittedColleges/${_id}`}>
			<div
				onClick={() => handleAdmission(_id)}
				className="flex justify-center items-center h-32 p-5 border hover:bg-gray-200 duration-300"
			>
				<h3 className="text-2xl font-bold">{college_name}</h3>
			</div>
		</Link>
	);
};

export default SingleAdmission;
