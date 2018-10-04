import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

import { View, Text, Platform, StyleSheet } from 'react-native'

export default class Products extends Component {
  static navigationOptions = {
    title: '',
    tabBarIcon: <Icon name="shoppingcart" size={20} color="#999" />
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Página Products</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: { paddingTop: 50 },
    })
  }
})