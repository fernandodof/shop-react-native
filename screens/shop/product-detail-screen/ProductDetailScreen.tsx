import React from 'react';
import { Text, Image, Button, StyleSheet, ScrollView, View } from 'react-native';

import { ProductDetailItemScreenProps } from './procuctDetail.model';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import { RootState } from '../../../store';
import Colors from '../../../constants/Colors';
import * as cartActions from '../../../store/actions/cart';

const ProductDetailScreen: NavigationStackScreenComponent = (props: ProductDetailItemScreenProps) => {
	const productId = props.navigation.getParam('productId');
	const dispath = useDispatch();

	const selectedProduct = useSelector((state: RootState) => state.products.availableProducts.find(product => product.id === productId));

	return (
		<ScrollView>
			<Image style={styles.image} source={{ uri: selectedProduct?.imageUrl }}></Image>
			<View style={styles.actions}>
				<Button color={Colors.primary} title="Add to cart" onPress={() => { dispath(cartActions.addToCart(selectedProduct!)) }}></Button>
			</View>
			<Text style={styles.price}>${selectedProduct?.price.toFixed(2)}</Text>
			<Text style={styles.description}>{selectedProduct?.description}</Text>
		</ScrollView>
	);
}

ProductDetailScreen.navigationOptions = navData => {
	return {
		headerTitle: navData.navigation.getParam('productTitle')
	};
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300
	},
	actions: {
		marginVertical: 10,
		alignItems: 'center'
	},
	price: {
		fontSize: 22,
		color: '#800',
		marginVertical: 20,
		textAlign: 'center',
		fontFamily: 'open-sans-bold'
	},
	description: {
		fontSize: 16,
		textAlign: 'center',
		marginHorizontal: 20,
		fontFamily: 'open-sans'
	}
});

export default ProductDetailScreen;