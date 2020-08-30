import * as React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store';
import Colors from '../../constants/Colors';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import CartItem from '../../components/shop/cart-item/CartItem';
import * as cartActions from '../../store/actions/cart';

const CartScreen: NavigationStackScreenComponent = props => {
	const cartTotalAmount = useSelector((state: RootState) => state.cart.totalAmount);
	const cartItems = useSelector((state: RootState) => Object.values(state.cart.items));

	const dispatch = useDispatch();

	return <View style={styles.screen}>
		<View style={styles.summary}>
			<Text style={styles.summaryText}>Total: <Text style={styles.summaryTotal}>${cartTotalAmount.toFixed(2)}</Text></Text>
			<Button title="Order now" color={Colors.accent} disabled={!cartItems.length} onPress={() => { }}></Button>
		</View>
		<FlatList data={cartItems}
			keyExtractor={item => item.productId}
			renderItem={itemData => <CartItem {...{ ...itemData.item, onRemove: () => { dispatch(cartActions.removeFromCart(itemData.item.productId)) } }} ></CartItem>}>
		</FlatList>
	</View>;
};

const styles = StyleSheet.create({
	screen: {
		margin: 20,
		flex: 1
	},
	summary: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 10,
		backgroundColor: 'white',
		marginBottom: 10

	},
	summaryText: {
		fontFamily: 'open-sans-bold',
		fontSize: 18
	},
	summaryTotal: {
		color: Colors.primary
	}
});

export default CartScreen;