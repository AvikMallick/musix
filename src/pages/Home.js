import { Box } from '@mui/material';
import { useLoaderData } from 'react-router-dom';

import GenreSidebar from '../components/GenreSidebar';
import RelatedSongSidebar from '../components/RelatedSongSidebar';
import SongsList from '../components/SongsList';
import { fetchFromAPI } from '../utils/fetchFromApi';

const HomePage = () => {
	// const data = useLoaderData();
	return (
		<Box
			sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
		>
			<Box>
				<GenreSidebar />
			</Box>
			<Box sx={{ width: '65%' }}>
				{/* <SongsList tracks={data} /> */}
				<SongsList />
			</Box>
			<Box>
				<RelatedSongSidebar />
			</Box>
		</Box>
	);
};

export default HomePage;

export async function loader() {
	const data = await fetchFromAPI('charts/track');
	return data.tracks;
}
