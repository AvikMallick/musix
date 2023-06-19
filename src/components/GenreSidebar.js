import { Stack, Typography, Box, Button } from '@mui/material';

const genres = [
	'Global Hits',
	'Pop',
	'Hip-Hop/Rap',
	'Dance',
	'Electronic',
	'R&B/Soul',
	'Rock',
	'Romance',
	'Sports',
	'Classical',
];

const GenreSidebar = () => {
	return (
		<Stack
			direction='row'
			sx={{
				// overflowY: 'auto',
				height: '95%',
				flexDirection: 'column',
			}}
		>
			{genres.map((genre) => (
				<Box sx={{ borderBottom: '1px black solid' }} key={genre}>
					<Button
						variant='text'
						sx={{
							'&.MuiButton-text': { color: 'black' },
						}}
					>
						<Typography variant='body1'>{genre}</Typography>
					</Button>
				</Box>
			))}
		</Stack>
	);
};

export default GenreSidebar;
