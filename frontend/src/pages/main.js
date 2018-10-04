import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

import { View, Text, Platform, StyleSheet } from 'react-native'

export default class Main extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Página Main</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: { paddingTop: 50},
    })
  }
})