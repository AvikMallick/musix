import axios from 'axios';

const BASE_URL = 'https://shazam.p.rapidapi.com';

const options = {
	params: {
		locale: 'en-US',
		pageSize: '20',
	},
	headers: {
		'X-RapidAPI-Key': '3de61c5a14msh7aba582ef8e8f98p1c294ajsnc3b4ce18798b',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);

	return data;
};
