import Product from "../../models/product";

export const ADD_PRODUCT = '[PRODUCT] Add';
export const DELETE_PRODUCT = '[PRODUCT] DELETE';

interface AddProductAction {
	type: typeof ADD_PRODUCT;
	payload: Product
}

export interface DeleteProductAction {
	type: typeof DELETE_PRODUCT,
	payload: string
}

export const deleteProduct = (id: string): DeleteProductAction => {
	return {
		type: DELETE_PRODUCT,
		payload: id
	};
};

export type ProductActionTypes = AddProductAction | DeleteProductAction;