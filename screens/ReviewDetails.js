import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

const ReviewDetails = ({route }) => {
    let ratingImage;
    const getRatingImage = () => {
        switch(route.params.rating) {
            case '1':
            case 1: return require('../assets/rating-1.png')
            case '2':
            case 2: return require('../assets/rating-2.png')
            case '3':
            case 3: return require('../assets/rating-3.png')
            case '4':
            case 4: return require('../assets/rating-4.png')
            case '5':
            case 5: return require('../assets/rating-5.png')

        }
    }
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <View style={styles.rating}>
                    <Text>GameMania rating: </Text>
                    <Image source = {getRatingImage()} />
                </View>
            </Card>
        </View>
        
    )
}

export default ReviewDetails

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
});