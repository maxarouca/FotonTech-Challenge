import React, { Component } from 'react'

import { View, Text, Platform, StyleSheet } from 'react-native'

export default class Products extends Component {
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
    flex: 1,
    backgroundColor: '#F2F9FC',
    ...Platform.select({
      ios: { paddingTop: 50 },
    })
  }
})