import React, { FC } from 'react'
import { IModalWarningProps } from '../model/type'
import { AnimateLayout } from '@/shared/layouts'

const ModalWarning: FC<IModalWarningProps> = ({
	isActive,
	onClose,
	title,
	description,
	buttonText
}) => {
	return (
		<AnimateLayout state={isActive} onClose={onClose} closeOnOverlayClick>
			<div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-900">
				<div className="absolute top-2 end-2">
					<button
						type="button"
						className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
						onClick={onClose}
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
				<div className="p-4 sm:p-10 text-center overflow-y-auto">
					{/* Icon */}
					<span className="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:text-yellow-100">
						<svg
							className="shrink-0 size-5"
							xmlns="http://www.w3.org/2000/svg"
							width={16}
							height={16}
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
						</svg>
					</span>
					{/* End Icon */}
					<h3
						id="hs-sign-out-alert-small-window-label"
						className="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200"
					>
						{title}
					</h3>
					{description && <p className="text-gray-500 dark:text-neutral-500">{description}</p>}
					<div className="mt-6 grid gap-y-2">
						<button
							type="button"
							className="py-2.5 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
						>
							{buttonText}
						</button>
						<button
							type="button"
							className="py-2.5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
							onClick={onClose}
						>
							Отмена
						</button>
					</div>
				</div>
			</div>
		</AnimateLayout>
	)
}

export default ModalWarning
