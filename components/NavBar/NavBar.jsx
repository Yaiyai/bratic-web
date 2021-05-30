import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
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
		}
		return () => {
			isMounted.current = false
		}
	}, [theNav, theHeight, size])



	return (
		<nav ref={ theNav } className='main-nav'>
			<div className='bratic-container'>
				<Link href='/#inicio'>
					<a>
						<figure className='logo'>
							<img src={ company?.companyFetched?.mainLogo } alt='bratic Logo' />
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
