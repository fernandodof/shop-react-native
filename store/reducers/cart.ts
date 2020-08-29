import Product from '../../models/product';
import { CartItem } from '../../models/cart';
import { CartActionTypes, ADD_TO_CART } from '../actions/cart';

interface CartState {
	items: Record<string, CartItem>;
	totalAmount: number;
}

const initialState: CartState = {
	items: {},
	totalAmount: 0
}

export function cartReducer(state = initialState, action: CartActionTypes): CartState {
	switch (action.type) {
		case ADD_TO_CART:
			const addedProduct = action.payload;

			let updatedOrNewCartItem: CartItem;

			if (state.items[addedProduct.id]) {
				const existingItem = state.items[addedProduct.id];

				updatedOrNewCartItem = {
					...existingItem,
					quantity: existingItem.quantity + 1,
					sum: existingItem.sum + addedProduct.price
				};

				updatedOrNewCartItem.quantity++;
				updatedOrNewCartItem.sum += addedProduct.price;
			} else {
				updatedOrNewCartItem = {
					productId: addedProduct.id,
					productTitle: addedProduct.title,
					productPrice: addedProduct.price,
					quantity: 1,
					sum: 1 * addedProduct.price
				}
			}

			return {
				...state,
				items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
				totalAmount: state.totalAmount + addedProduct.price
			};
		default:
			return state;
	}
}