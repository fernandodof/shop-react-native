import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { productReducer } from './reducers/products';
import { cartReducer } from './reducers/cart';
import { ordersReducer } from './reducers/orders';

const rootReducer = combineReducers({
	products: productReducer,
	cart: cartReducer,
	orders: ordersReducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export type RootState = ReturnType<typeof rootReducer>;