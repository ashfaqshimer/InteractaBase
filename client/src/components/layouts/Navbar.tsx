import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'; // Adjust the import path based on your actual file structure
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <NavigationMenu className="h-[8%] py-3 px-5 border-b border-gray-300 flex justify-between max-w-full">
      <NavigationMenuList className="flex items-center">
        <NavigationMenuItem>InteractaBase</NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="flex items-center">
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Button>Logout</Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
