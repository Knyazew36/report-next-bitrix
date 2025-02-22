export interface Task {
	id: number
	createdAt: Date
	bitrixId: string
	createdDate: string | null
	title: string | null
	description: string | null
	groupBitrixId: string | null
	userBitrixId: string | null
	sonetGroupId: string | null
}
