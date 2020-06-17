import { Product } from "../../models/product";

export const ADD_PRODUCT = '[PRODUCT] Add';

interface AddProductAction {
	type: typeof ADD_PRODUCT;
	payload: Product
}

export type ProductActionTypes = AddProductAction;