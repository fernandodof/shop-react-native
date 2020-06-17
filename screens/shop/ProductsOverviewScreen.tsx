import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ProductsOverviewScreen = () => {
	const products = useSelector((state: RootState) => state.products.userProducts);

	return <FlatList data={products} renderItem={itemData => <Text>{itemData.item.title}</Text>} />;
};

const styles = StyleSheet.create({});

ProductsOverviewScreen.navigationOptions = {
	headerTitle: 'All products'
};

export default ProductsOverviewScreen;
