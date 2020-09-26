import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { FlatList, Platform, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { RootState } from '../../store';
import ProductItem from '../../components/shop/product-item/ProducItem';
import { ROUTES } from '../../navigation/routes';
import * as cartActions from '../../store/actions/cart';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';

const ProductsOverviewScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const products = useSelector((state: RootState) => state.products.availableProducts);
	const dispatch = useDispatch();

	const onSelectItem = (productId: string, productTitle: string) => navigation.navigate(ROUTES.PrductDetail, { productId, productTitle });

	return <FlatList data={products} renderItem={itemData => <ProductItem
		title={itemData.item.title}
		price={itemData.item.price}
		imageUrl={itemData.item.imageUrl}
		onSelect={() => onSelectItem(itemData.item.id, itemData.item.title)}>
		<Button color={Colors.primary} title="View Details" onPress={() => onSelectItem(itemData.item.id, itemData.item.title)}></Button>
		<Button color={Colors.primary} title="To cart" onPress={() => dispatch(cartActions.addToCart(itemData.item))}></Button>
	</ProductItem>
	} />;
};

ProductsOverviewScreen.navigationOptions = (navData: any) => {
	return {
		headerTitle: 'All products',
		headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item title='Cart' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} onPress={() => navData.navigation.toggleDrawer()} ></Item>
		</HeaderButtons>,
		headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item title='Cart' iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} onPress={() => navData.navigation.navigate(ROUTES.CartScreen)} ></Item>
		</HeaderButtons>
	}
};

export default ProductsOverviewScreen;
