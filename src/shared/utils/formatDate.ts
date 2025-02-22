import dayjs from 'dayjs'

export function formatDate(date: Date | string, format = 'DD.MM.YYYY'): string {
	return dayjs(date).format(format)
}
