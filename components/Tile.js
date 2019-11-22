import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Icon, Image, Text} from 'react-native-elements';

const {width} = Dimensions.get('window');

export const Tile = ({fruit, addToTotal, removeFromTotal}) => {
  const [cart, changeCart] = useState(0);
  const {name, pic, price} = fruit;
  const fruitPrice = +fruit.price.substring(1);

  const addToCart = () => {
    const noOfItems = cart + 1;
    changeCart(noOfItems);
    addToTotal(fruitPrice);
  };

  const removeFromCart = () => {
    if (cart > 0) {
      const noOfItems = cart - 1;
      changeCart(noOfItems);
      removeFromTotal(fruitPrice);
    }
  };

  return (
    <>
      <Image
        resizeMode="contain"
        source={pic}
        style={[styles.pic, {width, height: width * 0.8}]}
      />
      <View style={styles.flex}>
        <Icon name="pluscircleo" type="antdesign" onPress={addToCart} />
        <Text h4 h4Style={styles.name}>
          {name} ({price})
        </Text>
        <Icon name="minuscircleo" type="antdesign" onPress={removeFromCart} />
      </View>
      <Text style={styles.cart}>Added {cart} items</Text>
    </>
  );
};

const styles = StyleSheet.create({
  pic: {},
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    margin: 20,
  },
  cart: {
    textAlign: 'center',
  },
});
