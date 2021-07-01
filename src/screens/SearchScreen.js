import React, {useState} from 'react';
import { View, Button, StyleSheet,ScrollView, Text } from 'react-native';
import ListAdapter from '../../components/ListAdapter';
import SearchBar from '../../components/SearchBar';
import {ExpensiveLuxuriousRestaurants, CostEffectiveRestaurants, MediumPricingRestaurants} from '../../data/ListContents'

const SearchScreen = () => {
    const [searchContent, setSearchContent] = useState('');

    return (
        /* ===<View style = {{flex: 1}}>*/
        <>   
            <SearchBar
            text = {searchContent}
            textChange = {newContent => setSearchContent(newContent)}
            onSearch = {console.log('Finding Text', {searchContent})}
            />

            <Text>{searchContent}</Text>

            <ScrollView>
                <ListAdapter 
                name = "Cost Effective Restaurants"
                content = {CostEffectiveRestaurants}
                />

                <ListAdapter 
                name = "Medium Pricing Restaurants"
                content = {MediumPricingRestaurants}
                />

                <ListAdapter 
                name = "Expensive Luxurious Restaurants"
                content = {ExpensiveLuxuriousRestaurants}
                />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;