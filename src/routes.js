
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './Pages/Home';
import Main from './Pages/Main';
import Erro from './Pages/Erro'

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false
}

const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Erro" component={Erro} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes