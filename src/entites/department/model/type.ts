export interface Department {
	name: string | null
	id: number
	bitrixId: string
	createdAt: Date
	updatedAt: Date
	sort: number | null
	parent: string | null
}

export interface DepartmentGet {}
