import React from 'react';
import {
    Text,
    ScrollView,
    StyleSheet,
    View,
    StatusBar,
    SafeAreaView
} from 'react-native';

import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards'
import FancyCards from './Components/FancyCards'



const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
}



export default App;
