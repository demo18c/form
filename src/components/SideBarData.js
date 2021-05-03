import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

export const SideBarData = [
	{
		title: 'Dashboard',
		icon: <HomeIcon />,
		path: '/'
	},
	{
		title: 'Overview',
		icon: <InfoIcon />,
		path: '/overview'
	},
	{
		title: 'Radio',
		icon: <HomeIcon />,
		path: '/aboutradio'
	}
];
