import axios from 'axios';

export default axios.create({
    //Uncomment line below for production build, as for development we've set up a proxy
    //baseURL:'http://localhost:5000'
});