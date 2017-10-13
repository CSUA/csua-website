import axios from "axios";

export default {
  requestDbData: function() {
    let url = '/json/';

    return axios.get(url);
  }
}
