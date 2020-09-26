import React from 'react';
import { FlatList, Platform, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/product-item/ProducItem';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import { RootState } from '../../store';
import Colors from '../../constants/Colors';
import * as productActions from '../../store/actions/products';

const UserProductsScreen = () => {
	const userProducts = useSelector((state: RootState) => state.products.userProducts);
	const dispatch = useDispatch();

	return <FlatList data={userProducts}
		keyExtractor={item => item.id}
		renderItem={itemData => <ProductItem
			title={itemData.item.title}
			price={itemData.item.price}
			imageUrl={itemData.item.imageUrl}
			onSelect={() => { }} >
			<Button color={Colors.primary} title="Edit" onPress={() => { }}></Button>
			<Button color={Colors.primary} title="Delete" onPress={() => dispatch(productActions.deleteProduct(itemData.item.id))}></Button>
		</ProductItem>}>
	</FlatList>
};

UserProductsScreen.navigationOptions = (navData: any) => {
	return {
		headerTitle: 'My products',
		headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item title='Cart' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} onPress={() => navData.navigation.toggleDrawer()} ></Item>
		</HeaderButtons>
	}
};

export default UserProductsScreen;