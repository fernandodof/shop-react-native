import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/product-detail-screen/ProductDetailScreen';
import UserProductScreen from '../screens/user/UserProductScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';

import Colors from '../constants/Colors';
import { ROUTES } from './routes';

const isAndroid = Platform.OS === 'android';

const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: isAndroid ? Colors.primary : ''
	},
	headerTintColor: isAndroid ? 'white' : Colors.primary,
	headerTitleStyle: {
		fontFamily: 'open-sans-bold'
	},
	headerBackTitleStyle: {
		fontFamily: 'open-sans'
	}
}

const ProductsNavigator = createStackNavigator({
	[ROUTES.ProductsOverview]: ProductsOverviewScreen,
	[ROUTES.PrductDetail]: ProductDetailScreen,
	[ROUTES.CartScreen]: CartScreen
}, {
	navigationOptions: {
		drawerIcon: (drawerConfig: any) => (
			<Ionicons
				name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
				size={23}
				color={drawerConfig.tintColor} >
			</Ionicons>
		)
	},
	defaultNavigationOptions
});

const OrdersNavigartor = createStackNavigator({
	[ROUTES.OrdersScreen]: OrdersScreen
}, {
	navigationOptions: {
		drawerIcon: (drawerConfig: any) => (
			<Ionicons
				name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
				size={23}
				color={drawerConfig.tintColor} >
			</Ionicons>
		)
	},
	defaultNavigationOptions
});

const UserProductsNavigator = createStackNavigator({
	[ROUTES.UserProductsScreen]: UserProductScreen
}, {
	navigationOptions: {
		drawerIcon: (drawerConfig: any) => (
			<Ionicons
				name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
				size={23}
				color={drawerConfig.tintColor} >
			</Ionicons>
		)
	},
	defaultNavigationOptions
});

const ShopNavigator = createDrawerNavigator({
	Products: ProductsNavigator,
	Orders: OrdersNavigartor,
	UserProducts: UserProductsNavigator
}, {
	contentOptions: {
		activeTintColor: Colors.primary
	}
})

export const AppContainer = createAppContainer(ShopNavigator);