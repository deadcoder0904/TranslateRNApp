import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ListItem, Text} from 'react-native-elements';
import {useSafeArea} from 'react-native-safe-area-context';
import {LocalizationContext} from '../components/Translations';

export const Settings = () => {
  const insets = useSafeArea();
  const {
    translations,
    appLanguage,
    setAppLanguage,
    initializeAppLanguage,
  } = useContext(LocalizationContext);
  initializeAppLanguage();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Text h4 h4Style={styles.language}>
        Change Language
      </Text>
      {translations.getAvailableLanguages().map((currentLang, i) => (
        <ListItem
          key={i}
          title={currentLang}
          bottomDivider
          checkmark={appLanguage === currentLang}
          onPress={() => {
            setAppLanguage(currentLang);
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  language: {
    paddingTop: 10,
    textAlign: 'center',
  },
});
