import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView
} from 'react-native'

const App = () => {
    return (
        <View>
            <Text style = {styles.headingText}>Trending Places</Text>
            <ScrollView style={styles.HorizontalScroll} horizontal={true}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image 
                        source={{
                            uri:'https://ts3.mm.bing.net/th?id=OIP.bCxwFH4xl9y-PYB327hiAAHaE8&pid=15.1'
                        }} 
                        style = {styles.cardImage}
                        />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Taj Mahal</Text>
                        <Text style={styles.cardLabel}>Agra, Uttar Pradesh</Text>
                        <Text style={styles.cardDiscription}>The Taj Mahal in Agra, India,built by Mughal Emperor Shah Jahan in memory of his wife, Mumtaz Mahal.</Text>
                        <Text style={styles.cardFooter}>145 Km Away</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image 
                        source={{
                            uri:'https://wallpaperaccess.com/full/1896134.jpg'
                        }} 
                        style = {styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>India Gate</Text>
                        <Text style={styles.cardLabel}>New Delhi, Delhi</Text>
                        <Text style={styles.cardDiscription}>India Gate is a 42-meter-high war memorial in New Delhi, built in honor of Indian soldiers who died in World War I.</Text>
                        <Text style={styles.cardFooter}>145 Km Away</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image 
                        source={{
                            uri:'https://th.bing.com/th/id/OIP.zA-g0mztTuLbkVWM1bbAbQHaEK?w=312&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                        }} 
                        style = {styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Hampi </Text>
                        <Text style={styles.cardLabel}>Vijayanagara , Karnataka</Text>
                        <Text style={styles.cardDiscription}>Hampi is a UNESCO World Heritage Site located in the town of Hampi in Vijayanagara district, east-central Karnataka, India.</Text>
                        <Text style={styles.cardFooter}>145 Km Away</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image 
                        source={{
                            uri:'https://th.bing.com/th/id/OIP.FiOIyfulztBemXv7SxqAygHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                        }} 
                        style = {styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Akshardham Temple</Text>
                        <Text style={styles.cardLabel}>Delhi, Delhi</Text>
                        <Text style={styles.cardDiscription}>Akshardham is a spiritual and cultural complex dedicated to devotion, learning and harmony.</Text>
                        <Text style={styles.cardFooter}>145 Km Away</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom:10,
        marginTop: 8
    },
    HorizontalScroll:{

    },
    card:{
        marginHorizontal:10,
        borderBottomRightRadius:50,
        borderTopLeftRadius:50,
        width:360
    },
    cardElevated:{
        backgroundColor:'#FFF',
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1
        }
    },
    cardImage:{
        height:180,
        borderTopLeftRadius:50,
        marginBottom:8
    },
    cardBody:{
        flex: 1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        fontSize:27,
        fontWeight: 'medium'
    },
    cardLabel:{
        fontSize: 16,
        color: '#696969'
    },
    cardDiscription:{
        fontSize: 12,

    },
    cardFooter:{}

})

export default App