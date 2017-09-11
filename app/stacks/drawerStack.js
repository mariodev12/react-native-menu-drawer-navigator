import {
    StackNavigator
} from 'react-navigation';
import {
    TouchableHighlight,
    Text,
    View
} from 'react-native'
import React from 'react';

import DrawerScreen from './drawerScreen';

const DrawerNavigation = StackNavigator({
    DrawerStack: {screen: DrawerScreen}
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: 'rgb(255, 45, 85)',
            paddingLeft: 10,
            paddingRight: 10
        },
        title: 'Home',
        headerTintColor: 'white',
        headerLeft: <View>
            <TouchableHighlight 
                onPress={() => {
                    if(navigation.state.index === 0){
                        navigation.navigate('DrawerOpen');
                    } else {
                        navigation.navigate('DrawerClose');
                    }
                }}>
                <Text>Menu</Text>
            </TouchableHighlight>
        </View>
    })
})

export default DrawerNavigation;