import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {useSafeArea} from 'react-native-safe-area-context';
import {Tile} from '../components/Tile';
import {LocalizationContext} from '../components/Translations';

export const Home = () => {
  const {translations, initializeAppLanguage} = useContext(LocalizationContext);
  const [total, changeTotal] = useState(0);
  const insets = useSafeArea();
  initializeAppLanguage();

  const fruits = [
    {
      name: translations['fruit.apple'],
      price:
        translations['app.currency'] + translations['fruit.apple.price.value'],
      pic: require('../assets/apple.png'),
    },
    {
      name: translations['fruit.banana'],
      price:
        translations['app.currency'] + translations['fruit.banana.price.value'],
      pic: require('../assets/banana.png'),
    },
    {
      name: translations['fruit.watermelon'],
      price:
        translations['app.currency'] +
        translations['fruit.watermelon.price.value'],
      pic: require('../assets/watermelon.png'),
    },
  ];

  const addToTotal = price => {
    changeTotal(total + price);
  };

  const removeFromTotal = price => {
    changeTotal(total - price);
  };

  return (
    <ScrollView>
      <View
        style={[
          styles.container,
          {paddingTop: insets.top, paddingBottom: insets.bottom},
        ]}>
        <Text h1 h1Style={styles.grocery}>
          {translations['shop.title']}
        </Text>
        <Text style={styles.date}>
          {translations['date.title']}: {translations['date.format']}
        </Text>
        {fruits.map(fruit => {
          return (
            <React.Fragment key={fruit.name}>
              <Tile
                fruit={fruit}
                addToTotal={addToTotal}
                removeFromTotal={removeFromTotal}
              />
            </React.Fragment>
          );
        })}
        <Text h3 h3Style={styles.total}>
          {translations['cart.total.title']}:
          {translations.formatString(
            translations['cart.total.value.currencyStart'],
            {
              currencyStart: translations['app.currency'],
              value: total,
            },
          )}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  grocery: {
    textAlign: 'center',
    marginBottom: 10,
  },
  date: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
  total: {
    marginTop: 30,
    textAlign: 'center',
    color: 'red',
  },
});
