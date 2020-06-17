import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './store/index';
import ShopNavigator from './navigation/ShopNavigator';

export default function App() {
	return (
		<Provider store={store}>
			<ShopNavigator></ShopNavigator>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
