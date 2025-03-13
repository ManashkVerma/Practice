import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native'

const App = () => {
    return (
        <View>
            <Text style = {styles.headingText}>Trending Places</Text>
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
    card:{
        marginHorizontal:11,
        borderBottomRightRadius:50,
        borderTopLeftRadius:50,
        
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