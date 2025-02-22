import React from 'react'

const ReportStats = () => {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 xl:gap-5">
			{/* Card */}
			<div className="relative overflow-hidden p-4 sm:p-5 bg-white border border-gray-200 rounded-xl shadow-sm before:absolute before:top-0 before:end-0 before:size-full before:bg-gradient-to-br before:from-purple-100 before:via-transparent before:blur-xl dark:bg-neutral-800 dark:border-neutral-700 dark:before:from-purple-800/30 dark:before:via-transparent">
				<div className="relative z-10">
					{/* Header */}
					<div className="flex justify-between gap-x-3">
						{/* Icon */}
						<span className="mb-3 inline-flex justify-center items-center size-8 md:size-10 rounded-lg bg-white text-gray-700 shadow dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
							<svg
								className="shrink-0 size-4 md:size-5 text-purple-500"
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
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
								<circle cx={9} cy={7} r={4} />
								<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
								<path d="M16 3.13a4 4 0 0 1 0 7.75" />
							</svg>
						</span>
						{/* End Icon */}
						<div>
							{/* More Dropdown */}
							<div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
								<button
									id="hs-pro-dusd1"
									type="button"
									className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									aria-haspopup="menu"
									aria-expanded="false"
									aria-label="Dropdown"
								>
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
										<circle cx={12} cy={12} r={1} />
										<circle cx={12} cy={5} r={1} />
										<circle cx={12} cy={19} r={1} />
									</svg>
								</button>
								{/* Dropdown */}
								<div
									className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-36 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="hs-pro-dusd1"
								>
									<div className="p-1">
										<button
											type="button"
											className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
										>
											<svg
												className="shrink-0 size-3.5 mt-0.5"
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
												<circle cx={18} cy={5} r={3} />
												<circle cx={6} cy={12} r={3} />
												<circle cx={18} cy={19} r={3} />
												<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
												<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
											</svg>
											Share stats
										</button>
										<button
											type="button"
											className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
										>
											<svg
												className="shrink-0 size-3.5 mt-0.5"
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
												<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
												<path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
												<path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
												<line x1={2} x2={22} y1={2} y2={22} />
											</svg>
											Hide stats
										</button>
									</div>
								</div>
								{/* End Dropdown */}
							</div>
							{/* End More Dropdown */}
						</div>
					</div>
					{/* End Header */}
					<h2 className="text-sm md:text-base text-gray-800 dark:text-neutral-200">Total Users</h2>
					<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3">
						<h3 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
							356
						</h3>
						<div className="flex items-center -space-x-2">
							{/* Avatar */}
							<div className="hs-tooltip hidden sm:inline-block hover:z-10">
								<img
									className="hs-tooltip-toggle shrink-0 size-7 border-2 border-white rounded-full dark:border-neutral-800"
									src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
									alt="Avatar"
								/>
								<span
									className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
									role="tooltip"
									style={{
										position: 'fixed',
										inset: '0px auto auto 0px',
										margin: 0,
										transform: 'translate3d(0px, 5px, 0px)'
									}}
									data-popper-placement="bottom"
									data-popper-reference-hidden
									data-popper-escaped
								>
									Lewis Clarke
								</span>
							</div>
							{/* End Avatar */}
							{/* Avatar */}
							<div className="hs-tooltip hidden sm:inline-block hover:z-10">
								<span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
									L
								</span>
								<span
									className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
									role="tooltip"
									style={{
										position: 'fixed',
										inset: '0px auto auto 0px',
										margin: 0,
										transform: 'translate3d(0px, 5px, 0px)'
									}}
									data-popper-placement="bottom"
									data-popper-reference-hidden
									data-popper-escaped
								>
									Lori Hunter
								</span>
							</div>
							{/* End Avatar */}
							{/* Avatar */}
							<div className="hs-tooltip hidden sm:inline-block hover:z-10">
								<img
									className="hs-tooltip-toggle shrink-0 size-7 border-2 border-white rounded-full dark:border-neutral-800"
									src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
									alt="Avatar"
								/>
								<span
									className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
									role="tooltip"
									style={{
										position: 'fixed',
										inset: '0px auto auto 0px',
										margin: 0,
										transform: 'translate3d(0px, 5px, 0px)'
									}}
									data-popper-placement="bottom"
									data-popper-reference-hidden
									data-popper-escaped
								>
									Ella Lauda
								</span>
							</div>
							{/* End Avatar */}
						</div>
					</div>
				</div>
			</div>
			{/* End Card */}
			{/* Card */}
			<div className="relative overflow-hidden p-4 sm:p-5 bg-white border border-gray-200 rounded-xl shadow-sm before:absolute before:top-0 before:end-0 before:size-full before:bg-gradient-to-br before:from-teal-100 before:via-transparent before:blur-xl dark:bg-neutral-800 dark:border-neutral-700 dark:before:from-teal-800/30 dark:before:via-transparent">
				<div className="relative z-10">
					{/* Header */}
					<div className="flex justify-between gap-x-3">
						{/* Icon */}
						<span className="mb-3 inline-flex justify-center items-center size-8 md:size-10 rounded-lg bg-white text-gray-700 shadow dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
							<svg
								className="shrink-0 size-4 md:size-5 text-teal-500"
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
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
								<circle cx={9} cy={7} r={4} />
								<polyline points="16 11 18 13 22 9" />
							</svg>
						</span>
						{/* End Icon */}
						<div>
							{/* More Dropdown */}
							<div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
								<button
									id="hs-pro-dusd2"
									type="button"
									className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									aria-haspopup="menu"
									aria-expanded="false"
									aria-label="Dropdown"
								>
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
										<circle cx={12} cy={12} r={1} />
										<circle cx={12} cy={5} r={1} />
										<circle cx={12} cy={19} r={1} />
									</svg>
								</button>
								{/* Dropdown */}
								<div
									className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-36 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="hs-pro-dusd2"
								>
									<div className="p-1">
										<button
											type="button"
											className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
										>
											<svg
												className="shrink-0 size-3.5 mt-0.5"
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
												<circle cx={18} cy={5} r={3} />
												<circle cx={6} cy={12} r={3} />
												<circle cx={18} cy={19} r={3} />
												<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
												<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
											</svg>
											Share stats
										</button>
										<button
											type="button"
											className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
										>
											<svg
												className="shrink-0 size-3.5 mt-0.5"
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
												<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
												<path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
												<path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
												<line x1={2} x2={22} y1={2} y2={22} />
											</svg>
											Hide stats
										</button>
									</div>
								</div>
								{/* End Dropdown */}
							</div>
							{/* End More Dropdown */}
						</div>
					</div>
					{/* End Header */}
					<h2 className="text-sm md:text-base text-gray-800 dark:text-neutral-200">Active users</h2>
					<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3">
						<h3 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
							239
						</h3>
						<div className="flex items-center -space-x-2">
							{/* Avatar */}
							<div className="hs-tooltip hidden sm:inline-block hover:z-10">
								<img
									className="hs-tooltip-toggle shrink-0 size-7 border-2 border-white rounded-full dark:border-neutral-800"
									src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
									alt="Avatar"
								/>
								<span
									className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
									role="tooltip"
									style={{
										position: 'fixed',
										inset: '0px auto auto 0px',
										margin: 0,
										transform: 'translate3d(0px, 5px, 0px)'
									}}
									data-popper-placement="bottom"
									data-popper-reference-hidden
									data-popper-escaped
								>
									Lewis Clarke
								</span>
							</div>
							{/* End Avatar */}
							{/* Avatar */}
							<div className="hs-tooltip hidden sm:inline-block hover:z-10">
								<img
									className="hs-tooltip-toggle shrink-0 size-7 border-2 border-white rounded-full dark:border-neutral-800"
									src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
									alt="Avatar"
								/>
								<span
									className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
									role="tooltip"
									style={{
										position: 'fixed',
										inset: '0px auto auto 0px',
										margin: 0,
										transform: 'translate3d(0px, 5px, 0px)'
									}}
									data-popper-placement="bottom"
									data-popper-reference-hidden
									data-popper-escaped
								>
									Ella Lauda
								</span>
							</div>
							{/* End Avatar */}
							{/* Avatar */}
							<div className="hs-tooltip hidden sm:inline-block hover:z-10">
								<span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
									O
								</span>
								<span
									className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
									role="tooltip"
									style={{
										position: 'fixed',
										inset: '0px auto auto 0px',
										margin: 0,
										transform: 'translate3d(0px, 5px, 0px)'
									}}
									data-popper-placement="bottom"
									data-popper-reference-hidden
									data-popper-escaped
								>
									Ols Schols
								</span>
							</div>
							{/* End Avatar */}
						</div>
					</div>
				</div>
			</div>
			{/* End Card */}
			{/* Card */}
			<div className="relative overflow-hidden p-4 sm:p-5 bg-white border border-gray-200 rounded-xl shadow-sm before:absolute before:top-0 before:end-0 before:size-full before:bg-gradient-to-br before:from-blue-100 before:via-transparent before:blur-xl dark:bg-neutral-800 dark:border-neutral-700 dark:before:from-blue-800/30 dark:before:via-transparent">
				<div className="relative z-10">
					{/* Header */}
					<div className="flex justify-between gap-x-3">
						{/* Icon */}
						<span className="mb-3 inline-flex justify-center items-center size-8 md:size-10 rounded-lg bg-white text-gray-700 shadow dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
							<svg
								className="shrink-0 size-4 md:size-5 text-blue-500"
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
								<path d="M9 14 4 9l5-5" />
								<path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
							</svg>
						</span>
						{/* End Icon */}
						<div>
							{/* More Dropdown */}
							<div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
								<button
									id="hs-pro-dusd3"
									type="button"
									className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									aria-haspopup="menu"
									aria-expanded="false"
									aria-label="Dropdown"
								>
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
										<circle cx={12} cy={12} r={1} />
										<circle cx={12} cy={5} r={1} />
										<circle cx={12} cy={19} r={1} />
									</svg>
								</button>
								{/* Dropdown */}
								<div
									className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-36 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="hs-pro-dusd3"
								>
									<div className="p-1">
										<button
											type="button"
											className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
										>
											<svg
												className="shrink-0 size-3.5 mt-0.5"
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
												<circle cx={18} cy={5} r={3} />
												<circle cx={6} cy={12} r={3} />
												<circle cx={18} cy={19} r={3} />
												<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
												<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
											</svg>
											Share stats
										</button>
										<button
											type="button"
											className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
										>
											<svg
												className="shrink-0 size-3.5 mt-0.5"
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
												<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
												<path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
												<path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
												<line x1={2} x2={22} y1={2} y2={22} />
											</svg>
											Hide stats
										</button>
									</div>
								</div>
								{/* End Dropdown */}
							</div>
							{/* End More Dropdown */}
						</div>
					</div>
					{/* End Header */}
					<h2 className="text-sm md:text-base text-gray-800 dark:text-neutral-200">
						Return user rate
					</h2>
					<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3">
						<h3 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
							79
						</h3>
						<div className="flex items-center -space-x-2">
							{/* Avatar */}
							<div className="hs-tooltip hidden sm:inline-block hover:z-10">
								<img
									className="hs-tooltip-toggle shrink-0 size-7 border-2 border-white rounded-full dark:border-neutral-800"
									src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
									alt="Avatar"
								/>
								<span
									className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
									role="tooltip"
									style={{
										position: 'fixed',
										inset: '0px auto auto 0px',
										margin: 0,
										transform: 'translate3d(0px, 5px, 0px)'
									}}
									data-popper-placement="bottom"
									data-popper-reference-hidden
									data-popper-escaped
								>
									Lewis Clarke
								</span>
							</div>
							{/* End Avatar */}
							{/* Avatar */}
							<div className="hs-tooltip hidden sm:inline-block hover:z-10">
								<span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
									M
								</span>
								<span
									className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
									role="tooltip"
									style={{
										position: 'fixed',
										inset: '0px auto auto 0px',
										margin: 0,
										transform: 'translate3d(0px, 5px, 0px)'
									}}
									data-popper-placement="bottom"
									data-popper-reference-hidden
									data-popper-escaped
								>
									Mark Colbert
								</span>
							</div>
							{/* End Avatar */}
							{/* Avatar */}
							<div className="hs-tooltip hidden sm:inline-block hover:z-10">
								<span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
									S
								</span>
								<span
									className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
									role="tooltip"
									style={{
										position: 'fixed',
										inset: '0px auto auto 0px',
										margin: 0,
										transform: 'translate3d(0px, 5px, 0px)'
									}}
									data-popper-placement="bottom"
									data-popper-reference-hidden
									data-popper-escaped
								>
									Sara Andrews
								</span>
							</div>
							{/* End Avatar */}
						</div>
					</div>
				</div>
			</div>
			{/* End Card */}
			{/* Card */}
			<div className="relative overflow-hidden p-4 sm:p-5 bg-white border border-gray-200 rounded-xl shadow-sm before:absolute before:top-0 before:end-0 before:size-full before:bg-gradient-to-br before:from-red-100 before:via-transparent before:blur-xl dark:bg-neutral-800 dark:border-neutral-700 dark:before:from-red-800/30 dark:before:via-transparent">
				<div className="relative z-10">
					{/* Header */}
					<div className="flex justify-between gap-x-3">
						{/* Icon */}
						<span className="mb-3 inline-flex justify-center items-center size-8 md:size-10 rounded-lg bg-white text-gray-700 shadow dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
							<svg
								className="shrink-0 size-4 md:size-5 text-red-500"
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
								<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
								<path d="M12 9v4" />
								<path d="M12 17h.01" />
							</svg>
						</span>
						{/* End Icon */}
						<div>
							{/* More Dropdown */}
							<div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
								<button
									id="hs-pro-dusd4"
									type="button"
									className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									aria-haspopup="menu"
									aria-expanded="false"
									aria-label="Dropdown"
								>
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
										<circle cx={12} cy={12} r={1} />
										<circle cx={12} cy={5} r={1} />
										<circle cx={12} cy={19} r={1} />
									</svg>
								</button>
								{/* Dropdown */}
								<div
									className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-36 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="hs-pro-dusd4"
								>
									<div className="p-1">
										<button
											type="button"
											className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
										>
											<svg
												className="shrink-0 size-3.5 mt-0.5"
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
												<circle cx={18} cy={5} r={3} />
												<circle cx={6} cy={12} r={3} />
												<circle cx={18} cy={19} r={3} />
												<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
												<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
											</svg>
											Share stats
										</button>
										<button
											type="button"
											className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
										>
											<svg
												className="shrink-0 size-3.5 mt-0.5"
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
												<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
												<path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
												<path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
												<line x1={2} x2={22} y1={2} y2={22} />
											</svg>
											Hide stats
										</button>
									</div>
								</div>
								{/* End Dropdown */}
							</div>
							{/* End More Dropdown */}
						</div>
					</div>
					{/* End Header */}
					<h2 className="text-sm md:text-base text-gray-800 dark:text-neutral-200">
						Fake accounts
					</h2>
					<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3">
						<h3 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
							2
						</h3>
						<div className="flex items-center -space-x-2">
							{/* Avatar */}
							<div className="hs-tooltip hidden sm:inline-block hover:z-10">
								<span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
									C
								</span>
								<span
									className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
									role="tooltip"
									style={{
										position: 'fixed',
										inset: '0px auto auto 0px',
										margin: 0,
										transform: 'translate3d(0px, 5px, 0px)'
									}}
									data-popper-placement="bottom"
									data-popper-reference-hidden
									data-popper-escaped
								>
									Chris Mathew
								</span>
							</div>
							{/* End Avatar */}
							{/* Avatar */}
							<div className="hs-tooltip hidden sm:inline-block hover:z-10">
								<span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
									L
								</span>
								<span
									className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
									role="tooltip"
									style={{
										position: 'fixed',
										inset: '0px auto auto 0px',
										margin: 0,
										transform: 'translate3d(0px, 5px, 0px)'
									}}
									data-popper-placement="bottom"
									data-popper-reference-hidden
									data-popper-escaped
								>
									Lori Hunter
								</span>
							</div>
							{/* End Avatar */}
							{/* Avatar */}
							<div className="hs-tooltip hidden sm:inline-block hover:z-10">
								<span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
									F
								</span>
								<span
									className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
									role="tooltip"
									style={{
										position: 'fixed',
										inset: '0px auto auto 0px',
										margin: 0,
										transform: 'translate3d(0px, 5px, 0px)'
									}}
									data-popper-placement="bottom"
									data-popper-reference-hidden
									data-popper-escaped
								>
									Finch Hoot
								</span>
							</div>
							{/* End Avatar */}
						</div>
					</div>
				</div>
				{/* End Col */}
			</div>
			{/* End Card */}
		</div>
	)
}

export default ReportStats
