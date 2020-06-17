import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { productReducer } from './reducers/products';

const rootReducer = combineReducers({
	products: productReducer
});

export const store = configureStore({
	reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>