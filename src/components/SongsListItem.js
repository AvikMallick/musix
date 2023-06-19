import { useState, useEffect, useRef, useCallback } from 'react';
import {
	Grid,
	Card,
	CardMedia,
	Box,
	Typography,
	IconButton,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import PlayCircleTwoToneIcon from '@mui/icons-material/PlayCircleTwoTone';
import PauseCircleTwoToneIcon from '@mui/icons-material/PauseCircleTwoTone';

import { useSelector, useDispatch } from 'react-redux';

import { setActiveSong, setIsPlaying } from '../redux/slices/playerSlice';

const SongsListItem = ({ track, index }) => {
	const [songLength, setSongLength] = useState('0:00');
	const audioRef = useRef();
	const dispatch = useDispatch();

	const { key, title, subtitle } = track;
	const songUrl = track?.hub?.actions?.[1]?.uri;
	const songImage = track?.share?.image;

	const activeSong = useSelector((state) => state.player.activeSong);
	const isPlaying = useSelector((state) => state.player.isPlaying);

	// const handlePlayPauseClick = useCallback((event) => {
	// 	// console.log(isPlaying, activeSong);
	// 	if (isPlaying) {
	// 		dispatch(setIsPlaying(false));
	// 		console.log('pressed 1');
	// 	} else if (!isPlaying && activeSong === track) {
	// 		dispatch(setIsPlaying(true));
	// 		console.log('pressed 2');
	// 	} else {
	// 		// activeSong !== track
	// 		console.log(isPlaying, activeSong.title);
	// 		dispatch(setActiveSong(track));
	// 		dispatch(setIsPlaying(true));
	// 		console.log('pressed 3');
	// 	}
	// }, []);

	const handlePlayClick = (_) => {
		console.log('clicked play');
		dispatch(setActiveSong(track));
		dispatch(setIsPlaying(true));
	};

	const handlePauseClick = (_) => {
		console.log('clicked paused');
		dispatch(setIsPlaying(false));
	};

	const handleLoadedMetadata = useCallback((event) => {
		const audio = event.target;
		const duration = audio.duration;
		setSongLength(`${Math.floor(duration / 60)}:${Math.floor(duration) % 60}`);
	}, []);

	useEffect(() => {
		const audioElement = audioRef.current;
		audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
	}, [handleLoadedMetadata]);

	return (
		<Grid
			container
			key={key}
			sx={{ pb: '1px', borderBottom: '1px solid green', borderRadius: '4%' }}
		>
			<Card
				sx={{
					display: 'flex',
					flexGrow: '1',
					flexBasis: '0',
					justifyItems: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						flexWrap: 'wrap',
						flexGrow: '1',
						flexBasis: '0',
					}}
				>
					<Typography sx={{ pr: index < 9 ? '9.05px' : '0px' }}>
						{index + 1}.&nbsp;
					</Typography>
					<CardMedia
						component='img'
						sx={{ width: '40px', height: '40px', pr: '5px' }}
						src={songImage}
						alt='cover'
					/>
					<Typography sx={{ flex: '1', color: !songUrl ? 'gray' : '' }}>
						{title.split('(')[0].split('-')[0]}
					</Typography>
					<Divider orientation='vertical' flexItem />
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						flexWrap: 'wrap',
						flexGrow: '1',
						flexBasis: '0',
					}}
				>
					<Typography sx={{ flex: '1', color: !songUrl ? 'gray' : '' }}>
						{subtitle}
					</Typography>
					<Divider orientation='vertical' flexItem />
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						flexWrap: 'wrap',
						flexGrow: '1',
						flexBasis: '0',
					}}
				>
					<Typography sx={{ color: !songUrl ? 'gray' : '' }}>
						{songLength}
					</Typography>
					{/* <IconButton onClick={handlePlayPauseClick} disabled={!songUrl}>
						{(activeSong !== track || !isPlaying) && <PlayCircleTwoToneIcon />}
						{activeSong === track && isPlaying && <PauseCircleTwoToneIcon />}
					</IconButton> */}
					{(activeSong !== track || !isPlaying) && (
						<IconButton onClick={handlePlayClick} disabled={!songUrl}>
							<PlayCircleTwoToneIcon />
						</IconButton>
					)}
					{activeSong === track && isPlaying && (
						<IconButton onClick={handlePauseClick} disabled={!songUrl}>
							<PauseCircleTwoToneIcon />
						</IconButton>
					)}

					<audio ref={audioRef} src={songUrl} />
				</Box>
			</Card>
		</Grid>
	);
};

export default SongsListItem;
