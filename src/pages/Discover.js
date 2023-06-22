import { useSelector } from 'react-redux';

import SongsListItem from '../components/SongsListItem';
import RelatedSongSidebar from '../components/RelatedSongSidebar';

const DiscoverPage = () => {
	const searchResult = useSelector((state) => state.player.searchResult);
	console.log(searchResult);
	return (
		<>
			{searchResult?.tracks?.hits?.map(({ track }, index) => (
				<SongsListItem
					index={index}
					key={track.key}
					track={{
						key: track?.key || '',
						id: track?.hub?.actions?.[0]?.id || '',
						title: track?.title || '',
						artist: track?.artists?.[0]?.alias?.split('-')?.join(' ') || '',
						songUrl: track?.hub?.actions?.[1]?.uri || '',
						songImage: track?.images?.coverart || '',
					}}
				/>
			))}
			<RelatedSongSidebar />
		</>
	);
};

export default DiscoverPage;
