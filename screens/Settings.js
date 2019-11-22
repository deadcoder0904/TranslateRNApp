import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ListItem, Text} from 'react-native-elements';
import {useSafeArea} from 'react-native-safe-area-context';

const langs = ['en', 'fr'];

export const Settings = () => {
  const [lang, changeLang] = useState('en');
  const insets = useSafeArea();
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Text h4 h4Style={styles.language}>
        Change Language
      </Text>
      {langs.map((currentLang, i) => (
        <ListItem
          key={i}
          title={currentLang}
          bottomDivider
          checkmark={currentLang === lang}
          onPress={() => changeLang(currentLang)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  language: {
    paddingTop: 10,
    textAlign: 'center',
  },
});
