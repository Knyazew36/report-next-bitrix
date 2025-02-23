'use client'

import { Report, ReportGroup } from '@/entites/report'
import { AnimateLayout } from '@/shared/layouts'
import { Divider } from '@/shared/ui'
import { useKeyDown } from '@react-hooks-library/core'
import React, { FC, useState } from 'react'

interface IProps {
	time?: string
	data: ReportGroup[]
}
const ReportModalDetail: FC<IProps> = ({ time, data }) => {
	const [isOpen, setIsOpen] = useState(false)
	const onClose = () => {
		setIsOpen(false)
	}

	useKeyDown(['Escape'], e => {
		onClose()
		e.preventDefault()
	})

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				type="button"
				className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
			>
				{time}
			</button>

			<AnimateLayout state={isOpen} onClose={onClose} closeOnOverlayClick>
				<div className="w-full lg:min-w-96 max-h-full flex flex-col bg-white rounded-xl pointer-events-auto shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-800">
					{/* Header */}
					<div className="py-2.5 px-4 flex justify-between items-center border-b dark:border-neutral-700">
						<h3 className="font-semibold text-gray-800 dark:text-neutral-200">
							Время по задачам{' '}
							<span className="text-sm text-gray-600 dark:text-neutral-400">{time}</span>
						</h3>
						<button
							type="button"
							onClick={onClose}
							className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
						>
							<span className="sr-only">Close</span>
							<svg
								className="shrink-0 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M18 6 6 18" />
								<path d="m6 6 12 12" />
							</svg>
						</button>
					</div>
					{/* End Header */}
					{/* Body */}
					<div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
						<div className="p-4 space-y-5">
							{data.map(group => (
								<div key={group.groupId} className="flex flex-col gap-3">
									<div className="flex justify-between">
										<h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
											{group?.groupName}
										</h2>
										<span className="text-sm text-gray-600 dark:text-neutral-400">
											{group?.totalTime}
										</span>
									</div>

									<ul className="flex flex-col divide-y divide-gray-200 dark:divide-neutral-700">
										{group?.tasks?.map(task => (
											<li
												className="inline-flex items-center gap-x-4 py-3  text-sm font-medium text-gray-800 dark:text-white"
												key={task.taskId}
											>
												<a
													target="_blank"
													className="text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-none focus:underline opacity-90"
													href={task.taskLink}
												>
													{task.title}
												</a>

												<span className="ml-auto text-sm text-gray-500 dark:text-neutral-500">
													{task.time}
												</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
					{/* End Body */}
					{/* Footer */}
					{/* <div className="p-4 flex justify-end gap-x-2">
					<div className="flex-1 flex justify-end items-center gap-2">
						<button
							type="button"
							className="py-2 px-3 text-nowrap inline-flex justify-center items-center text-start bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
							data-hs-overlay="#hs-pro-deum"
							aria-expanded="true"
						>
							Очистить
						</button>
						<button
							type="submit"
							className="py-2 px-3 text-nowrap inline-flex justify-center items-center gap-x-2 text-start bg-blue-600 border border-blue-600 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-500"
						>
							Применить
						</button>
					</div>
				</div> */}
					{/* End Footer */}
				</div>
			</AnimateLayout>
		</>
	)
}

export default ReportModalDetail
