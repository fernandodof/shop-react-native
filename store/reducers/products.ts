import Product from '../../models/product';
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, ProductActionTypes } from '../actions/products';
import PRODUCTS from '../../data/dummy-data';

interface ProductState {
	availableProducts: Product[];
	userProducts: Product[]
}

const defaultUserId = 'u1';

const initialState: ProductState = {
	availableProducts: PRODUCTS,
	userProducts: PRODUCTS.filter(product => product.ownerId === defaultUserId)
}

export const productReducer = (state = initialState, action: ProductActionTypes): ProductState => {
	switch (action.type) {
		case CREATE_PRODUCT:
			const newProduct: Product = {
				id: new Date().toString(),
				title: action.payload.title!,
				description: action.payload.description!,
				imageUrl: action.payload.imageUrl!,
				price: action.payload.price!,
				ownerId: defaultUserId
			};

			return {
				...state,
				availableProducts: [...state.availableProducts, newProduct],
				userProducts: [...state.userProducts, newProduct]
			};
		case UPDATE_PRODUCT:
			const userProductsIndex = state.userProducts.findIndex(product => product.id === action.payload.id);
			const availableProductsIndex = state.availableProducts.findIndex(product => product.id === action.payload.id);

			const updatedProduct = {
				...state.userProducts[userProductsIndex],
				...action.payload
			};

			const availableProducts = [...state.availableProducts];
			availableProducts[availableProductsIndex] = updatedProduct;

			const userProducts = [...state.userProducts];
			userProducts[userProductsIndex] = updatedProduct;

			return {
				...state,
				availableProducts,
				userProducts
			};
		case DELETE_PRODUCT:
			return {
				...state,
				userProducts: state.userProducts.filter(product => product.id !== action.payload),
				availableProducts: state.availableProducts.filter(product => product.id !== action.payload)
			};
		default:
			return state;
	}
}