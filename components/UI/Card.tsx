import React from 'react';
import { View, StyleSheet } from 'react-native';

interface CardProps {
	style: {},
	children: any
}

const Card = (props: CardProps) => {
	return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
};

const styles = StyleSheet.create({
	card: {
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		elevation: 10,
		backgroundColor: 'white',
	}
});

export default Card;