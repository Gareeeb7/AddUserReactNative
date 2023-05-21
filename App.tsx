/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RootScreen from './src/Components/RootComponent/RootScreen';
import Layout from './src/Components/Layout/Layout';
import {Provider} from 'react-redux';
import store from './src/Store/store';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    color: '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />
        <Provider store={store} >
          <Layout/>
        </Provider>
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  text: {
    color: '#fff',
  }
});

export default App;
