import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		backgroundColor: '#000000'
	},
	paper: {
		backgroundColor: '#000000'
	}
});

// function createData(specs, descrip) {
// 	return { specs, descrip };
// }

const rows = [
	{ specs: 'Wave', descrip: 'wckmwcmwc' },
	{ specs: 'Enc', descrip: 'svcsvcsvs' },
	{ specs: 'Data', descrip: 'vsvdv ' },
	{ specs: 'sdvcsv', descrip: 'sfcsfscscvg​' },
	{ specs: 'Input Power', descrip: 'scscsc' },
	{ specs: 'Output Power', descrip: 'wfscvwc' },
	{ specs: 'cwdcwc', descrip: 'cscc' }
];

export default function RadioTable() {
	const classes = useStyles();

	return (
		<Grid container justify="center" alignItems="center">
			<Grid item xs={12}>
				<Paper className="overviewPaper">
					<TableContainer>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell className={classes.cell}>
										<h2>Specs</h2>
									</TableCell>
									<TableCell align="right">
										{' '}
										<h2>Description</h2>{' '}
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map(row => (
									<TableRow key={row.specs}>
										<TableCell component="th" scope="row">
											<h4>{row.specs}:</h4>
										</TableCell>
										<TableCell align="right">
											<h4>{row.descrip}</h4>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						<Link>
							<Button />
						</Link>
					</TableContainer>
				</Paper>
				<>
					<Button size="large" component={Link} to="/aboutradio" variant="contained" color="default">
						Back
					</Button>
					<Button size="large" component={Link} to="/radio" variant="contained" color="default">
						Next
					</Button>
				</>
			</Grid>
		</Grid>
	);
}
