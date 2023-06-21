import {
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveSong, setIsPlaying } from '../redux/slices/playerSlice';

const SmallSongCard = (track) => {
  // console.log(track?.attributes?.streaming?.preview);
  const { title, artist, songUrl, songImage } = track;

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handlePlayClick = (_) => {
    dispatch(setActiveSong(track));
    dispatch(setIsPlaying(true));
  };

  const handlePauseClick = (_) => {
    dispatch(setIsPlaying(false));
  };

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
        alt='cover'
        image={songImage}
      />
      <Box sx={{ display: 'flex', flexDirection: 'row', maxWidth: '280px' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {title?.split('(')[0]?.split('-')[0]?.slice(0, 15)}
          </Typography>
        </CardContent>
        <Box>
          {(activeSong !== track || !isPlaying) && (
            <IconButton onClick={handlePlayClick} disabled={!songImage}>
              <PlayArrowIcon />
            </IconButton>
          )}
          {activeSong === track && isPlaying && (
            <IconButton onClick={handlePauseClick} disabled={!songImage}>
              <PauseIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default SmallSongCard;
