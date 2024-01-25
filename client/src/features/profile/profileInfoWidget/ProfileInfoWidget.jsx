import React from 'react';
import { Divider } from '@mui/material';
import WidgetWrapper from '../../../common/WidgetWrapper';
import FlexBetween from '../../../common/FlexBetween';
import ProfileHeader from './ProfileHeader';
import UserInfo from './UserInfo';
import SocialProfiles from './SocialProfiles';
import Shortcuts from './Shortcuts';

const ProfileInfoWidget = () => {
	return (
		<WidgetWrapper>
			<ProfileHeader />
			<Divider />
			<UserInfo />
			<Divider />
			<SocialProfiles />
			<Divider />
			<Shortcuts/>
		</WidgetWrapper>
	);
};

export default ProfileInfoWidget;
