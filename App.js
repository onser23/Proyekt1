import React from 'react';
import {View} from 'react-native';

import Header from './src/components/Header';
import List from './src/components/List';

function App() {
  return (
    <View style={{flex: 1}}>
      <Header title={'Header'} />
      <List />
    </View>
  );
}

export default App;
