import Product from "../../models/product";

export const CREATE_PRODUCT = '[PRODUCT] Create';
export const UPDATE_PRODUCT = '[PRODUCT] Update';
export const DELETE_PRODUCT = '[PRODUCT] DELETE';

interface CreateProductAction {
	type: typeof CREATE_PRODUCT;
	payload: Partial<Product>
}

interface UpdateProductAction {
	type: typeof UPDATE_PRODUCT;
	payload: Partial<Product>
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

export const createProduct = (title: string, description: string, imageUrl: string, price: number): CreateProductAction => {
	return {
		type: CREATE_PRODUCT,
		payload: {
			title,
			description,
			imageUrl,
			price
		}
	}
};

export const updateProduct = (id: string, title: string, description: string, imageUrl: string): UpdateProductAction => {
	return {
		type: UPDATE_PRODUCT,
		payload: {
			id,
			title,
			description,
			imageUrl
		}
	}
};

export type ProductActionTypes = CreateProductAction | UpdateProductAction | DeleteProductAction;