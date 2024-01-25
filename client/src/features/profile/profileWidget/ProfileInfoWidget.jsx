import React from 'react';
import WidgetWrapper from '../../../common/WidgetWrapper';
import FlexBetween from '../../../common/FlexBetween';
import ProfileHeader from './ProfileHeader';

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
		</WidgetWrapper>
	);
};

export default ProfileInfoWidget;
