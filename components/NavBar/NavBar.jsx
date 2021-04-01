import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import useWindowResize from '../../hook/useWindowResize'

import Desktop from './Desktop/Desktop'
import Mobile from './Mobile/Mobile'

const NavBar = ({ company }) => {
	const [theHeight, setHeight] = useState(0)
	const isMounted = useRef(true)
	const theNav = useRef(null)

	const size = useWindowResize()

	useEffect(() => {
		if (theNav) {
			setHeight(theNav.current.clientHeight)
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
		<nav ref={ theNav } className='main-nav'>
			<div className='bratic-container'>
				<Link href='/#inicio'>
					<a>
						<figure className='logo'>
							<img src={ company.companyFetched.mainLogo } alt='bratic Logo' />
						</figure>
					</a>
				</Link>
				{ size[0] <= 991 && <Mobile company={ company } menuHeight={ theHeight } /> }
				{ size[0] > 992 && <Desktop company={ company } /> }
			</div>
		</nav>
	)
}

export default NavBar
