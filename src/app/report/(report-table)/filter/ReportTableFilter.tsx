import React, { FC } from 'react'
import ReportModalFilter from '../../(report-modal-filter)/ReportModalFilter'

interface IProps {
	data: any
}
const ReportTableFilter: FC<IProps> = ({ data }) => {
	return (
		<div className="grid md:grid-cols-2 gap-y-2 md:gap-y-0 md:gap-x-5">
			<div>
				{/* Search Input */}
				<div className="relative">
					<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
						<svg
							className="shrink-0 size-4 text-gray-500 dark:text-neutral-400"
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
							<circle cx={11} cy={11} r={8} />
							<path d="m21 21-4.3-4.3" />
						</svg>
					</div>
					<input
						type="text"
						className="py-[7px] ps-10 pe-8 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:bg-neutral-800 dark:focus:ring-neutral-600"
						placeholder="Search projects"
					/>
					<div className="hidden absolute inset-y-0 end-0 flex items-center z-20 pe-1">
						<button
							type="button"
							className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
							aria-label="Close"
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
								<circle cx={12} cy={12} r={10} />
								<path d="m15 9-6 6" />
								<path d="m9 9 6 6" />
							</svg>
						</button>
					</div>
				</div>
				{/* End Search Input */}
			</div>
			{/* End Col */}
			<div className="flex justify-end items-center gap-x-2">
				{/* Filter Dropdown */}
				<div className="hs-dropdown [--auto-close:true] relative inline-flex">
					<ReportModalFilter data={data} />
				</div>
				{/* End Filter Dropdown */}
			</div>
			{/* End Col */}
		</div>
	)
}

export default ReportTableFilter
