import { useContext } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../components/Providers/Authprovider';
import SocialLogin from '../../SocailLogin/SocialLogin';

const Register = () => {
	const { createUser } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm();
	const onSubmit = (data) => {
		// console.log(data, data.email, data.password);
		createUser(data.email, data.password)
			.then((res) => {
				console.log('create user', res.user);
				reset();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
	const password = watch('password');

	return (
		<div className="flex justify-center items-center my-20">
			<div className="w-[500px] p-10 border">
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1 className="text-center text-[#0C4B65] text-6xl font-bold pb-10">
						Sign Up
					</h1>
					<input
						type="text"
						className="border py-2 w-full mb-3 pl-3"
						placeholder="Name*"
						{...register('name', {
							required: true,
							maxLength: 80,
						})}
					/>
					<br />
					<input
						type="email"
						className="border py-2 w-full mb-3 pl-3"
						placeholder="Email*"
						{...register('email', {
							required: true,
						})}
					/>
					<br />
					<input
						type="password"
						className="border py-2 w-full mb-3 pl-3"
						placeholder="Password*"
						{...register('password', {
							required: true,
							minLength: {
								value: 6,
								message:
									'Password must be at least 6 characters long',
							},
							pattern: {
								value: passwordRegex,
								message:
									'Password must contain at least one capital letter, one special character',
							},
						})}
					/>

					<input
						type="password"
						className="border py-2 w-full pl-3"
						placeholder="Confirm Password*"
						{...register('confirmPassword', {
							required: 'Confirm Password is required',
							validate: (value) =>
								value === password || 'Passwords do not match',
						})}
					/>

					<p className="text-red-700">
						{errors.password && <p>{errors.password.message}</p>}
					</p>

					<p className="mb-3 mt-0 text-red-700">
						{errors.confirmPassword && (
							<p>{errors.confirmPassword.message}</p>
						)}
					</p>

					<Link to="/login">
						<p className="text-[#0C4B65] underline">
							Already Have an Account? Sign In
						</p>
					</Link>

					<input
						className="py-2 w-full text-white text-2xl duration-700 font-bold hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65] mt-3 "
						type="submit"
						value="Sign Up"
					/>
				</form>
				<div className="text-center mt-3">
					<SocialLogin></SocialLogin>
				</div>
			</div>
		</div>
	);
};

export default Register;
