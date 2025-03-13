import React from 'react'

import {
    Text,
    ScrollView,
    StyleSheet,
    View,
    StatusBar,
    SafeAreaView
} from 'react-native'


const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.oldContainer}>
        <Text style={styles.textStyle}>Flat Cards</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.card1]}>
            <Text style={{color: "#fff"}}>Red</Text>
          </View>
          <View style={[styles.card, styles.card2]}>
            <Text style={{color: "#fff"}}>Blue</Text>
          </View>
          <View style={[styles.card, styles.card3]}>
            <Text style={{color: "#fff"}}>Green</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: '#696969', 
    paddingTop: StatusBar.currentHeight, 
  },
  oldContainer: {
    padding: 16,
  },
  textStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 8,
    margin: 8,

  },
  card1: {
    backgroundColor: "#E40A0C"
  },
  card2: {
    backgroundColor: "#329BEB"
  },
  card3: {
    backgroundColor: "#26E826"
  },
});

export default App