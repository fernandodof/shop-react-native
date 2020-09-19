import * as React from 'react';
import { FlatList, Platform, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import OrderItem from './../../components/shop/OrderItem/OrderItem';

const OrdersScreen: NavigationStackScreenComponent = () => {
	const orders = useSelector((state: RootState) => state.orders.orders);

	return <FlatList data={orders} renderItem={itemData => <OrderItem {...itemData.item}></OrderItem>}></FlatList>;
};

OrdersScreen.navigationOptions = (navData: any) => {
	return {
		headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item title='Cart' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} onPress={() => navData.navigation.toggleDrawer()} ></Item>
		</HeaderButtons>,
		headerTitle: 'Your Orders'
	}
};

export default OrdersScreen;