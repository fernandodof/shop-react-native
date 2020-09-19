export const convertDate = (date: Date) => date.toLocaleDateString('en-En', {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: '2-digit',
	minute: '2-digit'
})