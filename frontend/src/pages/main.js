import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

import { View, Text, Platform, StyleSheet } from 'react-native'

export default class Main extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View>
          <Text>Página Main</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F9FC',
    ...Platform.select({
      ios: { paddingTop: 50},
    })
  }
})