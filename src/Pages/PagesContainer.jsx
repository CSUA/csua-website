import * as React from 'react';
import {Guac} from 'guac-hoc/lib/Guac';
import axios from "axios";
import {Pages} from './Pages';

class PagesContainer extends React.Component {
  constructor() {
    super();
    this.state = { 'data': {
      'officers': []
    } };
  }

  componentDidMount() {
    // at some point this could get handled with redux
    // but not important enough at this point
    this.requestDbData().then(response => {
      this.setState({
        data: response.data
      });
    }).catch(function (error) {
      console.error('Failed to load db.json data');
      console.log(error);
    });
  }

  // haven't implemented this since Pages is kinda a singleton
  // componentWillUnmount() {
  //   // abort Ajax request per https://github.com/axios/axios#cancellation
  // }

  requestDbData () {
    let url = '/api/db.json';

    return axios.get(url);
  }


  render() {
    return <Pages value={this.state.data} />
  }
}

export default PagesContainer;
export {PagesContainer};
