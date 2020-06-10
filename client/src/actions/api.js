import axios from "axios";

export default {
    User(url = '/api/') {
        return {
            fetchUser: () => axios.get(url+'current_user'),
        }
    }
}