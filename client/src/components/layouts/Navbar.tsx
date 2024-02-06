import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'; // Adjust the import path based on your actual file structure
import { Button } from '../ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { logout } from '@/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../ui/use-toast';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const user = useAppSelector((state) => state.auth.user);
  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => navigate('/login'))
      .catch((err) =>
        toast({
          title: 'Logout failed',
          description: err.message,
          variant: 'destructive',
        }),
      );
  };

  return (
    <NavigationMenu className="h-[7%] py-3 px-5 border-b border-gray-300 flex justify-between max-w-full">
      <NavigationMenuList className="flex items-center">
        {/* Replace NavigationMenuItem with a Link */}
        <Link to="/">
          <button className="text-xl font-bold">InteractaBase</button>
        </Link>
      </NavigationMenuList>
      <NavigationMenuList className="flex items-center">
        {user ? (
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Button onClick={handleLogout}>Logout</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Button onClick={() => navigate('/login')}>Login</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
