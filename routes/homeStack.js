import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeDrawer from './homeDrawer';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/header';
import { Image } from 'react-native';
const backImage = require('../assets/game_bg.png')
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    
                    headerBackImage: {backImage},
                    headerTitleAlign: 'center'
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeDrawer}
                    options={{
                        headerShown: false
                    }}

                />
                <Stack.Screen 
                    name="ReviewDetails" 
                    component={ReviewDetails} 
                    options={{
                        headerTitle: (props) => <Header title={"Review Details"}/>
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation