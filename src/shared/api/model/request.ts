import axios, { AxiosError } from 'axios'

// import { ErrorEventEmitter, eventEmitter } from '@/features/error-handler'

// import { getFromLocalStorage } from '@/shared/utils'

import { ErrorEnums, errorMap } from './errorMap'
import log from './log'
// import { ErrorResponse } from './type'

const isProduction = false

// Создаем экземпляр Axios
const $api = axios.create({
	withCredentials: true
})

// Интерцептор для запросов
$api.interceptors.request.use(
	async config => {
		// const token = getFromLocalStorage('token')

		// if (token) {
		// 	config.headers.Authorization = `Bearer ${token}`
		// }
		if (!isProduction) {
			log({
				name: config.url ?? 'undefined url',
				data: config,
				type: 'request',
				payload: config.data
			})
		}
		return config
	},
	error => {
		throw error
	}
)

// Интерцептор для ответов
$api.interceptors.response.use(
	response => {
		if (!isProduction) {
			log({
				name: response.config.url ?? 'undefined url',
				data: response,
				type: 'response'
			})
		}
		return response
	},
	error => {
		// handleResponseError(error as AxiosError<ErrorResponse>)
		logErrorDetails(error as AxiosError)
	}
)

// Логирование ошибок
function logErrorDetails(error: AxiosError) {
	log({
		name: axios.isAxiosError(error)
			? error.config?.url ?? 'undefined url'
			: 'Not instance of AxiosError',
		data: error,
		type: 'catch'
	})
}

// Обработка ошибок
// function handleResponseError(error: AxiosError<ErrorResponse>) {
// 	console.info('error', error)
// 	if (error.response?.status === 401) {
// 		const errorData: ErrorEventEmitter = { action: 'logout' }
// 		eventEmitter.emit('request-error', errorData)
// 		eventEmitter.emit('auth-show')
// 	}

// 	if (error.response.data?.message === ErrorEnums.ERROR_IMAGE_NOT_FOUND) {
// 		const errorData: ErrorEventEmitter = {
// 			action: 'modal',
// 			message: errorMap.ERROR_IMAGE_NOT_FOUND,
// 			isNavigateBackOnClick: true
// 		}
// 		eventEmitter.emit('request-error', errorData)
// 	}

// 	if (
// 		error.response.data?.message === ErrorEnums.ERROR_DATA_IMAGE_FATHER_MIME ||
// 		error.response.data?.message === ErrorEnums.ERROR_DATA_IMAGE_MOTHER_MIME
// 	) {
// 		const errorData: ErrorEventEmitter = {
// 			action: 'modal',
// 			message:
// 				error.response.data?.message === ErrorEnums.ERROR_DATA_IMAGE_FATHER_MIME
// 					? errorMap.ERROR_DATA_IMAGE_FATHER_MIME
// 					: errorMap.ERROR_DATA_IMAGE_MOTHER_MIME
// 		}
// 		eventEmitter.emit('request-error', errorData)
// 	}
// 	if (error.response.data?.message === ErrorEnums.ERROR_NOT_ENOUGH_TOKENS) {
// 		const errorData: ErrorEventEmitter = {
// 			action: 'pay-modal'
// 		}
// 		eventEmitter.emit('request-error', errorData)
// 	}
// }

export default $api
