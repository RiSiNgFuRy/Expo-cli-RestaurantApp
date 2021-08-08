import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation';

const ListAdapter = (props) => {
    return(
        <View style = {styles.backgroundStyle}>
            <Text style = {styles.heading}>{props.name}</Text>

            <FlatList
            showsHorizontalScrollIndicator = {false}
            horizontal
            data = {props.content}
            keyExtractor = {item => item.res_id}
            renderItem = {({item}) => {
                return(
                    <TouchableOpacity onPress = {() => {props.navigation.navigate('Info', {objectTransfer: item})}}>
                        <View style = {styles.cardbox}>
                            <Image
                            style = {styles.imageStyle}
                            source = {{uri: item.image_url}}
                            />
                            <Text style = {styles.subTitle}>{item.res_name}</Text>
                            <View style = {styles.subInfo}>
                                <AntDesign style = {{textAlignVertical: 'center'}} name = 'staro'/>
                                <Text style = {{marginRight: 8}}>{item.res_rating} Stars</Text>
                                <Text>{item.reviews} reviews</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginVertical: 5,
        display: 'flex',
    },
    heading: {
        marginVertical: 5,
        fontSize: 20,
        marginHorizontal: 10,
        fontWeight: 'bold',
    },
    cardbox: {
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#e4e4e4',
        display: 'flex',
    },
    imageStyle: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: 250,
        height: 120,
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginHorizontal: 2,
    },
    subInfo: {
        flexDirection: 'row',
        marginHorizontal: 2,
    }
});

export default withNavigation(ListAdapter);