'use client'
import { AnimateLayout } from '@/shared/layouts'
import { CheckboxWithIcons, Divider } from '@/shared/ui'
import { useKeyDown } from '@react-hooks-library/core'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'
import { Controller, FormSubmitHandler, SubmitHandler, useForm } from 'react-hook-form'

interface IProps {
	data: any
}

interface Fields {
	period: string
	from: string
	to: string
}
const ReportModalFilter: FC<IProps> = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false)
	const { register, setValue, watch, control, handleSubmit } = useForm<Fields>()
	const searchParams = useSearchParams()
	const router = useRouter()

	useEffect(() => {
		if (!data) return

		if (data.from) {
			setValue('from', new Date(data.from).toISOString().split('T')[0]) // Используем правильный ключ
		}
		if (data.to) {
			setValue('to', new Date(data.to).toISOString().split('T')[0]) // Используем правильный ключ
		}
	}, [data])

	const onClose = () => {
		setIsOpen(false)
	}
	useKeyDown(['Escape'], e => {
		onClose()
		e.preventDefault()
	})

	const onSubmit: SubmitHandler<Fields> = data => {
		const params = new URLSearchParams(searchParams.toString())

		if (data.from) {
			params.set('dateStart', data.from)
		} else {
			params.delete('dateStart')
		}
		if (data.to) {
			params.set('dateEnd', data.to)
		} else {
			params.delete('dateEnd')
		}

		router.push(`?${params.toString()}`, { scroll: false })
		onClose()
	}

	return (
		data && (
			<>
				<button
					onClick={() => setIsOpen(true)}
					type="button"
					className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
						<line x1={21} x2={14} y1={4} y2={4} />
						<line x1={10} x2={3} y1={4} y2={4} />
						<line x1={21} x2={12} y1={12} y2={12} />
						<line x1={8} x2={3} y1={12} y2={12} />
						<line x1={21} x2={16} y1={20} y2={20} />
						<line x1={12} x2={3} y1={20} y2={20} />
						<line x1={14} x2={14} y1={2} y2={6} />
						<line x1={8} x2={8} y1={10} y2={14} />
						<line x1={16} x2={16} y1={18} y2={22} />
					</svg>
					Фильтр
					<span className="font-medium text-[10px] py-0.5 px-[5px] bg-gray-800 text-white leading-3 rounded-full dark:bg-neutral-500">
						5
					</span>
				</button>

				<AnimateLayout state={isOpen} onClose={onClose} closeOnOverlayClick>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="w-full max-h-full flex flex-col bg-white rounded-xl pointer-events-auto shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-800"
					>
						{/* Header */}
						<div className="py-2.5 px-4 flex justify-between items-center border-b dark:border-neutral-700">
							<h3 className="font-medium text-gray-800 dark:text-neutral-200">Фильтр</h3>
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
								<div className="flex gap-2">
									<input
										{...register('from')}
										type="date"
										className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
										placeholder="This is placeholder"
									/>
									<input
										{...register('to')}
										type="date"
										className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
										placeholder="This is placeholder"
									/>
								</div>

								<div className="flex gap-2">
									<Controller
										name="period"
										control={control}
										render={({ field }) => (
											<CheckboxWithIcons
												label="За текущий месяц"
												id="month"
												checked={field.value === 'month'} // ✅ Проверяем активное значение
												onChange={() => field.onChange('month')} // ✅ Устанавливаем значение
											/>
										)}
									/>
									<Controller
										name="period" // ✅ То же имя, чтобы кнопки были в одной группе
										control={control}
										render={({ field }) => (
											<CheckboxWithIcons
												label="За текущую неделю"
												id="week" // ✅ Исправляем id, чтобы он был уникальным
												checked={field.value === 'week'} // ✅ Проверяем активное значение
												onChange={() => field.onChange('week')} // ✅ Устанавливаем значение
											/>
										)}
									/>
									<Controller
										name="period"
										control={control}
										render={({ field }) => (
											<CheckboxWithIcons
												label="За предыдущий месяц"
												id="last-month"
												checked={field.value === 'last-month'} // ✅ Проверяем активное значение
												onChange={() => field.onChange('last-month')} // ✅ Устанавливаем значение
											/>
										)}
									/>
									<Controller
										name="period" // ✅ То же имя, чтобы кнопки были в одной группе
										control={control}
										render={({ field }) => (
											<CheckboxWithIcons
												label="За предыдущую неделю"
												id="last-week" // ✅ Исправляем id, чтобы он был уникальным
												checked={field.value === 'last-week'} // ✅ Проверяем активное значение
												onChange={() => field.onChange('last-week')} // ✅ Устанавливаем значение
											/>
										)}
									/>
								</div>
							</div>
						</div>
						{/* End Body */}
						{/* Footer */}
						<div className="p-4 flex justify-end gap-x-2">
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
						</div>
						{/* End Footer */}
					</form>
				</AnimateLayout>
			</>
		)
	)
}

export default ReportModalFilter
