/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './store/store';
import {decrement, increment} from './store/counter/counterSlice';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: '#FFFFFF',
    flex: 1,
  };

  const count = useSelector(o => o.counter.value);
  const dispatch = useDispatch();

  const handleDown = () => {
    dispatch(decrement());
  };

  const handleUp = () => {
    dispatch(increment());
  };

  return (
    
      <View style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Text style={styles.title}>Tool Kit Demo</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 40,
            alignItems: 'center',
            marginTop: 60,
          }}>
          <TouchableOpacity onPress={handleDown}>
            <Text style={[styles.title, {color: 'black'}]}>-</Text>
          </TouchableOpacity>
          <Text style={[styles.title, {color: 'black'}]}>
            Count :{count ? count : '00'}
          </Text>
          <TouchableOpacity onPress={handleUp}>
            <Text style={[styles.title, {color: 'black'}]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
   
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    textAlign: 'center',
    color: 'red',
    fontSize: 22,
    marginTop: 20,
  },
});

export default App;
