import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  View, Text, Platform, StyleSheet, FlatList, ScrollView, Image,
} from 'react-native';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          key: 1,
          name: 'PRADA Low Top Tennis',
          price: 'R$345,00',
          image: require('../assets/prada.png'),
        },
        {
          key: 2,
          name: 'OFF-WHITE Polo Sneaker',
          price: 'R$399,00',
          image: require('../assets/polo.png'),
        },
        {
          key: 3,
          name: 'RREBOK DMX Series 1200',
          price: 'R$95,00',
          image: require('../assets/reebok.png'),
        },
        {
          key: 4,
          name: 'PRADA Contrast Sn',
          price: 'R$941,00',
          image: require('../assets/prada-black.png'),
        },
      ],
    };
  }

  renderProducts(item) {
    return (
      <View style={styles.product} key={item.key}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titlePage}>My Store</Text>
          <Icon name="search1" size={24} color="#85B9CA" />
        </View>
        <ScrollView>
          <FlatList
            data={this.state.products}
            renderItem={({ item }) => this.renderProducts(item)}
            style={styles.productContainer}
            numColumns={2}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F9FC',
    ...Platform.select({
      ios: { paddingTop: 50 },
    }),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 135,
    padding: 15,
    paddingTop: 40,
  },
  titlePage: {
    fontSize: 40,
    color: '#85B9CA',
    fontWeight: 'bold',
  },
  product: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flexGrow: 1,
    flexBasis: 0,
    margin: 15,
    padding: 20,
  },
  productImage: {
    marginTop: -15,
  },
  productName: {
    fontSize: 16,
    alignSelf: 'flex-start',
    color: '#335B68',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: '#335B68',
    marginTop: 10,
  },
});
