import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '../ui/Button/Button'
import { Animated } from 'react-animated-css'
import { isInViewport } from '../../helpers/isInViewport.helper'


const Metodologia = ({ metodologia }) => {
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

	useEffect(() => {
		let allMetodos = metodologia.parsedText.__html.split('((METODO))')

	}, [])

	return (
		<section className='metodologia bratic-container'>
			<h2>{ metodologia.title }</h2>
			<div className="fix">
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
						<h3>{ metodologia.features[0] }</h3>
						<div dangerouslySetInnerHTML={ { __html: metodologia.text.split('((METODO))')[0] } }></div>
					</div>
					<div className='each'>
						<h3>{ metodologia.features[1] }</h3>
						<div dangerouslySetInnerHTML={ { __html: metodologia.text.split('((METODO))')[1] } }></div>
					</div>
					<div className='each'>
						<h3>{ metodologia.features[2] }</h3>
						<div dangerouslySetInnerHTML={ { __html: metodologia.text.split('((METODO))')[2] } }></div>
					</div>
				</article>
			</div>
		</section>
	)
}

export default Metodologia
