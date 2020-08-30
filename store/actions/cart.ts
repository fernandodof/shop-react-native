import Product from "../../models/product";

export const ADD_TO_CART = '[CART] Add';
export const REMOVE_FROM_CART = '[CART] Remove';

interface AddToCartAction {
	type: typeof ADD_TO_CART;
	payload: Product;
}

interface RemoveFromCartAction {
	type: typeof REMOVE_FROM_CART;
	payload: string;
}

export const addToCart = (product: Product): AddToCartAction => {
	return {
		type: ADD_TO_CART,
		payload: product
	};
}

export const removeFromCart = (productId: string): RemoveFromCartAction => {
	return {
		type: REMOVE_FROM_CART,
		payload: productId
	}
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction;