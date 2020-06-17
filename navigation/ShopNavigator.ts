import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';

import ProductsOverviewScreen from './../screens/shop/ProductsOverviewScreen';
import Colors from './../constants/Colors';

export enum ROUTES {
	ProductsOverviewScreen = 'ProductsOverviewScreen'
}

const isAndroid = Platform.OS === 'android';

const ProductsNavigator = createStackNavigator({
	[ROUTES.ProductsOverviewScreen]: ProductsOverviewScreen
}, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: isAndroid ? Colors.primary : ''
		},
		headerTintColor: isAndroid ? 'white' : Colors.primary
	},
});

export default createAppContainer(ProductsNavigator);