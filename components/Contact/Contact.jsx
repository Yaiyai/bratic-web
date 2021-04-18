import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faUser, faBuilding, faComment } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

import { isInViewport } from '../../helpers/isInViewport.helper'
import { Animated } from 'react-animated-css'
import Link from 'next/link'

const Contact = ({ company, contacto }) => {
	const [imageIsInView, setImageIsInView] = useState(false)
	const animatedImage = useRef()

	useEffect(() => {
		window.addEventListener('scroll', () => {
			isInViewport(animatedImage) && setImageIsInView(true)
		})
	}, [isInViewport])


	const sendEmail = (e) => {
		e.preventDefault()
		emailjs
			.sendForm(process.env.serviceEmail, process.env.templateEmail, e.target, process.env.userEmail)
			.then((result) =>
				Swal.fire({
					title: '¡Gracias!',
					html: 'Tu consulta ha sido enviada',
					confirmButtonText: 'Cerrar',
				})
			)
			.catch((error) => {
				Swal.fire({
					title: '¡Oh-Oh',
					html: 'Ha habido un error en el envío de la consulta, inténtalo de nuevo :)',
					confirmButtonText: 'Cerrar',
				})
			})
	}

	return (
		<>
			<section className='contact'>
				<div className='bratic-container'>
					<p className='pre-title'>{ contacto.subtitle }</p>
					<h2>{ contacto.title }</h2>
					<div className='fix'>
						<article className='left'>
							<div dangerouslySetInnerHTML={ contacto.parsedText }></div>
							<Animated animationIn={ 'fadeInDownBig' } isVisible={ imageIsInView }>
								<figure ref={ animatedImage }>
									<img src={ contacto.uniqueImage } alt="Contacto bratic" />
								</figure>
							</Animated>

						</article>
						<article className='right'>
							<form onSubmit={ sendEmail }>
								<div className='input-group'>
									<input type='text' name='name' placeholder='Nombre y apellidos*' required />
									<div className='icon'>
										<FontAwesomeIcon icon={ faUser } />
									</div>
								</div>
								<div className='phone-email'>
									<div className='input-group'>
										<input type='phone' name='phone' placeholder='Teléfono de contacto*' required />
										<div className='icon'>
											<FontAwesomeIcon icon={ faPhone } />
										</div>
									</div>
									<div className='input-group'>
										<input type='email' name='email' placeholder='Correo electrónico*' required />
										<div className='icon'>
											<FontAwesomeIcon icon={ faEnvelope } />
										</div>
									</div>
								</div>
								<div className='input-group'>
									<input type='text' name='company' placeholder='Empresa*' required />
									<div className='icon'>
										<FontAwesomeIcon icon={ faBuilding } />
									</div>
								</div>
								<div className='input-group text-area'>
									<textarea name='message' placeholder='Mensaje' />
									<div className='icon'>
										<FontAwesomeIcon icon={ faComment } />
									</div>
								</div>
								<div className='submit-group'>
									<div className='checkbox'>
										<input type='checkbox' name='checkbox' id='check' required />
										<label htmlFor='check'>
											Acepto la{ ' ' }
											<Link href='/politica-privacidad'>
												<a className='red'>
													política de privacidad
												</a>
											</Link>
										</label>
									</div>
									<button className='my-btn'>
										<input type='submit' />
									</button>
								</div>
							</form>
						</article>
					</div>
				</div>
			</section>
		</>
	)
}

export default Contact
