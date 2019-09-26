import axios from 'axios';
import { baseApiUrl } from '../global.js'

const api = axios.create({
	//baseURL: 'https://sacsis-api.herokuapp.com/api/',
	baseURL: baseApiUrl,
	validateStatus: function (status) {
		return status < 1000;
	}
});

export default api;