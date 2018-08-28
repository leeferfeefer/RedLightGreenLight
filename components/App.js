import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Hellos</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

});
