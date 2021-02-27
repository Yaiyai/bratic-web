import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const NavBar = ({ company }) => {
	const [theHeight, setHeight] = useState(0)
	const isMounted = useRef(true)
	const theNav = useRef(null)

	useEffect(() => {
		setHeight(theNav.current.clientHeight)
		if (theNav) {
			window.addEventListener('scroll', addClass)
		}
		return () => {
			window.removeEventListener('scroll', addClass)
			isMounted.current = false
		}
	}, [theNav, theHeight])

	const addClass = () => {
		if (window.scrollY > theHeight) {
			return theNav.current.classList.add('scrolled')
		} else {
			return theNav.current.classList.remove('scrolled')
		}
	}

	const showMenu = () => {
		theNav.current.classList.toggle('open-submenu')
		const subMenu = theNav.current.querySelector('.sub-menu')
		subMenu.classList.toggle('show')
	}

	const hideMenu = () => {
		const subMenu = theNav.current.querySelector('.sub-menu')
		subMenu.classList.remove('show')
	}

	return (
		<nav ref={theNav} className='desktop-nav'>
			<div className='bratic-container'>
				<Link href='/'>
					<a>
						<figure className='logo'>
							<img src={company.companyFetched.mainLogo} alt='Bratic Logo' />
						</figure>
					</a>
				</Link>
				<article className='links'>
					<ul className='normal'>
						<li>
							<Link href='/'>
								<a>Quiénes Somos</a>
							</Link>
						</li>
						<li>
							<Link href='/'>
								<a>Servicios</a>
							</Link>
						</li>
						<li>
							<Link href='/'>
								<a>Partners</a>
							</Link>
						</li>
						<li>
							<Link href='/'>
								<a>Clientes</a>
							</Link>
						</li>
					</ul>
					<ul className='important'>
						<li>
							<Link href='/'>
								<a>Contacto</a>
							</Link>
						</li>
						<a href={company.companyFetched.linkedin} className='rrss-icon' target='new'>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</ul>
				</article>
			</div>
		</nav>
	)
}

export default NavBar
