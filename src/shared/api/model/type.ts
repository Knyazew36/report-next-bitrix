// import { ISelect } from 'preline/preline'

// import { SelectOption } from '@/shared/ui/select'

// import { ErrorEnums } from './errorMap'

// export interface ResList<T> {
// 	list: {
// 		current_page: number
// 		data: T[]
// 		first_page_url: string
// 		from: number
// 		last_page: number
// 		last_page_url: string
// 		next_page_url: string | null
// 		path: string
// 		per_page: number
// 		prev_page_url: string | null
// 		to: number
// 		total: number
// 		links: [{ url: string | null; label: string; active: boolean }]
// 	}
// }

// export interface DataResList {
// 	limit?: number
// 	page?: number
// }

// export interface ResInfo<T> {
// 	info: T
// }

export interface BaseResponse<T> {
	data: T
}

// export interface ErrorResponse {
// 	error: boolean
// 	message?: ErrorEnums
// 	code: ErrorEnums
// }

// export interface CommonData {
// 	add_select_options?: boolean
// }

// export interface CommonDataRes {
// 	select_options?: SelectOption
// }
