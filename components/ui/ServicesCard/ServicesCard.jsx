import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { isInViewport } from '../../../helpers/isInViewport.helper'
import { Animated } from 'react-animated-css'

const ServicesCard = ({ bkg, features, title, specialClass, delay }) => {
	const animatedFeature = useRef()
	const [featureIsInView, setFeatureIsInView] = useState(false)

	useEffect(() => {
		// window.addEventListener('scroll', () => {
		isInViewport(animatedFeature) && setFeatureIsInView(true)
		// })
	}, [isInViewport])

	let imageCard = {
		backgroundImage: `url(${bkg})`,
	}
	return (
		<Animated animationIn="fadeInDown" isVisible={ featureIsInView } animationInDelay={ delay } className='servicios-card'>

			<article ref={ animatedFeature } >
				<span className={ `${specialClass}` } style={ imageCard }></span>
				<h3>{ title }</h3>
				<ul>
					{ features?.map((ft, idx) => (
						<li key={ idx }>
							<FontAwesomeIcon icon={ faCheckCircle } />
							{ft }
						</li>
					)) }
				</ul>
			</article>
		</Animated>
	)
}

export default ServicesCard
