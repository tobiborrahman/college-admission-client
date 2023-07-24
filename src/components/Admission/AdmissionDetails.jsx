import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const AdmissionDetails = () => {
	const admittedCollege = useLoaderData();
	const { college_name } = admittedCollege;
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		fetch('http://localhost:5000/candidateColleges', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		reset();
	};

	return (
		<div className="flex justify-center items-center py-20">
			<div className="w-[800px] p-10 border">
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1 className="text-center text-[#0C4B65] text-6xl font-bold pb-10">
						Candidate Details
					</h1>
					<div className="md:flex justify-center items-center">
						<div className="w-full mr-3">
							<input
								type="text"
								className="border py-2 w-full mb-3 pl-3"
								placeholder="Candidate Name*"
								{...register('name', {
									required: true,
									maxLength: 80,
								})}
							/>
							<br />
							<input
								type="text"
								className="border py-2 w-full mb-3 pl-3"
								placeholder="Subject*"
								{...register('name', {
									required: true,
									maxLength: 80,
								})}
							/>
							<br />
							<input
								type="email"
								className="border py-2 w-full mb-3 pl-3"
								placeholder="Candidate Email*"
								{...register('email', {
									required: true,
								})}
							/>
						</div>
						<div className="w-full">
							<input
								type="text"
								className="border py-2 w-full mb-3 pl-3"
								placeholder="Phone Number*"
								{...register('phone number', {
									required: true,
								})}
							/>
							<br />
							<input
								type="text"
								className="border py-2 w-full mb-3 pl-3"
								placeholder="Address*"
								{...register('address', {
									required: true,
								})}
							/>
							<br />
							<input
								type="text"
								className="border py-2 w-full mb-3 pl-3"
								placeholder="Date of Birth*"
								{...register('DOB', {
									required: true,
								})}
							/>
						</div>
					</div>
					<input
						type="url"
						className="border py-2 w-full mb-3 pl-3"
						placeholder="Photo Url*"
						{...register('photoUrl', {
							required: true,
						})}
					/>
					<br />

					<input
						className="py-2 w-full text-white text-2xl duration-700 font-bold hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65] mt-3 "
						type="submit"
						value="Submit"
					/>
				</form>
			</div>
		</div>
	);
};

export default AdmissionDetails;
