import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Linking
} from 'react-native'


export default function  ActionCards() {

    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }

    return (
        <View>
            <Text style = {styles.HeadingText}> Action card</Text>
            <View style = {[styles.card, styles.cardElevated]}>
                <View style={styles.HeadingContainer}>
                    <Text style = {styles.headerText}></Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    HeadingText: {

    },
    card:{},
    cardElevated:{},
    HeadingContainer:{},
    headerText:{}
})