import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../../components/UI/HeaderButton';
import { RootState } from '../../store';

export interface EdtiProductNavProps {
	productId: string
}

const EditProductScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const productId = navigation.getParam('productId');
	const product = useSelector((state: RootState) => state.products.userProducts.find(prod => prod.id === productId))

	// TODO: improve this
	const [title, setTitle] = useState(product?.title);
	const [imageUrl, setImageUrl] = useState(product?.imageUrl);
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState(product?.description);

	return <ScrollView>
		<View style={styles.form}>
			<View style={styles.formControl}>
				<Text style={styles.label}>Title</Text>
				<TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}></TextInput>
			</View>
			<View style={styles.formControl}>
				<Text style={styles.label}>Image</Text>
				<TextInput style={styles.input} value={imageUrl} onChangeText={text => setImageUrl(text)}></TextInput>
			</View>
			{product ? null : (
				<View style={styles.formControl}>
					<Text style={styles.label}>Price</Text>
					<TextInput style={styles.input} value={price} onChangeText={text => setPrice(text)}></TextInput>
				</View>
			)}
			<View style={styles.formControl}>
				<Text style={styles.label}>Description</Text>
				<TextInput style={styles.input} value={description} onChangeText={text => setDescription(text)}></TextInput>
			</View>
		</View>
	</ScrollView>;
};

EditProductScreen.navigationOptions = ({ navigation }: any) => ({
	headerTitle: navigation.getParam('productId') ? 'Edit Product' : 'Add Product',
	headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
		<Item title='Add' iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
			onPress={() => { }} >
		</Item>
	</HeaderButtons>
})

const styles = StyleSheet.create({
	form: {
		margin: 20
	},
	formControl: {
		width: '100%'
	},
	label: {
		fontFamily: 'open-sans-bold',
		marginVertical: 8
	},
	input: {
		paddingHorizontal: 2,
		paddingVertical: 5,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1
	}
});

export default EditProductScreen;