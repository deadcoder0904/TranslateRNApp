import React, {useContext, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Icon, Image, Text} from 'react-native-elements';
import {LocalizationContext} from './Translations';

const {width} = Dimensions.get('window');

const translateNumber = (translations, cart) => {
  const key = 'added.items.';
  if (cart === 1) {
    return translations.formatString(translations[key + 'one'], {
      no: cart,
    });
  }

  if (
    (cart % 10 === 0 ||
      cart % 10 === 5 ||
      cart % 10 === 6 ||
      cart % 10 === 7 ||
      cart % 10 === 8 ||
      cart % 10 === 9) &&
    (cart % 100 === 11 ||
      cart % 100 === 12 ||
      cart % 100 === 13 ||
      cart % 100 === 14)
  ) {
    return translations.formatString(translations[key + 'endingWithZero'], {
      no: cart,
    });
  }

  if (cart % 10 === 1 && cart % 100 !== 11) {
    return translations.formatString(translations[key + 'endingWithOne'], {
      no: cart,
    });
  }

  if (
    (cart % 10 === 2 || cart % 10 === 3 || cart % 10 === 4) &&
    (cart % 100 !== 12 || cart % 100 !== 13 || cart % 100 !== 14)
  ) {
    return translations.formatString(
      translations[key + 'endingWithTwoToFour'],
      {
        no: cart,
      },
    );
  }

  return translations.formatString(translations[key + 'endingWithOther'], {
    no: cart,
  });
};

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
      <Text style={styles.cart}>{translateNumber(translations, cart)}</Text>
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
