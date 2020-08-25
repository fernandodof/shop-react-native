import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store';
import ProductItem from '../../components/shop/product-item/ProducItem';
import { ROUTES } from '../../navigation/routes';
import * as cartActions from '../../store/actions/cart';

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

ProductsOverviewScreen.navigationOptions = {
	headerTitle: 'All products'
};

export default ProductsOverviewScreen;
