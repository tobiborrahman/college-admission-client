import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
	return (
		<div className="mx-auto md:mx-12 py-10">
			<h1 className="text-5xl md:text-8xl font-bold text-center mb-14">
				Colleges
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3">
				<div className="card card-compact w-96 bg-base-100 shadow-xl mb-4 md:mb-0">
					<figure>
						<img
							src="https://i.ibb.co/syLNQjH/michael-marsh-U0d-BV-Qei-Yk-unsplash.jpg"
							alt="Shoes"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Imperial College</h2>
						<p>Admission Date: 15 Jun - 25 Jun</p>
						<p>See Events</p>
						<p>Research History</p>
						<p>Sports</p>
						<div className="card-actions justify-center">
							<button className="btn btn-primary w-full">
								<Link to="/colleges">Details</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="card card-compact w-96 bg-base-100 shadow-xl mb-4 md:mb-0">
					<figure>
						<img
							src="https://i.ibb.co/syLNQjH/michael-marsh-U0d-BV-Qei-Yk-unsplash.jpg"
							alt="Shoes"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Imperial College</h2>
						<p>Admission Date: 15 Jun - 25 Jun</p>
						<p>See Events</p>
						<p>Research History</p>
						<p>Sports</p>
						<div className="card-actions justify-center">
							<button className="btn btn-primary w-full">
								<Link to="/colleges">Details</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="card card-compact w-96 bg-base-100 shadow-xl mb-4 md:mb-0">
					<figure>
						<img
							src="https://i.ibb.co/syLNQjH/michael-marsh-U0d-BV-Qei-Yk-unsplash.jpg"
							alt="Shoes"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Imperial College</h2>
						<p>Admission Date: 15 Jun - 25 Jun</p>
						<p>See Events</p>
						<p>Research History</p>
						<p>Sports</p>
						<div className="card-actions justify-center">
							<button className="btn btn-primary w-full">
								<Link to="/colleges">Details</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
