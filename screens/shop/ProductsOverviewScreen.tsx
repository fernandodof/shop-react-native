import React from 'react';
import { NavigationStackScreenComponent, NavigationStackScreenProps } from 'react-navigation-stack';
import { FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { RootState } from '../../store';
import ProductItem from '../../components/shop/product-item/ProducItem';
import { ROUTES } from '../../navigation/routes';
import * as cartActions from '../../store/actions/cart';
import CustomHeaderButton from '../../components/UI/HeaderButton';

const ProductsOverviewScreen: NavigationStackScreenComponent = props => {
	const products = useSelector((state: RootState) => state.products.userProducts);
	const dispatch = useDispatch();

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
		onAddToCard={() => { dispatch(cartActions.addToCart(itemData.item)) }}></ProductItem>
	} />;
};

ProductsOverviewScreen.navigationOptions = (navData: NavigationStackScreenProps) => {
	return {
		headerTitle: 'All products',
		headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item title='Cart' iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} onPress={() => navData.navigation.navigate(ROUTES.CartScreen)} ></Item>
		</HeaderButtons>
	}
};

export default ProductsOverviewScreen;
