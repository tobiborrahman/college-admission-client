import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResearchPaper = () => {
	return (
		<div className="pb-10 md:mx-5">
			<h1 className="text-5xl md:text-8xl font-bold text-center mb-14">
				Research
			</h1>
			<div className="mx-auto md:flex justify-between">
				<div className="w-[300px] text-2xl font-bold shadow-lg rounded-md p-6">
					<div className="text-center">
						<Link>Machine Learning - </Link>
					</div>
				</div>
				<div className="w-[300px] text-2xl font-bold shadow-lg rounded-md p-6">
					<Link>Artificial Intelligence - </Link>
				</div>
				<div className="w-[300px] text-2xl font-bold shadow-lg rounded-md p-6">
					<Link>Cyber Security - </Link>
				</div>
				<div className="w-[300px] text-2xl font-bold shadow-lg rounded-md p-6">
					<Link>Data Science - </Link>
				</div>
			</div>
		</div>
	);
};

export default ResearchPaper;
