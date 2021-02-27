import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faUser, faBuilding, faComment } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
const Contact = ({ company }) => {
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
			.catch((error) => console.log(error.text))
	}

	return (
		<>
			<section className='contact'>
				<div className='bratic-container'>
					<p className='pre-title'>¿Tienes alguna duda o necesitas ayuda?</p>
					<h2>Contáctanos</h2>
					<div className='fix'>
						<article className='left'>
							<p>
								Gracias por su interés en <span className='red'>Bratic</span>.
							</p>
							<p>Puedes ponerte en contacto con nuestro equipo de expertos utilizando los siguiente medios:</p>
							<ul>
								<li>
									<FontAwesomeIcon icon={faEnvelope} />
									<span className='red'>Email:</span> {company?.mainEmail}
								</li>
								<li>
									<FontAwesomeIcon icon={faPhone} />
									<span className='red'>Teléfono:</span>
									{company?.phone}
								</li>
								<li>
									<FontAwesomeIcon icon={faMapMarkerAlt} />
									<span className='red'>Oficina:</span> {company?.address}
								</li>
								<li>
									<FontAwesomeIcon icon={faClock} />
									<span className='red'>Horarios:</span> Estamos disponibles de 08:00h a 19:00h
								</li>
							</ul>
						</article>
						<article className='right'>
							<form onSubmit={sendEmail}>
								<div className='input-group'>
									<input type='text' name='name' placeholder='Nombre y apellidos*' required />
									<div className='icon'>
										<FontAwesomeIcon icon={faUser} />
									</div>
								</div>
								<div className='phone-email'>
									<div className='input-group'>
										<input type='phone' name='phone' placeholder='Teléfono de contacto*' required />
										<div className='icon'>
											<FontAwesomeIcon icon={faPhone} />
										</div>
									</div>
									<div className='input-group'>
										<input type='email' name='email' placeholder='Correo Electrónico*' required />
										<div className='icon'>
											<FontAwesomeIcon icon={faEnvelope} />
										</div>
									</div>
								</div>
								<div className='input-group'>
									<input type='text' name='company' placeholder='Empresa*' required />
									<div className='icon'>
										<FontAwesomeIcon icon={faBuilding} />
									</div>
								</div>
								<div className='input-group text-area'>
									<textarea name='message' placeholder='Mensaje' />
									<div className='icon'>
										<FontAwesomeIcon icon={faComment} />
									</div>
								</div>
								<div className='submit-group'>
									<div className='checkbox'>
										<input type='checkbox' name='checkbox' id='check' required />
										<label htmlFor='check'>
											Acepto la{' '}
											<a href='' className='red'>
												política de privacidad
											</a>
										</label>
									</div>
									<input className='my-btn' type='submit' />
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
