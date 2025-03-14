import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Linking,
    Image,
    TouchableOpacity
} from 'react-native'


export default function  ActionCards() {

    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }

    return (
        <View>
            <Text style = {styles.HeadingText}>Blog card</Text>
            <View style = {[styles.card, styles.cardElevated]}>
                <View style={styles.HeadingContainer}>
                    <Text style = {styles.headerText}> 
                        What 's new  in javascript 21 - ES21
                    </Text>
                    <Image
                    source={{
                        uri:'https://th.bing.com/th/id/OIP.YCz4CsNs1O79DCZnC7J6GQHaEK?rs=1&pid=ImgDetMain'
                        // URI of Image
                    }}
                    style = {styles.imageCard}
                    />
                    <View style = {styles.bodyContainer}>
                        <Text>
                        JavaScript (JS) is a versatile scripting language used for dynamic web development. The latest versions, like ES6+, introduce modern features such as async/await, arrow functions, and modules.
                        </Text>
                    </View>
                    <View style = {styles.footerContainer}>
                        <TouchableOpacity
                        onPress={() => openWebsite('https://www.geeksforgeeks.org/node-js-21-is-here-whats-new/')}
                        >
                            <Text style = {styles.socialLink}>Read more...</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => openWebsite('https://www.instagram.com/geeks_for_geeks/')}
                        >
                            <Text style = {styles.socialLink}>Follow for more</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    HeadingText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom:10,
        marginTop: 8
    },
    card:{
        width:370,
        height:340,
        borderTopRightRadius:60,
        marginHorizontal:12
    },
    cardElevated:{
        backgroundColor:'#E8E8E8',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    HeadingContainer:{},
    headerText:{},
    imageCard:{
        height: 210,
        borderTopRightRadius:29,
    },
    bodyContainer:{},
    footerContainer:{
        flex:1,
        marginBottom:50
    },
    socialLink:{
    }
})