/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {SafeAreaView, StyleSheet, Switch} from 'react-native';
// import {myColors} from './src/styles/Colors';
import {ThemeContext} from './src/context/ThemeContext';
import MyKeyboard from './src/components/KeysAndScreen';
import LinearGradient from 'react-native-linear-gradient';

function App(): React.JSX.Element {
  const [theme, setTheme] = useState('light');

  return (
    <LinearGradient
      colors={['#B5FFFC', '#FFDEE9']}
      style={styles.linearGradient}>
      <ThemeContext.Provider value={theme}>
        <SafeAreaView
          style={
            theme === 'light'
              ? styles.container
              : [styles.container, {backgroundColor: 'black'}]
          }>
          <Switch
            value={theme === 'dark'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <MyKeyboard />
        </SafeAreaView>
      </ThemeContext.Provider>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  linearGradient: {
    flex: 1,
  },
});

export default App;
