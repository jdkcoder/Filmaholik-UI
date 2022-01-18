import axios from 'axios';

axios.defaults.baseURL = "https://backend.filmaholik.com/api/";
// axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.headers.common["Authorization"] = "Bearer " + document.cookie;
