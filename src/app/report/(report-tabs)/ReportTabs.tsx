'use client'
import { departmentGet } from '@/entites/department/api/departmentGet'
import { SelectOption } from '@/shared/ui'
import clsx from 'clsx'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'

const ReportTabs: FC = () => {
	const [data, setData] = useState<SelectOption[]>()
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		;(async () => {
			const department = await departmentGet()
			if (department) {
				department.unshift({ label: 'Все', value: '' })
				setData(department)
			}
		})()
	}, [])

	const handleFilterChange = (value: string) => {
		const params = new URLSearchParams(searchParams.toString())

		if (value) {
			params.set('department', value)
		} else {
			params.delete('department')
		}

		router.push(`?${params.toString()}`, { scroll: false })
	}

	return (
		data && (
			<nav
				className="relative  flex space-x-1 after:absolute after:bottom-0 after:inset-x-0 after:border-b-2 after:border-gray-200 dark:after:border-neutral-700"
				aria-label="Tabs"
				role="tablist"
				aria-orientation="horizontal"
			>
				{data?.map(item => (
					<button
						key={item.value}
						onClick={() => handleFilterChange(item.value)}
						type="button"
						className={clsx(
							'hs-tab-active:after:bg-gray-800 text-nowrap  hs-tab-active:text-gray-800 px-2.5 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none  after:absolute after:-bottom-2 after:inset-x-0 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active ',
							item.value === searchParams.get('department') && 'bg-gray-100 text-gray-800'
						)}
					>
						{item.label}
					</button>
				))}
			</nav>
		)
	)
}

export default ReportTabs
