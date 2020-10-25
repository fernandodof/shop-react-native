import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform
} from 'react-native';

import Card from '../../UI/Card';
import { ProductItemProps } from './productDetailItem.model';

const ProductItem = (props: ProductItemProps) => {
	const TouchableComp: any = Platform.OS === 'android' && Platform.Version ? TouchableNativeFeedback : TouchableOpacity;

	return (
		<Card style={styles.product}>
			<View style={styles.touchable}>
				<TouchableComp onPress={() => props.onSelect && props.onSelect()} useForeground>
					<View>
						<View style={styles.imageContainer}>
							<Image source={{ uri: props.imageUrl }} style={styles.image}></Image>
						</View>
						<View style={styles.details}>
							<Text style={styles.title}>{props.title}</Text>
							<Text style={styles.price}>${props.price.toFixed(2)}</Text>
						</View>
						<View style={styles.actions}>
							{props.children}
						</View>
					</View>
				</TouchableComp>
			</View>
		</Card>
	);
};

const styles = StyleSheet.create({
	product: {
		height: 300,
		margin: 20
	},
	touchable: {
		overflow: 'hidden'
	},
	imageContainer: {
		width: '100%',
		height: '60%',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: '100%'
	},
	details: {
		alignItems: 'center',
		height: '15%',
		padding: 10
	},
	title: {
		fontSize: 18,
		marginVertical: 2,
		fontFamily: 'open-sans-bold'
	},
	price: {
		fontFamily: 'open-sans-bold',
		fontSize: 14,
		color: '#888'
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '25%',
		paddingHorizontal: 15
	}
});

export default ProductItem;
