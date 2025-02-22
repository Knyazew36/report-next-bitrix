export interface User {
	id: number
	bitrixId: string
	createdAt: Date
	updatedAt: Date
	name: string
	lastName: string | null
	secondName: string | null
	workPosition: string | null
	departmentIds: string[]
	avatar: string | null
}
