import axios from 'axios';

const api = axios.create({
	baseURL: 'https://sacsis-api.herokuapp.com/api/',
	validateStatus: function (status) {
		return status < 1000;
	}
});

export default api;