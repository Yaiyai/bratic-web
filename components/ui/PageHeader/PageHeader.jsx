import React, { useEffect, useRef, useState } from 'react'
import { isInViewport } from '../../../helpers/isInViewport.helper'
import { Animated } from 'react-animated-css'

const PageHeader = ({ title, bkg }) => {
	const animatedPageHeader = useRef()
	const [headerIsInView, setHeaderIsInView] = useState(false)

	useEffect(() => {
		isInViewport(animatedPageHeader) && setHeaderIsInView(true)
		window.addEventListener('scroll', () => isInViewport(animatedPageHeader) && setHeaderIsInView(true))
	}, [isInViewport])

	let headerStyle = {
		backgroundImage: `url(${bkg})`,
	}

	return (
		<>
			<Animated animationIn="fadeInDown" isVisible={ headerIsInView } animationInDuration={ 800 }>

				<header ref={ animatedPageHeader } style={ headerStyle } className='page-header'>
					<div className='bratic-container'>
						<h1>{ title }</h1>
					</div>
				</header>
			</Animated>
		</>
	)
}

export default PageHeader
