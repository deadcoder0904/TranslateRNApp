import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {useSafeArea} from 'react-native-safe-area-context';
import {Tile} from '../components/Tile';

const fruits = [
  {
    name: 'Apple',
    price: '$3',
    pic: require('../assets/apple.png'),
  },
  {
    name: 'Banana',
    price: '$2',
    pic: require('../assets/banana.png'),
  },
  {
    name: 'Watermelon',
    price: '$5',
    pic: require('../assets/watermelon.png'),
  },
];

export const Home = () => {
  const [total, changeTotal] = useState(0);
  const insets = useSafeArea();

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
          Grocery Shop
        </Text>
        <Text style={styles.date}>Today's date: 21/11/2019</Text>
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
          Total Sum: ${total}
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
