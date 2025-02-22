import { CSSTransition } from 'react-transition-group'

import React, { FC, useEffect, useRef } from 'react'

import './style.scss'
import Overlay from '@/shared/overlay/overlay/ui/Overlay'

interface IProps {
	state: boolean
	children: React.ReactNode
	contentTop?: boolean
	closeOnOverlayClick?: boolean
	onClose?: () => void
}

const AnimateLayout: FC<IProps> = ({
	state,
	children,
	contentTop,
	closeOnOverlayClick,
	onClose
}) => {
	const nodeRef = useRef(null)

	return (
		<CSSTransition
			nodeRef={nodeRef}
			classNames="active"
			in={state}
			mountOnEnter
			unmountOnExit
			timeout={300}
		>
			<div className="animate-layout z-50" ref={nodeRef}>
				<Overlay onCLick={closeOnOverlayClick ? onClose : undefined}>
					<div
						className={`content ${contentTop ? 'content_top' : null} `}
						onClick={e => {
							e.stopPropagation()
						}}
					>
						{children}
					</div>
				</Overlay>
			</div>
		</CSSTransition>
	)
}

export default AnimateLayout
