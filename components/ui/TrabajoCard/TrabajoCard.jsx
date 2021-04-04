import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { isInViewport } from '../../../helpers/isInViewport.helper'
import { Animated } from 'react-animated-css'

const TrabajoCard = ({ title, icon, trabajo, specialClass, delay }) => {
	const animatedFeature = useRef()
	const [featureIsInView, setFeatureIsInView] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			isInViewport(animatedFeature) && setFeatureIsInView(true)
		})
	}, [isInViewport])

	let iconCard = {
		backgroundImage: `url(${icon})`,
	}

	return (
		<Animated className='each-trabajo' animationIn="fadeInDown" isVisible={ featureIsInView } animationInDelay={ delay }>
			<article ref={ animatedFeature }>
				<span style={ iconCard } className={ specialClass }></span>
				<h3>{ title }</h3>
				<div className="problem-solution" dangerouslySetInnerHTML={ { __html: trabajo } }></div>
			</article>
		</Animated>
	)
}

export default TrabajoCard
