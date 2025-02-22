import React, { FC, ReactNode } from 'react'

import './style.scss'

interface IProps {
	onCLick?: () => void
	children?: ReactNode
	isActive?: boolean
	isTransparent?: boolean
	isOverlayBackgroundLight?: boolean
}
const Overlay: FC<IProps> = ({ onCLick, children, isActive = true, isOverlayBackgroundLight }) => {
	return (
		<div
			className={`overlay ${isActive ? 'overlay_active' : ''} ${isOverlayBackgroundLight ? 'overlay_background-light' : 'overlay_background-dark'}`}
			onClick={onCLick}
		>
			{children}
		</div>
	)
}

export default Overlay
