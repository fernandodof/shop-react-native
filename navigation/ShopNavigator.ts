import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';

import ProductsOverviewScreen from './../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/product-detail-screen/ProductDetailScreen';
import Colors from './../constants/Colors';
import { ROUTES } from './routes';

const isAndroid = Platform.OS === 'android';

const ProductsNavigator = createStackNavigator({
	[ROUTES.ProductsOverview]: ProductsOverviewScreen,
	[ROUTES.PrductDetail]: ProductDetailScreen
}, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: isAndroid ? Colors.primary : ''
		},
		headerTintColor: isAndroid ? 'white' : Colors.primary
	},
});

export default createAppContainer(ProductsNavigator);