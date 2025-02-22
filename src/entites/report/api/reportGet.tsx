import { AxiosResponse } from 'axios'

import { $api, apiDomain, BaseResponse } from '@/shared/api'
import { DataReportGet, ReportGet } from '../model/report-type'

export const reportGet = async ({ data }: { data: DataReportGet }): Promise<ReportGet> => {
	try {
		const response: AxiosResponse<ReportGet> = await $api.post(`${apiDomain}/report`, data)
		return response.data
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message)
		}
		throw new Error('Неизвестная ошибка')
	}
}
