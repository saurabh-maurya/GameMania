import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/About';
import Home from '../screens/Home';
import Header from '../shared/header';
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor:'transparent'
                },
                headerBackground: () => (
                    <Image style={{flex:1}} source={require('../assets/game_bg.png')} />
                ),
                headerTitleAlign: 'center'
            }}
        >
                
            <Drawer.Screen 
                name="HomeDrawer" 
                component={Home} 
                options={{ 
                    headerTitle: (props) => <Header  title={"GameMania"}/>,
                    drawerLabel: 'Home',
                }}
            />
            <Drawer.Screen
                name="About"
                component={About}
                options={{
                    headerTitle: (props) => <Header  title={"About"}/>,
                    drawerLabel: 'About',
                }}
            />
        </Drawer.Navigator>
    )
}

export default HomeDrawer
