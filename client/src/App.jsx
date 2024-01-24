import { Outlet } from 'react-router-dom';
import Navbar from './common/Navbar';

const App = () => {
	return (
		<>
			{/* Add navbar here */}
			<Navbar/>
			<Outlet />
		</>
	);
};

export default App;
