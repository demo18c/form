import React from 'react';
import '../App.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
	paper: {
		backgroundColor: '#000000',
		alignItems: 'center'
	}
});

const Overview = () => {
	const classes = useStyles();

	return (
		// <Grid>
		<Container maxWidth="md">
			<Paper className={classes.paper}>
				<h1>Overview</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies nec nisl et
					efficitur. Integer vehicula venenatis egestas. Sed mollis lorem tincidunt molestie posuere. Morbi eu
					mi ut quam pellentesque ultricies. Vestibulum fermentum ligula a ornare iaculis. Pellentesque
					habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam iaculis
					mattis purus ac ornare.
				</p>
				<p>
					Quisque sollicitudin rhoncus posuere. Duis in rhoncus diam, quis tincidunt lacus. Nunc leo ante,
					mattis at pulvinar id, porta vel elit. Mauris aliquam nulla ipsum, quis sodales turpis dictum a.
					Nullam mollis semper purus. Fusce in enim leo. Aliquam est lorem, egestas nec velit nec, eleifend
					pretium quam. Proin id massa viverra, tincidunt nunc id, mattis lorem. Curabitur sed euismod massa,
					eget luctus diam. Nullam fermentum nulla dolor, tempus accumsan augue consectetur nec. Nunc vitae mi
					sed urna tempor hendrerit. Duis odio nunc, tempor non mi non, convallis finibus ante.
				</p>
			</Paper>
		</Container>
		// </Grid>
	);
};

export default Overview;
