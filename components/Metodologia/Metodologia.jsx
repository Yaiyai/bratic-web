import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '../ui/Button/Button'
import { Animated } from 'react-animated-css'
import { isInViewport } from '../../helpers/isInViewport.helper'


const Metodologia = () => {
	const number1 = useRef()
	const number2 = useRef()
	const number3 = useRef()

	const [isNumer1Visible, setIsNumer1Visible] = useState(false)
	const [isNumer2Visible, setIsNumer2Visible] = useState(false)
	const [isNumer3Visible, setIsNumer3Visible] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			isInViewport(number1) && setIsNumer1Visible(true)
			isInViewport(number2) && setIsNumer2Visible(true)
			isInViewport(number3) && setIsNumer3Visible(true)
		})
	}, [isInViewport])


	return (
		<section className='metodologia bratic-container'>
			<h2>Metodología bratic</h2>
			<article className='time-line'>
				<Animated isVisible={ isNumer1Visible } animationIn="fadeInLeft" animationInDelay={ 0 } className='number'>
					<p ref={ number1 }>1</p>
				</Animated>
				<Animated isVisible={ isNumer2Visible } animationIn="fadeInLeft" animationInDelay={ 250 } className='number'>
					<p ref={ number2 }>2</p>
				</Animated>
				<Animated isVisible={ isNumer3Visible } animationIn="fadeInLeft" animationInDelay={ 500 } className='number'>
					<p ref={ number3 }>3</p>
				</Animated>
			</article>
			<article className='descriptions'>
				<div className='each'>
					<h3>Diagnóstico</h3>
					<ul>
						<li>
							<FontAwesomeIcon icon={ faCheckCircle } />
							Visita a tu empresa y diagnóstico de la situación actual.
						</li>
						<li>
							<FontAwesomeIcon icon={ faCheckCircle } />
							Retos & Oportunidades.
						</li>
						<li>
							<FontAwesomeIcon icon={ faCheckCircle } />
							Workshop colaborativo contigo y los tuyos.
						</li>
					</ul>
				</div>
				<div className='each'>
					<h3>Plan</h3>
					<ul>
						<li>
							<FontAwesomeIcon icon={ faCheckCircle } />
							Elaboración del Plan de Transformación Digital.
						</li>
					</ul>
				</div>
				<div className='each'>
					<h3>Partner Digital</h3>
					<p>
						<span>¿Te interesa algún proyecto?</span> <br /> ¡Te acompañamos en todo el proceso de puesta en marcha!
					</p>
				</div>
			</article>
			<Button type='primary' text='Saber más' link='/servicios#metodologia' />
		</section>
	)
}

export default Metodologia
