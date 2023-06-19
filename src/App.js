import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage, { loader as songLoader } from './pages/Home';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import './App.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [{ index: true, element: <HomePage /> }],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
