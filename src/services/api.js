import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.sacsis.tech/api',
	validateStatus: function (status) {
		return status < 1000;
	}
});

export default api;