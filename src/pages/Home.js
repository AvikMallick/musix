import { Box } from '@mui/material';

import GenreSidebar from '../components/GenreSidebar';
import RelatedSongSidebar from '../components/RelatedSongSidebar';
import SongsList from '../components/SongsList';

const HomePage = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				justifyContent: 'space-between',
				mb: '75px',
			}}
		>
			<Box>
				<GenreSidebar />
			</Box>
			<Box sx={{ width: '55%' }}>
				<SongsList />
			</Box>
			<Box sx={{ width: '25%' }}>
				<RelatedSongSidebar />
			</Box>
		</Box>
	);
};

export default HomePage;
