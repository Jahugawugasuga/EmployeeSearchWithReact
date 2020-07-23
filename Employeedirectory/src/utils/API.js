import axios from 'axios';
const APIURL = "https://randomuser.me/api/?results=200&nat=us="

export default {
    getDirectory: function() {
        return axios.get(APIURL)

    }
};