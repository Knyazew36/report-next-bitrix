import clsx from 'clsx'

import { FC } from 'react'

interface IProps {
	direction?: 'vertical' | 'horizontal'
	className?: string
}
const Divider: FC<IProps> = ({ direction = 'vertical', className }) => {
	return direction === 'vertical' ? (
		<div
			className={clsx(
				'h-full grow border-t border-gray-200 dark:border-neutral-700 sm:border-s sm:border-t-0',
				className && className
			)}
		></div>
	) : (
		<div className={clsx('bgr-gray-200 h-[1px] w-full grow dark:bg-neutral-700', className && className)}></div>
	)
}
export default Divider
