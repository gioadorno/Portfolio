import axios from 'axios';

const API = axios.create({ baseURL: 'https://gio-portfolio.herokuapp.com/' });

// Intercepts the request to access the website to check if there is a user. Then utilizing the token to grant access.
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`; //Bearer needs to be added for this to work. This function gets token from the profile on local storage. Makes a request to each of these routes utilizing the token.
    }
    return req;
});

export const createMarker = (newMarker) =>  API.post('/marker', newMarker);
export const getMarkers = () => API.get('/marker');

export const getProps = () => API.get('/property');
export const createProp = (newProp) =>  API.post('/property', newProp);

// Sign in
export const signIn = (loginData) => API.post('/login', loginData);
export const userCreate = (loginData) => API.post('/createuser', loginData);