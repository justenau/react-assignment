import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-assignment-650d3.firebaseio.com/"
})

export default instance;