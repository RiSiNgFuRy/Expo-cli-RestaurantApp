import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { CostEffectiveRestaurants,ExpensiveLuxuriousRestaurants,MediumPricingRestaurants } from '../../data/ListContents';

const InfoScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState([]);

    const getResult = (id_recieved) => {
        if(id_recieved != null){
            for(let i=0; i<CostEffectiveRestaurants.length;i++)
                if(CostEffectiveRestaurants[i].res_id===id_recieved){
                    subImages = CostEffectiveRestaurants[i].image_url;
                }
        }  
        setResult(subImages);
    };

    useEffect (() => {
        getResult(id);
    }, []);

    return(
        <View>
           <Text>InfoScreen</Text>
           <Image
            style = {styles.subImagesStyle}
            source = {{uri: result}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    subImagesStyle: {
        height: 120,
        width: 200,
    }
});

export default InfoScreen;