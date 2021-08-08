import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

class Home extends Component {
    render = () => {
        return (
            <View>
                <Text>Home</Text>
            </View>
        );
    }
}
class Reservations extends Component {
    render = () => {
        return (
            <View>
                <Text>Reservations</Text>
            </View>
        );
    }
}

class Transport extends Component {
    render = () => {
        return (
            <View>
                <Text>Transportation</Text>
            </View>
        );
    }
}

class Payment extends Component {
    render = () => {
        return (
            <View>
                <Text>Payment</Text>
            </View>
        );
    }
}
const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName = "Home"
            activeColor = "#f0edf6"
            inactiveColor = "#3e2465"
            barStyle = {{backgroundColor: '#694fad'}}
            >
                <Tab.Screen name = "Home" component= {Home}/>
                <Tab.Screen name = "Reservations" component = {Reservations}/>
                <Tab.Screen name = "Transportation" component = {Transport}/>
                <Tab.Screen name = "Payment" component = {Payment}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BottomTabNavigator;