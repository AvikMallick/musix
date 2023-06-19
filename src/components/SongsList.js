import { Box, Grid, Paper, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import SongsListItem from './SongsListItem';
import { useGetTopGlobalChartsQuery } from '../redux/services/shazamApi';

const SongsList = () => {
	const { data, isFetching, error } = useGetTopGlobalChartsQuery();

	if (error) {
		return (
			<Typography variant='h6' textAlign='center'>
				Failed to load data. Please Check your connection.
			</Typography>
		);
	}

	// Showing Loading State
	if (isFetching)
		return (
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					mb: '75px',
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						top: '30%',
						left: '40%',
					}}
				>
					<CircularProgress
						sx={{ position: 'absolute', left: '50%', bottom: '100%' }}
						color='inherit'
					/>
					<Typography variant='subtitle2' sx={{ fontStyle: 'italic' }}>
						Looking into the world of harmony...
					</Typography>
				</Box>
			</Box>
		);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				mb: '75px',
			}}
		>
			{/* heading */}
			<Grid container sx={{ pb: '2px' }}>
				<Grid item xs={4}>
					<Paper elevation={2} square>
						Title
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper elevation={2} square>
						Artist
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper elevation={2} square>
						Duration
					</Paper>
				</Grid>
			</Grid>
			{/* data items */}
			<Grid container>
				{data?.tracks?.map((track, index) => (
					<SongsListItem track={track} index={index} key={track.key} />
				))}
			</Grid>
		</Box>
	);
};

export default SongsList;
