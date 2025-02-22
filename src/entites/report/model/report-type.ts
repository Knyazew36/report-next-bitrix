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
	}[]
}

export interface Report {
	fullName: string
	totalTime: string
	department?: Department[]
	workLog: Record<
		string,
		{
			time: string
			groups: [
				{
					groupId: string
					groupName: string
					tasks: { taskId: string; taskLink: string; time: string; title: string }[]
				}
			]
		}
	>
}
