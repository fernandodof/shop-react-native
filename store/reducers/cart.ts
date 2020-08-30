import Product from '../../models/product';
import { CartItem } from '../../models/cart';
import { CartActionTypes, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';
import { store } from '..';

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
		case REMOVE_FROM_CART:
			const productId = action.payload;
			const currentItem = state.items[productId];

			let updatedItems = { ...state.items };

			if (currentItem.quantity > 1) {
				updatedItems = {
					...updatedItems,
					[productId]: {
						...state.items[productId],
						quantity: currentItem.quantity - 1,
						sum: currentItem.sum - currentItem.productPrice
					}
				}
			} else {
				delete updatedItems[productId];
			}

			return {
				...state,
				items: updatedItems,
				totalAmount: Math.abs(state.totalAmount - currentItem.productPrice)
			};

		default:
			return state;
	}
}