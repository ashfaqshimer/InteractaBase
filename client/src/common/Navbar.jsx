import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	InputBase,
	IconButton,
	Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
	Search,
	Message,
	DarkMode,
	LightMode,
	Notifications,
	Help,
	Menu,
	Close,
} from '@mui/icons-material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Navbar = () => {
	return (
		<AppBar position='static' sx={{ backgroundColor: '#FA991C' }}>
			<Toolbar>
				{/* Logo and Search */}
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					Your Logo
				</Typography>
				{/* <div style={{ display: 'flex', alignItems: 'center' }}> */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						width: '300px',
						backgroundColor: 'white',
						borderRadius: '9px',
						padding: '0 1.5rem',
					}}
				>
					<InputBase
						placeholder='Search...'
						inputProps={{ 'aria-label': 'search' }}
						sx={{
							backgroundColor: 'white',
							padding: '8px',
							width: '100%',
							display: 'flex',
							alignItems: 'center',
						}}
					/>
					<IconButton color='default'>
						<SearchIcon />
					</IconButton>
				</div>
				{/* </div> */}

				{/* Icons on the right */}
				<IconButton color='inherit'>
					<DarkMode />
				</IconButton>
				<IconButton color='inherit'>
					<Message />
				</IconButton>
				<IconButton color='inherit'>
					<Notifications />
				</IconButton>

				{/* Logout Button */}
				<Button color='inherit' startIcon={<ExitToAppIcon />}>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
