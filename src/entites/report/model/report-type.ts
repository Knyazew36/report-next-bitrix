import { Department } from '@/entites/department'
import { Task } from '@/entites/task'
import { WorkLog } from '@/entites/work-log'
import { SelectOption } from '@/shared/ui'

export interface DataReportGet {
	department?: string
}

export interface ReportGet {
	data: Report[]
	dateRange: {
		date: string
		isWeekend: boolean
		month: number
		formattedDate: string
	}[]
	dateFilters: SelectOption[]
	from: string
	to: string
	updateDate: string
}

export interface Report {
	fullName: string
	totalTime: string
	avatar?: string
	department?: Department[]
	workLog: Record<
		string,
		{
			time: string
			groups: ReportGroup[]
		}
	>
}

export interface ReportGroup {
	groupId: string
	groupName: string
	totalTime?: string
	tasks: { taskId: string; taskLink: string; time: string; title: string; comment: string | null }[]
}
