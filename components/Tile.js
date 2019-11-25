import React, {useContext, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Icon, Image, Text} from 'react-native-elements';
import {LocalizationContext} from './Translations';

const {width} = Dimensions.get('window');

export const Tile = ({fruit, addToTotal, removeFromTotal}) => {
  const {translations} = useContext(LocalizationContext);

  const [cart, changeCart] = useState(0);
  const {name, pic, price} = fruit;
  const fruitPrice = +fruit.price.substring(1);

  const addToCart = () => {
    changeCart(cart + 1);
    addToTotal(fruitPrice);
  };

  const removeFromCart = () => {
    if (cart > 0) {
      changeCart(cart - 1);
      removeFromTotal(fruitPrice);
    }
  };

  return (
    <>
      <Image
        resizeMode="contain"
        source={pic}
        style={{width, height: width * 0.8}}
      />
      <View style={styles.flex}>
        <Icon name="pluscircleo" type="antdesign" onPress={addToCart} />
        <Text h4 h4Style={styles.name}>
          {name} ({price})
        </Text>
        <Icon name="minuscircleo" type="antdesign" onPress={removeFromCart} />
      </View>
      <Text style={styles.cart}>
        {cart === 1
          ? translations.formatString(translations['added.item'], {
              no: cart,
            })
          : translations.formatString(translations['added.items'], {
              no: cart,
            })}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
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
