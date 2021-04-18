import React, { useEffect, useRef, useState } from 'react'
import { isInViewport } from '../../../helpers/isInViewport.helper'
import { Animated } from 'react-animated-css'

const ServicesCard = ({ bkg, features, title, specialClass, delay }) => {
	const animatedFeature = useRef()
	const [featureIsInView, setFeatureIsInView] = useState(false)

	useEffect(() => {
		isInViewport(animatedFeature) && setFeatureIsInView(true)
		window.addEventListener('scroll', () => isInViewport(animatedFeature) && setFeatureIsInView(true))
	}, [isInViewport])

	let imageCard = {
		backgroundImage: `url(${bkg})`,
	}
	return (
		<Animated animationIn="fadeInDown" isVisible={ featureIsInView } animationInDelay={ delay } className='servicios-card'>

			<article ref={ animatedFeature } >
				<span className={ `${specialClass}` } style={ imageCard }></span>
				<h2>{ title }</h2>
				<div className="features" dangerouslySetInnerHTML={ { __html: features } }></div>
			</article>
		</Animated>
	)
}

export default ServicesCard
