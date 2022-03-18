import React from 'react';
import {View, Text, StyleSheet, Image, Linking} from 'react-native';

import Button from './Button';

const Detail = ({data}) => {
  const onPressHandler = () => {
    Linking.openURL(data.avatar);
  };

  return (
    <View style={styles.main}>
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>{data.first_name}</Text>
      </View>

      <View style={styles.headerStyle}>
        <Image style={styles.imageStyle} source={{uri: data.avatar}} />
      </View>

      <View style={styles.headerStyle}>
        <Button onPress={onPressHandler}>Get it</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  headerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
  imageStyle: {
    height: 300,
    flex: 1,
  },
  titleStyle: {
    fontSize: 22,
    alignContent: 'center',
  },
});
export default Detail;
