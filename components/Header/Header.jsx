import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import useWindowResize from '../../hook/useWindowResize'
import Button from '../ui/Button/Button'

import { Animated } from "react-animated-css";
import { isInViewport } from '../../helpers/isInViewport.helper';

const Header = ({ company }) => {
	const isMounted = useRef(true)
	const theHeader = useRef(null)
	const theContainer = useRef(null)
	const size = useWindowResize()

	const [rightStyle, setRightStyle] = useState({ right: 0 })

	//Animation
	const animatedHeaderImage = useRef()
	const animatedLogo = useRef()
	const [isLogoVisible, setIsLogoVisible] = useState(false)
	const [isImageVisible, setIsImageVisible] = useState(false)

	useEffect(() => {
		if (isMounted.current) {
			isInViewport(animatedLogo) && setIsLogoVisible(true)
			isInViewport(animatedHeaderImage) && setIsImageVisible(true)
		}
	}, [isInViewport])

	useEffect(() => {
		return () => {
			isMounted.current = false
		}
	}, [])

	useEffect(() => {
		if (isMounted.current) {
			let headerWidth = theHeader.current.offsetWidth
			let containerWidth = theContainer.current.offsetWidth

			setRightStyle((rightStyle) => {
				return { right: -(headerWidth - containerWidth) / 2 }
			})
		}
	}, [])

	useEffect(() => {
		window.addEventListener('resize', () => {
			let headerWidth = theHeader.current.offsetWidth
			let containerWidth = theContainer.current.offsetWidth

			setRightStyle((rightStyle) => {
				return { right: -(headerWidth - containerWidth) / 2 }
			})
		})
	}, [size])

	return (
		<header className='home-header' ref={ theHeader }>
			<div ref={ theContainer } className='bratic-container'>
				<article className='left'>
					<Animated animationInDuration={ 500 } animationIn="fadeInDown" isVisible={ isLogoVisible }>
						<div ref={ animatedLogo } className='logo'>
							<img src={ company.mainLogo } alt='' />
						</div>
					</Animated>
					<h1>Consultoría Digital</h1>
					<h2>
						Tu <span className='red'>partner digital</span>
					</h2>
					<div className='btn-group'>
						<Button link='/#quienes-somos' text='Quiénes Somos' type='primary' />
						<Button link='/servicios' text='Servicios' type='secondary' />
					</div>
				</article>


				<article className='right'>
					<Animated animationInDuration={ 1500 } animationIn="fadeInRight" isVisible={ isImageVisible }>
						<figure ref={ animatedHeaderImage } style={ rightStyle }>
							<img src='https://res.cloudinary.com/bratic-app/image/upload/v1613322131/header.png' alt='' />
						</figure>
					</Animated>
				</article>
			</div>
		</header>
	)
}

export default Header
