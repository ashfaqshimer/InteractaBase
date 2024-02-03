import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function Navbar() {
  return (
    <NavigationMenu className="max-w-full px-4 py-2 border-b border-gray-300 justify-normal">
      <NavigationMenuList className="container">
        <Link to={'/'}>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            InteractaBase
          </NavigationMenuLink>
        </Link>
        <NavigationMenuItem className="justify-self-end">
          <Button variant={'ghost'}>Logout</Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
