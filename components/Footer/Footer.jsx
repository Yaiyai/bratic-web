import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaEnvelope, FaLinkedin } from "react-icons/fa";


const Footer = ({ company }) => {
	const isMounted = useRef(true)
	useEffect(() => {
		return () => {
			isMounted.current = false
		}
	}, [])

	return (
		<footer>
			<article className='top'>
				<div className='bratic-container'>
					<div className='up'>
						<h2>
							En <span className='orange'>bratic</span> queremos ser tu <span className='orange'>partner digital</span>
						</h2>
						<Link href='/#contacto'>
							<a className='my-btn'>¡Hablemos!</a>
						</Link>
					</div>
					<nav className='down'>
						<div className='left'>
							<Link href='/'>
								<a>
									<figure className='logo'>
										<img src={ company?.companyFetched?.secondaryLogo } alt='bratic Logo' />
									</figure>
								</a>
							</Link>
							<ul className='footer-links'>
								<li>
									<Link href='/#quienes-somos'>
										<a>Quiénes Somos</a>
									</Link>
								</li>
								<li>
									<Link href='/servicios'>
										<a>Servicios</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className='right'>
							<a href={ company?.companyFetched?.linkedin } className='rrss-icon' target='new'>
								<FaLinkedin />
							</a>
							<a href={ `mailto:${company?.companyFetched?.mainEmail}` } className='rrss-icon' target='new'>
								<FaEnvelope />
							</a>
						</div>
					</nav>
				</div>
			</article>
			<article className='bottom'>
				<div className='bratic-container'>
					<ul>
						<li>
							<Link href='/politica-privacidad'>
								<a>Política de Privacidad</a>
							</Link>
						</li>
						<span>·</span>
						<li>
							<Link href='/aviso-legal'>
								<a>Aviso Legal</a>
							</Link>
						</li>
					</ul>
					<small>&copy; { company?.companyFetched?.name }</small>
				</div>
			</article>
		</footer>
	)
}

export default Footer
