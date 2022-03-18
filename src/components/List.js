import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';

import Detail from './Detail';

class List extends Component {
  constructor() {
    super();
    this.state = {data: []};
  }

  componentDidMount() {
    axios.get('https://reqres.in/api/users').then(response => {
      this.setState({data: response.data.data});
    });
  }

  mapData() {
    return this.state.data.map(responseData => (
      <Detail key={responseData.id} data={responseData} />
    ));
  }

  render() {
    console.log(this.state);
    return <ScrollView>{this.mapData()}</ScrollView>;
  }
}

export default List;
