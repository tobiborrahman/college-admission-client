import React, { useEffect, useState } from 'react';

const CollegeDetails = () => {
	useEffect(() => {
		fetch(`http://localhost:5000/colleges`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	}, []);

	return <div>This is college details page</div>;
};

export default CollegeDetails;
