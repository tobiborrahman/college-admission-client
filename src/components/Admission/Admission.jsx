import React, { useEffect, useState } from 'react';
import SingleAdmission from './SingleAdmission';

const Admission = () => {
	const [admitCollege, setAdmitCollege] = useState([]);

	useEffect(() => {
		fetch('https://college-admission-server-nu.vercel.app/admittedColleges')
			.then((res) => res.json())
			.then((data) => {
				setAdmitCollege(data);
			});
	}, []);

	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-3 py-20">
			{admitCollege.map((college) => (
				<SingleAdmission
					key={college._id}
					college={college}
				></SingleAdmission>
			))}
		</div>
	);
};

export default Admission;
