import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Toaster } from '../ui/toaster';

function RootLayout() {
  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
}

export default RootLayout;
