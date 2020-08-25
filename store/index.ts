import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { productReducer } from './reducers/products';
import { cartReducer } from "./reducers/cart";

const rootReducer = combineReducers({
	products: productReducer,
	cart: cartReducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export type RootState = ReturnType<typeof rootReducer>;