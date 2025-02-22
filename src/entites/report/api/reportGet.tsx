import { AxiosResponse } from 'axios'

import { $api, apiDomain, BaseResponse } from '@/shared/api'
import { SelectOption } from '@/shared/ui'
import { DataReportGet } from '../model/report-type'

export const reportGet = async ({
	data
}: {
	data: DataReportGet
}): Promise<BaseResponse<{ data: SelectOption[]; dateRange: [] }> | unknown> => {
	try {
		const response: AxiosResponse = await $api.post(`${apiDomain}/report`, data)
		return response.data
	} catch (error) {
		return error
	}
}
