import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { CartItem as CartItemModel } from '../../../models/cart';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface CartItemProps extends CartItemModel {
	onRemove: Function
};

const CartItem = (props: CartItemProps) => {
	return <View style={styles.cartItem}>
		<View style={styles.itemData}>
			<Text style={styles.quantity}>{props.quantity} </Text>
			<Text style={styles.mainText}>{props.productTitle}</Text>
		</View>
		<View style={styles.itemData}>
			<Text style={styles.mainText}>{props.sum.toFixed(2)}</Text>
			<TouchableOpacity onPress={() => props.onRemove()} style={styles.deleteButton}>
				<Ionicons name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'} size={23} color="red"></Ionicons>
			</TouchableOpacity>
		</View>
	</View>;
};

export default CartItem;

const styles = StyleSheet.create({
	cartItem: {
		padding: 10,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 0
	},
	itemData: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	quantity: {
		fontFamily: 'open-sans',
		color: '#888',
		fontSize: 16
	},
	mainText: {
		fontFamily: 'open-sans-bold',
		fontSize: 16
	},
	deleteButton: {
		marginLeft: 20
	},
});