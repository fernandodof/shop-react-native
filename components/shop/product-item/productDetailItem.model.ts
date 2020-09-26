export interface ProductItemProps {
	title: string,
	price: number,
	imageUrl: string,
	onSelect?: Function,
	children?: any
}