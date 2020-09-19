import { Order } from "../../models/order";
import { CartItem } from "../../models/cart";

export const ADD_ORDER = '[ORDER] Add';

interface AddOrderAction {
	type: typeof ADD_ORDER;
	payload: CartItem[];
};

export const addOrder = (items: CartItem[]): AddOrderAction => {
	return {
		type: ADD_ORDER,
		payload: items
	};
};

export type OrderActionTypes = AddOrderAction;