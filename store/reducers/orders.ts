import { Order } from "../../models/order";
import { ADD_ORDER, OrderActionTypes } from "../actions/orders";

interface OrdersState {
	orders: Order[];
}

const initalState: OrdersState = {
	orders: []
};

export const ordersReducer = (state = initalState, action: OrderActionTypes): OrdersState => {
	switch (action.type) {
		case ADD_ORDER:
			const newOrder: Order = {
				id: new Date().toString(),
				items: action.payload,
				amount: action.payload.reduce((total, item) => total + item.sum, 0),
				date: new Date()
			}

			return {
				...state,
				orders: [...state.orders, newOrder]
			};
		default:
			return state;
	}
}