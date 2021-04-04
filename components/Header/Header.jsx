import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import useWindowResize from '../../hook/useWindowResize'
import Button from '../ui/Button/Button'

import { Animated } from "react-animated-css";
import { isInViewport } from '../../helpers/isInViewport.helper';

const Header = ({ company, header }) => {
	const isMounted = useRef(true)
	const theContainer = useRef()
	const size = useWindowResize()

	const [rightStyle, setRightStyle] = useState({ right: 0 })

	//Animation
	const animatedHeaderImage = useRef()
	const animatedLogo = useRef()
	const [isLogoVisible, setIsLogoVisible] = useState(false)
	const [isImageVisible, setIsImageVisible] = useState(false)

	useEffect(() => {
		isInViewport(animatedLogo) && setIsLogoVisible(true)
		isInViewport(animatedHeaderImage) && setIsImageVisible(true)
		window.addEventListener('scroll', () => {
			isInViewport(animatedLogo) && setIsLogoVisible(true)
			isInViewport(animatedHeaderImage) && setIsImageVisible(true)

		})
	}, [isInViewport])

	useEffect(() => {
		return () => {
			isMounted.current = false
		}
	}, [])


	useEffect(() => {
		let containerWidth = theContainer.current.offsetWidth
		setRightStyle((rightStyle) => {
			return { right: -(size[0] - containerWidth) / 2 }
		})
		window.addEventListener('resize', () => {
			setRightStyle((rightStyle) => {
				return { right: -(size[0] - containerWidth) / 2 }
			})
		})
	}, [size, setRightStyle])

	return (
		<header className='home-header' >
			<div ref={ theContainer } className='bratic-container'>
				<article className='left'>
					<Animated animationInDuration={ 500 } animationIn="fadeInDown" isVisible={ isLogoVisible }>
						<div ref={ animatedLogo } className='logo'>
							<img src={ company.mainLogo } alt='' />
						</div>
					</Animated>
					<h1>{ header.title }</h1>
					<h2>{ header.subtitle }</h2>
					<div className='btn-group'>
						<Button link='/#quienes-somos' text='Quiénes Somos' type='primary' />
						<Button link='/servicios' text='Servicios' type='secondary' />
					</div>
				</article>


				<article className='right'>
					<Animated animationInDuration={ 1500 } animationIn="fadeInRight" isVisible={ isImageVisible }>
						<figure ref={ animatedHeaderImage } style={ rightStyle }>
							<img src={ header.uniqueImage } alt='' />
						</figure>
					</Animated>
				</article>
			</div>
		</header>
	)
}

export default Header
