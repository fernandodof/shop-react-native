import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProductItem from '../../components/shop/product-item/ProducItem';

const ProductsOverviewScreen = () => {
	const products = useSelector((state: RootState) => state.products.userProducts);

	return <FlatList data={products} renderItem={itemData => <ProductItem
		title={itemData.item.title}
		price={itemData.item.price}
		imageUrl={itemData.item.imageUrl}
		onViewDetail={() => { }}
		onAddToCard={() => { }}></ProductItem>
	} />;
};

const styles = StyleSheet.create({});

ProductsOverviewScreen.navigationOptions = {
	headerTitle: 'All products'
};

export default ProductsOverviewScreen;
