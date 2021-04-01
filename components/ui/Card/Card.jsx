import React, { useEffect, useRef, useState } from 'react'
import { isInViewport } from '../../../helpers/isInViewport.helper'
import Button from '../Button/Button'
import { Animated } from 'react-animated-css'
import Link from 'next/link'

const Card = ({ title, text, link, delay }) => {
	const card = useRef()
	const [cardIsInView, setCardIsInView] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			isInViewport(card) && setCardIsInView(true)
		})
	}, [isInViewport])


	return (

		<Animated animationIn="fadeInUp" isVisible={ cardIsInView } animationInDelay={ delay } className='each-card'>
			<Link href={ link }>
				<a className="link-container" ref={ card } >
					<div className='fix'>
						<p className='title'>{ title }</p>
						<p className='text'>{ text }</p>
					</div>
					<Button text='Saber más' type='more' />
				</a>
			</Link>
		</Animated>
	)
}

export default Card
