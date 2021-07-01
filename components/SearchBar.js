import React from 'react';
import { View, Button, Text, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

const SearchBar = (props) => {
    return (
        <View style = {styles.backgroundStyle}>
            <FontAwesome 
            name = 'search'
            style = {styles.searchIconStyle}
            />

            <TextInput
            placeholder = 'Search'
            style = {styles.searchArea}
            value = {props.text}
            onChangeText = {props.textChange}
            onEndEditing = {props.onSearch}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        height: 50,
        margin: 10,
        backgroundColor: '#d6d6d6',
        borderRadius: 20,
        flexDirection: 'row',
    },
    searchIconStyle: {
        fontSize: 30,
        margin: 2,
        alignSelf: 'center',
        marginHorizontal: 8,
    },
    searchArea: {
        flex: 1,
    }
});

export default SearchBar;