import axios from "axios";

export default {
  requestDbData: function() {
    let url = '/api/db.json';

    return axios.get(url);
  }
}
