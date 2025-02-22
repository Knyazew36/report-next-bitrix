import React from 'react'

const ReportTableFilter = () => {
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
					{/* Filter Button */}
					<button
						id="hs-pro-dptied"
						type="button"
						className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
						aria-haspopup="menu"
						aria-expanded="false"
						aria-label="Dropdown"
					>
						<svg
							className="shrink-0 mt-0.5 size-3.5"
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
							<path d="m3 16 4 4 4-4" />
							<path d="M7 20V4" />
							<path d="m21 8-4-4-4 4" />
							<path d="M17 4v16" />
						</svg>
						Import / Export
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
							<path d="m6 9 6 6 6-6" />
						</svg>
					</button>
					{/* End Filter Button */}
					{/* Dropdown */}
					<div
						className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="hs-pro-dptied"
					>
						<div className="p-1">
							<button
								type="button"
								className="w-full flex gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
								data-hs-overlay="#hs-pro-dicm"
								aria-expanded="false"
							>
								<svg
									className="shrink-0 mt-0.5 size-3.5"
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
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
									<polyline points="7 10 12 15 17 10" />
									<line x1={12} x2={12} y1={15} y2={3} />
								</svg>
								Import contacts
							</button>
							<button
								type="button"
								className="w-full flex gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
								data-hs-overlay="#hs-pro-decm"
								aria-expanded="false"
							>
								<svg
									className="shrink-0 mt-0.5 size-3.5"
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
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
									<polyline points="17 8 12 3 7 8" />
									<line x1={12} x2={12} y1={3} y2={15} />
								</svg>
								Export contacts
							</button>
						</div>
					</div>
					{/* End Dropdown */}
				</div>
				{/* End Filter Dropdown */}
				{/* Download Dropdown */}
				<div className="hs-dropdown [--auto-close:inside] relative inline-flex">
					<button
						id="hs-pro-dptfd"
						type="button"
						className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
						aria-haspopup="menu"
						aria-expanded="false"
						aria-label="Dropdown"
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
						Filter
						<span className="font-medium text-[10px] py-0.5 px-[5px] bg-gray-800 text-white leading-3 rounded-full dark:bg-neutral-500">
							5
						</span>
					</button>
					{/* Download Dropdown */}
					<div
						className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="hs-pro-dptfd"
					>
						{/* Search Input */}
						<div className="pt-1 px-1">
							<div className="pb-1 border-b border-gray-200 dark:border-neutral-800">
								<div className="relative">
									<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-2.5">
										<svg
											className="shrink-0 size-3.5 text-gray-400 dark:text-white/60"
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
										className="py-1.5 px-8 block w-full bg-gray-100 border-transparent rounded-md text-sm placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:bg-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:bg-neutral-900"
										placeholder="Search"
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
							</div>
						</div>
						{/* End Search Input */}
						<div className="p-1 space-y-0.5">
							<a
								className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
								href="#"
							>
								<svg
									className="shrink-0 mt-0.5 size-3.5"
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
									<rect width={18} height={18} x={3} y={3} rx={2} />
									<circle cx={12} cy={10} r={3} />
									<path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
								</svg>
								Name
							</a>
							<a
								className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
								href="#"
							>
								<svg
									className="shrink-0 mt-0.5 size-3.5"
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
									<rect width={20} height={16} x={2} y={4} rx={2} />
									<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
								</svg>
								Email addresses
							</a>
							<a
								className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
								href="#"
							>
								<svg
									className="shrink-0 mt-0.5 size-3.5"
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
									<path d="M11 12H3" />
									<path d="M16 6H3" />
									<path d="M16 18H3" />
									<path d="M21 12h-6" />
								</svg>
								Description
							</a>
							<a
								className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
								href="#"
							>
								<svg
									className="shrink-0 mt-0.5 size-3.5"
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
									<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
									<path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
									<path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
									<path d="M10 6h4" />
									<path d="M10 10h4" />
									<path d="M10 14h4" />
									<path d="M10 18h4" />
								</svg>
								Company
							</a>
							<a
								className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
								href="#"
							>
								<svg
									className="shrink-0 mt-0.5 size-3.5"
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
									<path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
									<rect width={18} height={18} x={3} y={4} rx={2} />
									<circle cx={12} cy={10} r={2} />
									<line x1={8} x2={8} y1={2} y2={4} />
									<line x1={16} x2={16} y1={2} y2={4} />
								</svg>
								User ID
							</a>
							<a
								className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
								href="#"
							>
								<svg
									className="shrink-0 mt-0.5 size-3.5"
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
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
								Phone numbers
							</a>
							<a
								className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
								href="#"
							>
								<svg
									className="shrink-0 mt-0.5 size-3.5"
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
									<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
									<circle cx={12} cy={10} r={3} />
								</svg>
								Location
							</a>
							<a
								className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
								href="#"
							>
								<svg
									className="shrink-0 mt-0.5 size-3.5"
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
									<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
									<path d="m9 12 2 2 4-4" />
								</svg>
								Signed up as
							</a>
						</div>
					</div>
					{/* End Download Dropdown */}
				</div>
				{/* End Download Dropdown */}
			</div>
			{/* End Col */}
		</div>
	)
}

export default ReportTableFilter
