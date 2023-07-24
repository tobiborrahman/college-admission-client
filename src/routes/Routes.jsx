import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../components/Home/Home/Home';
import Colleges from '../components/Colleges/Colleges';
import Admission from '../components/Admission/Admission';
import MyCollege from '../components/MyCollege/MyCollege';
import CardDetails from '../components/CardDetails/CardDetails';
import Login from '../shared/pages/Login/Login';
import Register from '../shared/pages/Register/Register';
import CollegeDetails from '../components/Colleges/CollegeDetails';
import AdmissionDetails from '../components/Admission/AdmissionDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/colleges',
				element: <Colleges></Colleges>,
			},
			{
				path: '/admission',
				element: <Admission></Admission>,
			},
			{
				path: '/my-college',
				element: <MyCollege></MyCollege>,
			},
			{
				path: '/card-details',
				element: <CardDetails></CardDetails>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/register',
				element: <Register></Register>,
			},
			{
				path: '/colleges/:id',
				element: <CollegeDetails></CollegeDetails>,
				loader: ({ params }) =>
					fetch(
						`https://college-admission-server-nu.vercel.app/colleges/${params.id}`
					),
			},
			{
				path: '/admittedColleges/:id',
				element: <AdmissionDetails></AdmissionDetails>,
				loader: ({ params }) =>
					fetch(
						`https://college-admission-server-nu.vercel.app/admittedColleges/${params.id}`
					),
			},
		],
	},
]);

export default router;
