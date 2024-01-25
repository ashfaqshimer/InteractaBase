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
import { Message, DarkMode, Notifications } from '@mui/icons-material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<AppBar position='static' sx={{ backgroundColor: '#FA991C' }}>
			<Toolbar>
				<Typography
					variant='h3'
					component='div'
					sx={{
						flexGrow: 1,
						'&:hover': {
							color: '#1C768F',
							cursor: 'pointer',
						},
					}}
					onClick={() => navigate('/')}
				>
					<img
						src='../../public/assets/navLogo.png' // Adjust the path based on your project structure
						alt='Your Logo'
						style={{ height: '40px', marginRight: '16px' }}
					/>
					UniConnect
				</Typography>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						width: '350px',
						backgroundColor: 'white',
						borderRadius: '9px',
						padding: '0 1.5rem',
						marginRight: '1rem',
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
				<Button
					color='inherit'
					startIcon={<ExitToAppIcon />}
					onClick={() => dispatch(logout())}
				>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
