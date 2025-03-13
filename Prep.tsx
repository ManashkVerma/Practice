import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar
} from 'react-native'


const App = () => {
    return (
        <SafeAreaView style = {styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#000"/>
            <ScrollView contentContainerStyle={styles.container}>
                <Text>
                    
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: StatusBar.currentHeight
    },
    container : {
        padding: 16
    }
})



export default App