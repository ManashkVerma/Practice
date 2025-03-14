import React from 'react'

import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native'

const App = () => {
    return (
        <View>
            <Text style = {styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style = {[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text> 
                </View>
                <View style = {[styles.card, styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style = {[styles.card, styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style = {[styles.card, styles.cardElevated]}>
                    <Text>scroll</Text>
                </View>
                <View style = {[styles.card, styles.cardElevated]}>
                    <Text>more....</Text>
                </View>
            </ScrollView>
        </View>
    );
}     

const styles = StyleSheet.create({
    headingText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom:8
    },
    container: {
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        backgroundColor: '#5B5454'
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        margin: 10,
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    cardElevated: {
        backgroundColor: '#CECECE',
        elevation: 55
    }
})


export default App