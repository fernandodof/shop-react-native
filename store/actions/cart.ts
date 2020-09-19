import { cos } from "react-native-reanimated";
import Product from "../../models/product";

export const ADD_TO_CART = '[CART] Add';
export const REMOVE_FROM_CART = '[CART] Remove';
export const CLEAR_CART = '[CART]: Clear';

interface AddToCartAction {
	type: typeof ADD_TO_CART;
	payload: Product;
}

interface RemoveFromCartAction {
	type: typeof REMOVE_FROM_CART;
	payload: string;
}

interface ClearCart {
	type: typeof CLEAR_CART
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

export const clearCart = (): ClearCart => {
	return {
		type: CLEAR_CART
	}
};

export type CartActionTypes = AddToCartAction | RemoveFromCartAction | ClearCart;