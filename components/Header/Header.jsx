import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

const Header = ({ company }) => {
	const isMounted = useRef(true)
	const theHeader = useRef(null)
	const theContainer = useRef(null)

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

			setRightStyle({ right: -(headerWidth - containerWidth) / 2 })
		}
	}, [])

	return (
		<header ref={theHeader}>
			<div ref={theContainer} className='container'>
				<article className='left'>
					<div className='logo'>
						<img src={company.mainLogo} alt='' />
					</div>
					<h1>Consultoría Digital</h1>
					<h2>
						Tu <span className='red'>partner digital</span>
					</h2>
					<div className='btn-group'>
						<Link href='/'>
							<a className='my-btn'>Quiénes Somos</a>
						</Link>
						<Link href='/'>
							<a className='my-btn secondary'>Servicios</a>
						</Link>
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
