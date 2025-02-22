import React, { FC, JSX } from 'react'

interface IProps {
	svg?: JSX.Element
	label: string
	id: string
	checked: boolean
	onChange: () => void
}

const CheckboxWithIcons: FC<IProps> = ({ svg, label, id, checked, onChange }) => {
	return (
		<label
			htmlFor={id}
			className="p-3 flex items-center gap-x-3 text-sm bg-white border border-gray-200 text-gray-800 ring-1 ring-transparent cursor-pointer rounded-xl hover:border-purple-600 hover:ring-purple-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:ring-neutral-600 dark:hover:ring-neutral-600"
		>
			{svg && (
				<span className="flex shrink-0 justify-center items-center size-8 bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
					{svg}
				</span>
			)}
			<span className="grow">
				<span className="block">{label}</span>
			</span>
			<input
				type="radio"
				id={id}
				checked={checked} // ✅ Контролируемое значение
				onChange={onChange} // ✅ Контролируемый обработчик
				className="shrink-0 size-5 border-gray-200 rounded-full text-purple-600 focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-purple-500 dark:checked:border-purple-500 dark:focus:ring-offset-neutral-800"
			/>
		</label>
	)
}

export default CheckboxWithIcons
