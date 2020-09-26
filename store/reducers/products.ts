import Product from '../../models/product';
import { DELETE_PRODUCT, ProductActionTypes } from '../actions/products';
import PRODUCTS from '../../data/dummy-data';

interface ProductState {
	availableProducts: Product[];
	userProducts: Product[]
}

const initialState: ProductState = {
	availableProducts: PRODUCTS,
	userProducts: PRODUCTS.filter(product => product.ownerId === 'u1')
}

export const productReducer = (state = initialState, action: ProductActionTypes): ProductState => {
	switch (action.type) {
		case DELETE_PRODUCT:
			return {
				...state,
				userProducts: state.userProducts.filter(product => product.id !== action.payload),
				availableProducts: state.availableProducts.filter(product => product.id !== action.payload)
			};
	}
	return state;
}