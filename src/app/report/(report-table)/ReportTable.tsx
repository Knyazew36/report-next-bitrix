'use client'

import React, { useEffect, useState } from 'react'
import { DataReportGet, ReportGet, reportGet } from '@/entites/report'
import ReportTableFilter from './filter/ReportTableFilter'
import { nanoid } from 'nanoid'
import clsx from 'clsx'
import { departmentGet } from '@/entites/department/api/departmentGet'
import { SelectOption } from '@/shared/ui'
import { useRouter, useSearchParams } from 'next/navigation'
import ReportTabs from '../(report-tabs)/ReportTabs'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'
import { useForm } from 'react-hook-form'
import { formatDate } from '@/shared/utils'
import ReportModalDetail from '../(report-modal-detail)/ReportModalDetail'
type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]
const ReportTable = () => {
	const [data, setData] = useState<ReportGet>()
	const searchParams = useSearchParams()

	const getData = async (data: DataReportGet) => {
		const res = await reportGet({ data })
		if (res) {
			setData(res)
		}
	}

	useEffect(() => {
		;(async () => {
			getData({})
		})()
	}, [])

	useEffect(() => {
		if (!searchParams) return
		const paramsObject = Object.fromEntries(searchParams.entries())
		getData(paramsObject)
	}, [searchParams])
	const [value, onChange] = useState<Value>(new Date())

	return (
		<div className="p-5 space-y-4 flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
			{/* Nav Tab */}
			{/* <Calendar onChange={onChange} value={value} /> */}

			<ReportTabs />
			{/* End Nav Tab */}
			{/* Filter Group */}
			<ReportTableFilter data={data} />
			{/* End Filter Group */}
			<div>
				{/* Tab Content */}
				<div id="hs-pro-tabs-dut-all" role="tabpanel" aria-labelledby="hs-pro-tabs-dut-item-all">
					{/* Table Section */}
					<div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
						<div className="min-w-full inline-block align-middle">
							{/* Table */}
							{data && (
								<table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
									<thead>
										<tr className="border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
											<th scope="col" className="px-3 py-2.5 text-start"></th>
											<th scope="col" className="min-w-72 ">
												<span className="text-sm text-gray-600 dark:text-neutral-400">Имя</span>
											</th>
											<th scope="col" className="px-4">
												<span className="text-sm text-gray-600 dark:text-neutral-400">
													Подразделение
												</span>
											</th>
											<th scope="col" className="px-4 bg-blue-600">
												<span className="text-sm text-white">Итого</span>
											</th>

											{data.dateRange.map(range => (
												<th
													scope="col"
													className={clsx(
														'size-px whitespace-nowrap px-4 ',
														range.isWeekend && 'bg-red-200'
													)}
													key={nanoid()}
												>
													<span
														className={clsx(
															'text-sm text-gray-600 dark:text-neutral-400 text-nowrap',
															range.isWeekend && 'text-neutral-800 dark:text-neutral-800'
														)}
													>
														{range.date}
													</span>
												</th>
											))}
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
										{data.data.map((item, index) => (
											<tr
												className="divide-x divide-gray-200 dark:divide-neutral-700"
												key={nanoid()}
											>
												<td className="size-px whitespace-nowrap px-3 py-4">
													<span className="text-sm text-gray-600 dark:text-neutral-400">
														{index + 1}
													</span>
												</td>
												<td className="size-px px-4 py-1 relative group cursor-pointer pe-20 lg:pe-24">
													<div className="w-full flex items-center gap-x-3">
														<img
															className="shrink-0 size-[38px] rounded-full"
															src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
															alt="Avatar"
														/>
														<div className="grow">
															<span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
																{item.fullName}
															</span>
														</div>
													</div>
												</td>
												<td className="size-px whitespace-nowrap px-4 py-1">
													{item?.department?.map(department => (
														<span
															className="text-sm text-gray-600 dark:text-neutral-400"
															key={nanoid()}
														>
															{department.name}
														</span>
													))}
												</td>

												<td className="size-px whitespace-nowrap px-4 py-1 bg-blue-600">
													<span className="text-sm text-white">{item.totalTime}</span>
												</td>
												{data.dateRange.map(range => {
													// Проверяем, есть ли рабочий лог на текущую дату
													const td = Object.entries(item.workLog)
														.map(([key, value]) => {
															if (range.date === key) {
																return (
																	<td
																		className={clsx(
																			'size-px whitespace-nowrap px-4 py-1',
																			range.isWeekend && 'bg-red-200'
																		)}
																		key={key}
																	>
																		{/* <span
																			className={clsx(
																				'text-sm text-gray-600 dark:text-neutral-400 font-bold',
																				range.isWeekend && 'text-neutral-800 dark:text-neutral-800'
																			)}
																		>
																			{value.time}
																		</span> */}

																		<ReportModalDetail time={value.time} data={item} />
																	</td>
																)
															}
															return null
														})
														.filter(Boolean) // Убираем `undefined` и `null`

													// Если нет записей на эту дату, рендерим пустую ячейку
													return td.length > 0 ? (
														td
													) : (
														<td
															className={clsx(
																'size-px whitespace-nowrap px-4 py-1',
																range.isWeekend && 'bg-red-200'
															)}
															key={range.date}
														></td>
													)
												})}
											</tr>
										))}
									</tbody>
								</table>
							)}
							{/* End Table */}
						</div>
					</div>
					{/* End Table Section */}
					{/* Footer */}
					{data && (
						<div className="grid grid-cols-2 items-center gap-y-2 sm:gap-y-0 sm:gap-x-5">
							<p className="text-sm text-gray-800 dark:text-neutral-200">
								<span className="font-medium">{data.data.length}</span>
								<span className="text-gray-500 dark:text-neutral-500"> результата</span>
							</p>
							{/* Pagination */}
							{/* <nav className="flex justify-end items-center gap-x-1" aria-label="Pagination">
								<button
									type="button"
									className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700"
									aria-label="Previous"
								>
									<svg
										className="shrink-0 size-3.5"
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
										<path d="m15 18-6-6 6-6" />
									</svg>
									<span className="sr-only">Previous</span>
								</button>
								<div className="flex items-center gap-x-1">
									<span
										className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-100 text-gray-800 py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:text-white"
										aria-current="page"
									>
										1
									</span>
									<span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">
										of
									</span>
									<span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">
										3
									</span>
								</div>
								<button
									type="button"
									className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700"
									aria-label="Next"
								>
									<span className="sr-only">Next</span>
									<svg
										className="shrink-0 size-3.5"
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
										<path d="m9 18 6-6-6-6" />
									</svg>
								</button>
							</nav> */}
							{/* End Pagination */}
						</div>
					)}
					{/* End Footer */}
				</div>
				{/* End Tab Content */}
				{/* Tab Content */}
				<div
					id="hs-pro-tabs-dut-validaccounts"
					className="hidden"
					role="tabpanel"
					aria-labelledby="hs-pro-tabs-dut-item-validaccounts"
				>
					{/* Empty State */}
					<div className="p-5 min-h-[500px]  flex flex-col justify-center items-center text-center">
						<svg
							className="w-48 mx-auto mb-4"
							width={178}
							height={90}
							viewBox="0 0 178 90"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x={27}
								y="50.5"
								width={124}
								height={39}
								rx="7.5"
								fill="currentColor"
								className="fill-white dark:fill-neutral-800"
							/>
							<rect
								x={27}
								y="50.5"
								width={124}
								height={39}
								rx="7.5"
								stroke="currentColor"
								className="stroke-gray-50 dark:stroke-neutral-700/10"
							/>
							<rect
								x="34.5"
								y={58}
								width={24}
								height={24}
								rx={4}
								fill="currentColor"
								className="fill-gray-50 dark:fill-neutral-700/30"
							/>
							<rect
								x="66.5"
								y={61}
								width={60}
								height={6}
								rx={3}
								fill="currentColor"
								className="fill-gray-50 dark:fill-neutral-700/30"
							/>
							<rect
								x="66.5"
								y={73}
								width={77}
								height={6}
								rx={3}
								fill="currentColor"
								className="fill-gray-50 dark:fill-neutral-700/30"
							/>
							<rect
								x="19.5"
								y="28.5"
								width={139}
								height={39}
								rx="7.5"
								fill="currentColor"
								className="fill-white dark:fill-neutral-800"
							/>
							<rect
								x="19.5"
								y="28.5"
								width={139}
								height={39}
								rx="7.5"
								stroke="currentColor"
								className="stroke-gray-100 dark:stroke-neutral-700/30"
							/>
							<rect
								x={27}
								y={36}
								width={24}
								height={24}
								rx={4}
								fill="currentColor"
								className="fill-gray-100 dark:fill-neutral-700/70"
							/>
							<rect
								x={59}
								y={39}
								width={60}
								height={6}
								rx={3}
								fill="currentColor"
								className="fill-gray-100 dark:fill-neutral-700/70"
							/>
							<rect
								x={59}
								y={51}
								width={92}
								height={6}
								rx={3}
								fill="currentColor"
								className="fill-gray-100 dark:fill-neutral-700/70"
							/>
							<g filter="url(#filter3)">
								<rect
									x={12}
									y={6}
									width={154}
									height={40}
									rx={8}
									fill="currentColor"
									className="fill-white dark:fill-neutral-800"
									shapeRendering="crispEdges"
								/>
								<rect
									x="12.5"
									y="6.5"
									width={153}
									height={39}
									rx="7.5"
									stroke="currentColor"
									className="stroke-gray-100 dark:stroke-neutral-700/60"
									shapeRendering="crispEdges"
								/>
								<rect
									x={20}
									y={14}
									width={24}
									height={24}
									rx={4}
									fill="currentColor"
									className="fill-gray-200 dark:fill-neutral-700 "
								/>
								<rect
									x={52}
									y={17}
									width={60}
									height={6}
									rx={3}
									fill="currentColor"
									className="fill-gray-200 dark:fill-neutral-700"
								/>
								<rect
									x={52}
									y={29}
									width={106}
									height={6}
									rx={3}
									fill="currentColor"
									className="fill-gray-200 dark:fill-neutral-700"
								/>
							</g>
							<defs>
								<filter
									id="filter3"
									x={0}
									y={0}
									width={178}
									height={64}
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood floodOpacity={0} result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy={6} />
									<feGaussianBlur stdDeviation={6} />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_1187_14810"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_1187_14810"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
						<div className="max-w-sm mx-auto">
							<p className="mt-2 font-medium text-gray-800 dark:text-neutral-200">
								Your data will appear here soon.
							</p>
							<p className="mb-5 text-sm text-gray-500 dark:text-neutral-500">
								In the meantime, you can create new custom insights to monitor your most important
								metrics.
							</p>
						</div>
						<button
							type="button"
							className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
							data-hs-overlay="#hs-pro-empty"
						>
							<svg
								className="hidden sm:block shrink-0 size-4"
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
								<path d="M5 12h14" />
								<path d="M12 5v14" />
							</svg>
							Add user
						</button>
					</div>
					{/* End Empty State */}
				</div>
				{/* End Tab Content */}
				{/* Tab Content */}
				<div
					id="hs-pro-tabs-dut-fakeaccounts"
					className="hidden"
					role="tabpanel"
					aria-labelledby="hs-pro-tabs-dut-item-fakeaccounts"
				>
					{/* Empty State */}
					<div className="p-5 min-h-[500px]  flex flex-col justify-center items-center text-center">
						<svg
							className="w-48 mx-auto mb-4"
							width={178}
							height={90}
							viewBox="0 0 178 90"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x={27}
								y="50.5"
								width={124}
								height={39}
								rx="7.5"
								fill="currentColor"
								className="fill-white dark:fill-neutral-800"
							/>
							<rect
								x={27}
								y="50.5"
								width={124}
								height={39}
								rx="7.5"
								stroke="currentColor"
								className="stroke-gray-50 dark:stroke-neutral-700/10"
							/>
							<rect
								x="34.5"
								y={58}
								width={24}
								height={24}
								rx={4}
								fill="currentColor"
								className="fill-gray-50 dark:fill-neutral-700/30"
							/>
							<rect
								x="66.5"
								y={61}
								width={60}
								height={6}
								rx={3}
								fill="currentColor"
								className="fill-gray-50 dark:fill-neutral-700/30"
							/>
							<rect
								x="66.5"
								y={73}
								width={77}
								height={6}
								rx={3}
								fill="currentColor"
								className="fill-gray-50 dark:fill-neutral-700/30"
							/>
							<rect
								x="19.5"
								y="28.5"
								width={139}
								height={39}
								rx="7.5"
								fill="currentColor"
								className="fill-white dark:fill-neutral-800"
							/>
							<rect
								x="19.5"
								y="28.5"
								width={139}
								height={39}
								rx="7.5"
								stroke="currentColor"
								className="stroke-gray-100 dark:stroke-neutral-700/30"
							/>
							<rect
								x={27}
								y={36}
								width={24}
								height={24}
								rx={4}
								fill="currentColor"
								className="fill-gray-100 dark:fill-neutral-700/70"
							/>
							<rect
								x={59}
								y={39}
								width={60}
								height={6}
								rx={3}
								fill="currentColor"
								className="fill-gray-100 dark:fill-neutral-700/70"
							/>
							<rect
								x={59}
								y={51}
								width={92}
								height={6}
								rx={3}
								fill="currentColor"
								className="fill-gray-100 dark:fill-neutral-700/70"
							/>
							<g filter="url(#filter4)">
								<rect
									x={12}
									y={6}
									width={154}
									height={40}
									rx={8}
									fill="currentColor"
									className="fill-white dark:fill-neutral-800"
									shapeRendering="crispEdges"
								/>
								<rect
									x="12.5"
									y="6.5"
									width={153}
									height={39}
									rx="7.5"
									stroke="currentColor"
									className="stroke-gray-100 dark:stroke-neutral-700/60"
									shapeRendering="crispEdges"
								/>
								<rect
									x={20}
									y={14}
									width={24}
									height={24}
									rx={4}
									fill="currentColor"
									className="fill-gray-200 dark:fill-neutral-700 "
								/>
								<rect
									x={52}
									y={17}
									width={60}
									height={6}
									rx={3}
									fill="currentColor"
									className="fill-gray-200 dark:fill-neutral-700"
								/>
								<rect
									x={52}
									y={29}
									width={106}
									height={6}
									rx={3}
									fill="currentColor"
									className="fill-gray-200 dark:fill-neutral-700"
								/>
							</g>
							<defs>
								<filter
									id="filter4"
									x={0}
									y={0}
									width={178}
									height={64}
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood floodOpacity={0} result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy={6} />
									<feGaussianBlur stdDeviation={6} />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_1187_14810"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_1187_14810"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
						<div className="max-w-sm mx-auto">
							<p className="mt-2 font-medium text-gray-800 dark:text-neutral-200">
								Your data will appear here soon.
							</p>
							<p className="mb-5 text-sm text-gray-500 dark:text-neutral-500">
								In the meantime, you can create new custom insights to monitor your most important
								metrics.
							</p>
						</div>
						<button
							type="button"
							className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
							data-hs-overlay="#hs-pro-empty"
						>
							<svg
								className="hidden sm:block shrink-0 size-4"
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
								<path d="M5 12h14" />
								<path d="M12 5v14" />
							</svg>
							Add user
						</button>
					</div>
					{/* End Empty State */}
				</div>
				{/* End Tab Content */}
			</div>
		</div>
	)
}

export default ReportTable
