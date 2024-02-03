import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Toaster } from '../ui/toaster';

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster />
    </>
  );
}

export default RootLayout;
