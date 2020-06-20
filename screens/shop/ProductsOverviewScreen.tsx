import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import ProductItem from '../../components/shop/product-item/ProducItem';
import { ROUTES } from '../../navigation/routes';

const ProductsOverviewScreen: NavigationStackScreenComponent = props => {
	const products = useSelector((state: RootState) => state.products.userProducts);

	return <FlatList data={products} renderItem={itemData => <ProductItem
		title={itemData.item.title}
		price={itemData.item.price}
		imageUrl={itemData.item.imageUrl}
		onViewDetail={() => {
			props.navigation.navigate(ROUTES.PrductDetail, {
				productId: itemData.item.id,
				productTitle: itemData.item.title
			})
		}}
		onAddToCard={() => { }}></ProductItem>
	} />;
};

const styles = StyleSheet.create({});

ProductsOverviewScreen.navigationOptions = {
	headerTitle: 'All products'
};

export default ProductsOverviewScreen;
