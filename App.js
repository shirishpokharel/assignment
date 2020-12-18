/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  render() {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    return (
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            backgroundColor: '#ADD8E6',
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'black',
              height: windowHeight,
              width: windowWidth,
              padding: 10,
              backgroundColor: '#32CD32',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                alignSelf: 'center',
              }}>
              Content
            </Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'black',
              height: windowHeight,
              padding: 10,
              backgroundColor: '#90EE90',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                alignSelf: 'center',
              }}>
              Content
            </Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'black',
              height: windowHeight,
              padding: 10,
              backgroundColor: 'red',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                alignSelf: 'center',
              }}>
              Content
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
