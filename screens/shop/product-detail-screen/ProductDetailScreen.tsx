import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

import { ProductDetailItemScreenProps } from './procuctDetail.model';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const ProductDetailScreen: NavigationStackScreenComponent = (props: ProductDetailItemScreenProps) => {
	const productId = props.navigation.getParam('productId');

	const selectedProduct = useSelector((state: RootState) => state.products.availableProducts.find(product => product.id === productId));

	return (
		<View>
			<Text>{selectedProduct?.title}</Text>
		</View>
	);
}

ProductDetailScreen.navigationOptions = navData => {
	return {
		headerTitle: navData.navigation.getParam('productTitle')
	};
};

const styles = StyleSheet.create({

});

export default ProductDetailScreen;