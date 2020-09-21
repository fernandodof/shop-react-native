import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Order } from '../../../models/order';

import CartItem from './../cart-item/CartItem';
import Colors from './../../../constants/Colors';
import { convertDate } from './../../../util/dataFuntions';

const OrderItem = (props: Order) => {
	const [showDetails, setShowDetails] = useState(false);

	return <View style={styles.orderItem}>
		<View style={styles.summary}>
			<Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
			<Text style={styles.date}>{convertDate(props.date)}</Text>
		</View>
		<Button title={showDetails ? 'Hide details' : 'Show details'} color={Colors.primary} onPress={() => setShowDetails(prevState => !prevState)}></Button>
		{showDetails &&
			<View style={styles.details}>
				{props.items.map(item => <CartItem key={item.productId} {...item}></CartItem>)}
			</View>
		}
	</View>;
};

const styles = StyleSheet.create({
	orderItem: {
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 10,
		backgroundColor: 'white',
		margin: 10,
		padding: 10,
		alignItems: 'center'
	},
	summary: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		marginBottom: 10
	},
	totalAmount: {
		fontFamily: 'open-sans-bold',
		fontSize: 16
	},
	date: {
		fontSize: 16,
		fontFamily: 'open-sans',
		color: '#888'
	},
	details: {
		width: '100%'
	}
});

export default OrderItem;