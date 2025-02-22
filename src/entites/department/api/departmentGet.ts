import { AxiosResponse } from 'axios'

import { $api, apiDomain, BaseResponse } from '@/shared/api'
import { SelectOption } from '@/shared/ui'

export const departmentGet = async (): Promise<BaseResponse<SelectOption[]> | unknown> => {
	try {
		const response: AxiosResponse = await $api.get(`${apiDomain}/department`)
		return response.data
	} catch (error) {
		return error
	}
}
