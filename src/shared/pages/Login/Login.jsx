import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../components/Providers/Authprovider';
import SocialLogin from '../../SocailLogin/SocialLogin';

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const [showPassword, setShowPassword] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || '/';

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const onSubmit = (data) => {
		signIn(data.email, data.password)
			.then((res) => {
				console.log(res.user.email);
				navigate(from, { replace: true });
				reset();
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	// console.log(errors);

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="flex justify-center items-center my-20">
			<div className="w-[500px] p-10 border">
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1 className="text-center text-[#0C4B65] text-6xl font-bold pb-10">
						Log In
					</h1>
					<input
						type="email"
						className="border py-2 w-full mb-3 pl-3"
						placeholder="Email"
						{...register('email', {
							required: true,
						})}
					/>
					<br />
					<input
						type={showPassword ? 'password' : 'text'}
						className="border py-2 w-full pl-3"
						placeholder="Password"
						onClick={handleTogglePassword}
						{...register('password', {
							required: true,
						})}
					/>
					<p className="mt-2" onClick={handleTogglePassword}>
						{showPassword ? (
							<FaEye className="text-2xl"></FaEye>
						) : (
							<FaEyeSlash className="text-2xl"></FaEyeSlash>
						)}
					</p>

					<Link to="/register">
						<p className="text-[#0C4B65] underline">
							Don't Have an Account? Please Sign Up
						</p>
					</Link>

					<input
						className="py-2 w-full text-white text-2xl duration-700 font-bold hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65] mt-3"
						type="submit"
						value="Login"
					/>
				</form>
				<div className="text-center mt-3">
					<SocialLogin></SocialLogin>
				</div>
			</div>
		</div>
	);
};

export default Login;
