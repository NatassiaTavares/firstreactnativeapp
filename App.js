import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Ideia 1</Text>
        <Text>Ideia 2</Text>
        <Text>Look! This ideia has an awesome image!</Text>
        {/* <Image source={require('/assets/awesome.jpg')} /> */}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
