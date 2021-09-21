import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style = {styles.container}>
            <Image 
            source={require('../assets/heart_logo.png')}
            style={{ resizeMode: "stretch", height: 26, width: 26 }}
            />
            <Text style= {styles.textHeader}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    textHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        color: "#333",
        letterSpacing: 1,

    }
});