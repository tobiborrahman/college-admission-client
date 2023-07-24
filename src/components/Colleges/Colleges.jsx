import React, { useEffect, useState } from 'react';
import SingleCollege from './SingleCollege';

const Colleges = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://college-admission-server-nu.vercel.app/colleges')
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, []);

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-20 mx-10">
			{data.map((college) => (
				<SingleCollege
					key={college._id}
					college={college}
				></SingleCollege>
			))}
		</div>
	);
};

export default Colleges;
