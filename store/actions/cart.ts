import Product from "../../models/product";

export const ADD_TO_CART = '[CART] Add';

interface AddToCartAction {
	type: typeof ADD_TO_CART;
	payload: Product;
}

export const addToCart = (product: Product): AddToCartAction => {
	return {
		type: ADD_TO_CART,
		payload: product
	};
}

export type CartActionTypes = AddToCartAction;