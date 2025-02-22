import { $api, apiDomain } from '@/shared/api'

export const userLogout = async (token?: string) => {
	const res = await $api.post(
		`${apiDomain}/user/logout`,
		{},
		{
			headers: { Authorization: `Bearer ${token}` }
		}
	)

	return res.data
}
