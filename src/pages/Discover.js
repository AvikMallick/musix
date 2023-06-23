import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import SongsListItem from '../components/SongsListItem';
import RelatedSongSidebar from '../components/RelatedSongSidebar';
import ArtistCard from '../components/ArtistCard';

const DiscoverPage = () => {
	const searchResult = useSelector((state) => state.player.searchResult);

	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				justifyContent: 'space-between',
				mb: '75px',
			}}
		>
			<Box sx={{ width: '70%' }}>
				<Box>
					<Typography variant='h6'>Songs</Typography>
					{searchResult?.tracks?.hits?.map(({ track }, index) => (
						<SongsListItem
							index={index}
							key={track.key}
							track={{
								key: track?.key || '',
								id: track?.hub?.actions?.[0]?.id || '',
								title: track?.title || '',
								artist: track?.subtitle?.split('-')?.join(' ') || '',
								songUrl: track?.hub?.actions?.[1]?.uri || '',
								songImage: track?.images?.coverart || '',
							}}
						/>
					))}
				</Box>
				<Box sx={{ pt: '30px' }}>
					<Typography>Artists</Typography>
					<Box sx={{ display: 'flex' }}>
						{<ArtistCard artist={searchResult?.artists?.hits?.[0]?.artist} />}
					</Box>
				</Box>
			</Box>

			<Box sx={{ width: '30%', pl: '10px' }}>
				<RelatedSongSidebar />
			</Box>
		</Box>
	);
};

export default DiscoverPage;
