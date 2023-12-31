import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../components/Providers/Authprovider';

const SocialLogin = () => {
	const { googlePopUp } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || '/';

	const handleGooglePopUp = () => {
		googlePopUp()
			.then((res) => {
				console.log(res.user);
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div className="text-center">
			<button
				onClick={handleGooglePopUp}
				className="btn text-white capitalize border-none duration-700 w-full text-1xl rounded-none hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65]"
			>
				<FaGoogle></FaGoogle> Sign In With Google
			</button>
		</div>
	);
};

export default SocialLogin;
