import Product from '../../models/product';
import { ProductActionTypes } from '../actions/products';
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
	return state;
}