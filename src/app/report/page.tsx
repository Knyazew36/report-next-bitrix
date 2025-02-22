import Image from 'next/image'
import ReportStats from './(report-stats)/ReportStats'
import ReportTable from './(report-table)/ReportTable'

export default function Home() {
	return (
		<main id="content" className="lg:ps-[260px] pt-[59px] pb-[40px] sm:pb-[64px] ">
			{/* Breadcrumb */}
			<ol className="lg:hidden pt-3 md:pt-5 sm:pb-2 md:pb-0 px-2 sm:px-5 flex items-center whitespace-nowrap">
				<li className="flex items-center text-sm text-gray-600 dark:text-neutral-500">
					Сотрудники
					<svg
						className="shrink-0 overflow-visible size-4 ms-1.5 text-gray-400 dark:text-neutral-600"
						width={16}
						height={16}
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
					</svg>
				</li>
				<li className="ps-1.5 flex items-center font-semibold text-gray-800 dark:text-neutral-200 text-sm">
					Overview
				</li>
			</ol>
			{/* End Breadcrumb */}
			<div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
				{/* Page Header */}
				<div className="flex justify-between items-center gap-x-5">
					<h2 className="inline-block text-lg font-semibold text-gray-800 dark:text-neutral-200">
						Сотрудники
					</h2>
				</div>
				{/* End Page Header */}

				{/* Stats Grid */}
				{/* <ReportStats /> */}
				{/* End Stats Grid */}

				{/* Users Table Card */}
				<ReportTable />
				{/* End Users Table Card */}
			</div>
		</main>
	)
}
