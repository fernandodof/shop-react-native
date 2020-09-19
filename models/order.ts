import { CartItem } from "./cart";

export interface Order {
	id: string;
	items: CartItem[],
	amount: number
	date: Date
};