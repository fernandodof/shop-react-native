import React from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import { store } from './store/index';
import { AppContainer } from './navigation/ShopNavigator';

export default function App() {
	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});

	if (!fontsLoaded) {
		return <AppLoading></AppLoading>
	}

	return (
		<Provider store={store}>
			<AppContainer></AppContainer>
		</Provider>
	);
}
