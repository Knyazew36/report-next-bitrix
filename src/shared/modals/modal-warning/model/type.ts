export interface IModalWarningProps {
	isActive: boolean
	onClose: () => void

	title: string
	description?: string
	buttonText: string
}
