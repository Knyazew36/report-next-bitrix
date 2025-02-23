'use client'

import React, { FC } from 'react'
import ReportModalFilter from '../../(report-modal-filter)/ReportModalFilter'
import { useSearchParams, useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { ReportGet } from '@/entites/report'

interface IProps {
	data: ReportGet
}
const ReportTableFilter: FC<IProps> = ({ data }) => {
	const searchParams = useSearchParams()
	const router = useRouter()

	const handleClick = (data: string) => {
		const params = new URLSearchParams(searchParams.toString())

		data.split('&').forEach(param => {
			const [key, value] = param.split('=')
			if (key && value) {
				params.set(key, value)
			}
		})

		router.push(`?${params.toString()}`)
	}

	return (
		<div className="flex  lg:items-center justify-between">
			{data?.dateFilters && (
				<div className="grid sm:inline-flex rounded-lg shadow-sm">
					{data.dateFilters.map(item => (
						<button
							key={item.label}
							onClick={() => handleClick(item.value)}
							type="button"
							className="py-2 px-3 inline-flex justify-center items-center gap-x-2 -mt-px sm:mt-0 sm:-ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-start text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-800 focus:text-white dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-200 dark:focus:text-neutral-800"
						>
							{item.label}
						</button>
					))}
				</div>
			)}

			<div className="hs-dropdown [--auto-close:true] relative inline-flex">
				<ReportModalFilter data={data} />
			</div>
		</div>
	)
}

export default ReportTableFilter
