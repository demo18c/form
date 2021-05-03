import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const AboutRadio = () => {
	return (
		<>
			<div>
				<h1>About Radio</h1>
			</div>
			<Button component={Link} to="/radiospec" variant="contained">
				Next{' '}
			</Button>
		</>
	);
};

export default AboutRadio;
