import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList} from 'react-native';
import { CostEffectiveRestaurants,ExpensiveLuxuriousRestaurants,MediumPricingRestaurants } from '../../data/ListContents';
import BottomTabNavigator from '../../components/BottomTabNavigator';

const InfoScreen = (props) => {
    const item = props.navigation.getParam('objectTransfer');
    const [result, setResult] = useState([]);
    console.log(props);

   return (
       <View style = {styles.pageStyle}>
           <Image
           style = {styles.coverImageStyle}
           source = {{uri: item.photos_url.coverPhoto}} 
           />
           <Image
           style = {styles.logoImageStyle}
           source = {{uri: item.photos_url.logo}} 
           />
           <BottomTabNavigator/>
       </View>
   );
}

const styles = StyleSheet.create({
    pageStyle: {
    },
    coverImageStyle: {
        maxWidth: '100%',
        height: '35%',
    },
    logoImageStyle: {
        width: 100,
        height: 100,
        borderRadius: 200,
        zIndex: 1,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        alignSelf: 'flex-end',
        marginRight: 20,
        transform: [{translateY: -30}],
    }
});

export default InfoScreen;