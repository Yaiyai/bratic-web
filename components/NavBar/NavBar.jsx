import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const NavBar = ({ company }) => {
	return (
		<nav>
			<figure className='logo'>
				<img src={company.companyFetched.mainLogo} alt='Bratic Logo' />
			</figure>
			<article className='links'>
				<div className='normal'>
					<li>
						<Link href=''>
							<a>Quiénes Somos</a>
						</Link>
					</li>
					<li>
						<Link href=''>
							<a>Servicios</a>
						</Link>
					</li>
					<li>
						<Link href=''>
							<a>Partners</a>
						</Link>
					</li>
					<li>
						<Link href=''>
							<a>Clientes</a>
						</Link>
					</li>
				</div>
				<div className='important'>
					<li>
						<Link href=''>
							<a>Contacto</a>
						</Link>
					</li>
					<a href={company.companyFetched.linkedin} className='rrss-icon' target='new'>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</div>
			</article>
		</nav>
	)
}

export default NavBar
