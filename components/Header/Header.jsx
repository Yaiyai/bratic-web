import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import useWindowResize from '../../hook/useWindowResize'
import Button from '../ui/Button/Button'

const Header = ({ company }) => {
	const isMounted = useRef(true)
	const theHeader = useRef(null)
	const theContainer = useRef(null)
	const size = useWindowResize()

	const [rightStyle, setRightStyle] = useState({ right: 0 })

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
		<header ref={theHeader}>
			<div ref={theContainer} className='bratic-container'>
				<article className='left'>
					<div className='logo'>
						<img src={company.mainLogo} alt='' />
					</div>
					<h1>Consultoría Digital</h1>
					<h2>
						Tu <span className='red'>partner digital</span>
					</h2>
					<div className='btn-group'>
						<Button link='/' text='Quiénes Somos' type='primary' />
						<Button link='/' text='Servicios' type='secondary' />
					</div>
				</article>

				<article className='right'>
					<figure style={rightStyle}>
						<img src='https://res.cloudinary.com/bratic-app/image/upload/v1613322131/header.png' alt='' />
					</figure>
				</article>
			</div>
		</header>
	)
}

export default Header
