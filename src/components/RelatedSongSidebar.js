import SmallSongCard from './SmallSongCard';

import { Stack, Typography } from '@mui/material';

const RelatedSongSidebar = () => {
	return (
		<Stack>
			<Typography variant='h6'>Similar Songs</Typography>
			<SmallSongCard />
			<SmallSongCard />
			<SmallSongCard />
		</Stack>
	);
};

export default RelatedSongSidebar;
