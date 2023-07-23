import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/Providers/Authprovider';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<div className="navbar bg-base-200">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/colleges">Colleges</Link>
							</li>
							<li>
								<Link to="/admission">Admission</Link>
							</li>
							<li>
								<Link to="/my-college">My College</Link>
							</li>
						</ul>
					</div>
					<a className="btn btn-ghost normal-case text-xl">daisyUI</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/colleges">Colleges</Link>
						</li>
						<li>
							<Link to="/admission">Admission</Link>
						</li>
						<li>
							<Link to="/my-college">My College</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					{user && (
						<p className="mr-2 text-black">{user?.displayName}</p>
					)}

					{user ? (
						<Link to="/login">
							<button
								onClick={handleLogOut}
								className="py-1 px-3 text-white text-xl duration-700 rounded-md hover:text-[#0C4B65] hover:bg-[#EFCF4F] border border-[#EFCF4F]"
							>
								Log Out
							</button>
						</Link>
					) : (
						<Link to="/login">
							<button className="py-1 px-3 text-white text-xl duration-700 font-bold rounded-md hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65]">
								Log In
							</button>
						</Link>
					)}
					<div>
						{user ? (
							<img
								className="w-12 ml-14 mt-2 md:mt-0 md:ml-2 rounded-full"
								src={user?.photoURL}
							/>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
