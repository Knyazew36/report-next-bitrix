export interface WorkLog {
	id: number
	createdAt: Date
	updatedAt: Date
	bitrixId: string
	createdDate: Date
	userBitrixId: string
	taskBitrixId: string
	minutes: string | null
}
