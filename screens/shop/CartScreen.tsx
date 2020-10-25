import * as React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch, batch } from 'react-redux';

import Card from '../../components/UI/Card';
import { RootState } from '../../store';
import Colors from '../../constants/Colors';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import CartItem from '../../components/shop/cart-item/CartItem';
import * as cartActions from '../../store/actions/cart';
import * as orderActions from '../../store/actions/orders';

const CartScreen: NavigationStackScreenComponent = props => {
	const cartTotalAmount = useSelector((state: RootState) => state.cart.totalAmount);
	const cartItems = useSelector((state: RootState) => Object.values(state.cart.items));

	const dispatch = useDispatch();

	return <View style={styles.screen}>
		<Card style={styles.summary}>
			<Text style={styles.summaryText}>Total: <Text style={styles.summaryTotal}>${Math.round(+cartTotalAmount.toFixed(2) * 100) / 100}</Text></Text>
			<Button title="Order now"
				color={Colors.accent}
				disabled={!cartItems.length}
				onPress={() => {
					batch(() => {
						dispatch(orderActions.addOrder(cartItems));
						dispatch(cartActions.clearCart());
					})
				}}>
			</Button>
		</Card>
		<FlatList data={cartItems}
			keyExtractor={item => item.productId}
			renderItem={itemData => <CartItem {...{ ...itemData.item, onRemove: () => { dispatch(cartActions.removeFromCart(itemData.item.productId)) } }} ></CartItem>}>
		</FlatList>
	</View>;
};

CartScreen.navigationOptions = {
	headerTitle: 'Your Cart'
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
		marginBottom: 10,
		padding: 10
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