import React from 'react';
import { Divider } from '@mui/material';
import WidgetWrapper from '../../../common/WidgetWrapper';
import FlexBetween from '../../../common/FlexBetween';
import ProfileHeader from './ProfileHeader';
import UserInfo from './UserInfo';

const ProfileInfoWidget = () => {
	return (
		<WidgetWrapper>
			<FlexBetween
				gap='0.5rem'
				pb='1.1rem'
				onClick={() => navigate(`/profile/${userId}`)}
			>
				<ProfileHeader />
			</FlexBetween>
			<Divider />
			<UserInfo />
		</WidgetWrapper>
	);
};

export default ProfileInfoWidget;
