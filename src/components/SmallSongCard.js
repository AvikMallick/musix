import {
	Card,
	CardMedia,
	Box,
	CardContent,
	Typography,
	IconButton,
} from '@mui/material';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import cover from './aee2655b6743f817b0faa670f2ba03bc710161e1.jpg';

const SmallSongCard = () => {
	return (
		<Card
			sx={{
				display: 'flex',
				height: '50px',
				alignItems: 'center',
			}}
		>
			<CardMedia
				component='img'
				sx={{ width: '40px', height: '40px' }}
				alt='Live from space album cover'
				image={cover}
			/>
			<Box sx={{ display: 'flex', flexDirection: 'row', maxWidth: '280px' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography component='div' variant='h5'>
						Anik The Lelu
					</Typography>
				</CardContent>

				<Box>
					<IconButton aria-label='play/pause'>
						<PlayArrowIcon sx={{ height: 38, width: 38 }} />
					</IconButton>
				</Box>
			</Box>
		</Card>
	);
};

export default SmallSongCard;
