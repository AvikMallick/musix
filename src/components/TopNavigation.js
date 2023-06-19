import { Box, TextField, InputAdornment, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const TopNavigation = () => {
	return (
		<Box
			sx={{
				position: 'sticky',
				top: 0,
				left: 0,
				display: 'flex',
				gap: '20px',
				alignItems: 'center',
				height: '80px',
				background: '#F9F9F8',
				zIndex: '1',
			}}
		>
			<Box width='150px'>
				<Typography variant='h4' component='h1'>
					MUSI<Box sx={{ display: 'inline', color: 'red' }}>X</Box>
				</Typography>
			</Box>
			<TextField
				sx={{ flexGrow: 1 }}
				id='search-bar'
				label='Type a song,artist,album'
				variant='filled'
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<IconButton>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
};

export default TopNavigation;
