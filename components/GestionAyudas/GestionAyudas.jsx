import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import { Animated } from 'react-animated-css'
import { isInViewport } from '../../helpers/isInViewport.helper'

const GestionAyudas = ({ gestionAyudas }) => {
	const animatedImage = useRef()
	const [imageIsInView, setImageIsInView] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			isInViewport(animatedImage) && setImageIsInView(true)
		})
	}, [isInViewport])

	let quienesSomosImage = gestionAyudas.uniqueImage

	return (
		<section id='gestion-ayudas'>
			<div className="bratic-container">
				<Animated animationIn={ 'fadeInLeft' } isVisible={ imageIsInView } className='left'>
					<img ref={ animatedImage } src={ quienesSomosImage } alt='bratic quienes somos' />
				</Animated>
				<article className='right'>
					<h2>{ gestionAyudas.title }</h2>
					<div dangerouslySetInnerHTML={ gestionAyudas.parsedText }></div>
				</article>
			</div>
		</section>
	)
}

export default GestionAyudas
