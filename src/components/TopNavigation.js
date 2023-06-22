import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, TextField, InputAdornment, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';

import { useGetSearchResultQuery } from '../redux/services/shazamApi';
import { setSearchResult } from '../redux/slices/playerSlice';

const TopNavigation = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState('');
	const [finalInputValue, setFinalInputValue] = useState(''); // to use it rtk query so that with every change of inputValue a new query is not called
	const [mount, setMount] = useState(true);

	// technique to skip fetching on mounting the component -> conditional fetching using skip parameter
	const { data, refetch } = useGetSearchResultQuery(
		{ term: finalInputValue.trim() },
		{ skip: mount }
	);

	const handleSearch = (e) => {
		e.preventDefault();
		// later add the functionality not to navigate if empty value
		setFinalInputValue(inputValue);
		if (mount) setMount(false);
		else refetch();
		navigate('discover');
	};

	useEffect(() => {
		if (data) dispatch(setSearchResult(data));
	}, [data, dispatch]);

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
				<Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
					<Typography variant='h4' component='h1'>
						MUSI<Box sx={{ display: 'inline', color: 'red' }}>X</Box>
					</Typography>
				</Link>
			</Box>
			<TextField
				sx={{ flexGrow: 1 }}
				id='search-bar'
				label='Type a song,artist,album'
				variant='filled'
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
				onKeyUp={(e) => {
					if (e.key === 'Enter') handleSearch(e);
				}}
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<IconButton onClick={handleSearch}>
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
